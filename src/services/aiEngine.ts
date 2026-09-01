import { FICTIONAL_TRAINING_DATASET, SYMPTOMS_LIST } from '../data/fictionalDataset';
import type { IllnessCategory, MatchResult } from '../types';

/**
 * Calculates Jaccard & Weighted Cosine Similarity between user selected symptoms and a training record.
 */
function calculateSimilarity(
  userSymptoms: string[],
  recordSymptoms: string[],
  symptomWeights: Record<string, number>
): { jaccard: number; weightedCosine: number; combinedScore: number; matchedCount: number } {
  const userSet = new Set(userSymptoms);
  const recSet = new Set(recordSymptoms);

  if (userSet.size === 0 && recSet.size === 0) {
    return { jaccard: 1.0, weightedCosine: 1.0, combinedScore: 1.0, matchedCount: 0 };
  }
  if (userSet.size === 0 || recSet.size === 0) {
    return { jaccard: 0, weightedCosine: 0, combinedScore: 0, matchedCount: 0 };
  }

  // Intersection & Union
  let intersectionWeight = 0;
  let unionWeight = 0;
  let matchedCount = 0;

  const allKeys = Array.from(new Set([...userSymptoms, ...recordSymptoms]));

  let userDotRec = 0;
  let userNormSq = 0;
  let recNormSq = 0;

  allKeys.forEach((sym) => {
    const weight = symptomWeights[sym] || 0.8;
    const inUser = userSet.has(sym) ? 1 : 0;
    const inRec = recSet.has(sym) ? 1 : 0;

    if (inUser && inRec) {
      intersectionWeight += weight;
      matchedCount++;
    }
    if (inUser || inRec) {
      unionWeight += weight;
    }

    const uVal = inUser * weight;
    const rVal = inRec * weight;
    userDotRec += uVal * rVal;
    userNormSq += uVal * uVal;
    recNormSq += rVal * rVal;
  });

  const jaccard = unionWeight > 0 ? intersectionWeight / unionWeight : 0;
  const cosine =
    userNormSq > 0 && recNormSq > 0
      ? userDotRec / (Math.sqrt(userNormSq) * Math.sqrt(recNormSq))
      : 0;

  // Blended score
  const combinedScore = jaccard * 0.4 + cosine * 0.6;

  return { jaccard, weightedCosine: cosine, combinedScore, matchedCount };
}

/**
 * Main K-Nearest Neighbors Pattern Matching Engine
 */
export function runAiSimulation(selectedSymptomIds: string[]): MatchResult {
  const symptomWeights: Record<string, number> = {};
  SYMPTOMS_LIST.forEach((s) => {
    symptomWeights[s.id] = s.typicalWeight;
  });

  // Special Case: Zero symptoms selected
  if (selectedSymptomIds.length === 0) {
    const healthyCases = FICTIONAL_TRAINING_DATASET.filter(
      (r) => r.illnessCategory === 'Healthy Pattern'
    ).slice(0, 3);

    return {
      category: 'Healthy Pattern',
      confidence: 99,
      matchedSymptoms: [],
      missingKeySymptoms: [],
      reason:
        'The simulation detected an absence of all active physiological symptom indicators.',
      reasonBullets: [
        'Zero affirmative symptoms were provided to the pattern matching engine.',
        'Matched perfectly with baseline control records in the fictional training dataset.',
        'Demonstrates how machine learning algorithms handle empty/null feature vectors.',
        'In clinical reality, a physician evaluates vitals, history, and preventative wellness.'
      ],
      topSimilarCases: healthyCases.map((c) => ({
        caseCode: c.caseCode,
        category: c.illnessCategory,
        similarityPercent: 100,
        matchedCount: 0,
        symptoms: c.symptoms
      })),
      allCategoryScores: [
        { category: 'Healthy Pattern', score: 1.0, percentage: 99 },
        { category: 'Cold-like Illness', score: 0.05, percentage: 5 },
        { category: 'Allergy Pattern', score: 0.03, percentage: 3 },
        { category: 'Flu-like Illness', score: 0.01, percentage: 1 }
      ],
      radarVectorData: [
        { dimension: 'Respiratory', currentPatient: 0, categoryAverage: 0 },
        { dimension: 'Systemic/Fever', currentPatient: 0, categoryAverage: 0 },
        { dimension: 'Digestive', currentPatient: 0, categoryAverage: 0 },
        { dimension: 'Sensory Loss', currentPatient: 0, categoryAverage: 0 },
        { dimension: 'Skin/Cutaneous', currentPatient: 0, categoryAverage: 0 }
      ]
    };
  }

  // 1. Calculate similarity across all 150 training samples
  const scoredRecords = FICTIONAL_TRAINING_DATASET.map((record) => {
    const sim = calculateSimilarity(selectedSymptomIds, record.symptoms, symptomWeights);
    return {
      ...record,
      similarity: sim.combinedScore * record.confidenceWeight,
      rawSimilarity: sim.combinedScore,
      matchedCount: sim.matchedCount
    };
  });

  // Sort descending by similarity
  scoredRecords.sort((a, b) => b.similarity - a.similarity);

  // 2. Aggregate Top-K Neighbors (K=7)
  const K = 7;
  const topK = scoredRecords.slice(0, K);

  const categoryScores: Record<string, { totalWeight: number; count: number; bestSim: number }> = {};

  topK.forEach((neighbor) => {
    const cat = neighbor.illnessCategory;
    if (!categoryScores[cat]) {
      categoryScores[cat] = { totalWeight: 0, count: 0, bestSim: 0 };
    }
    categoryScores[cat].totalWeight += neighbor.similarity;
    categoryScores[cat].count += 1;
    if (neighbor.similarity > categoryScores[cat].bestSim) {
      categoryScores[cat].bestSim = neighbor.similarity;
    }
  });

  // Find winning category
  let winningCategory: IllnessCategory = 'Low Confidence Pattern';
  let highestScore = -1;
  let totalVoteWeight = 0;

  Object.entries(categoryScores).forEach(([cat, data]) => {
    totalVoteWeight += data.totalWeight;
    if (data.totalWeight > highestScore) {
      highestScore = data.totalWeight;
      winningCategory = cat as IllnessCategory;
    }
  });

  const bestNeighbor = topK[0];
  const maxSimilarity = bestNeighbor ? bestNeighbor.rawSimilarity : 0;

  // Determine probabilistic confidence %
  let calculatedConfidence = Math.round(maxSimilarity * 94 + (highestScore / (totalVoteWeight || 1)) * 6);

  // If input symptoms are few (e.g. single non-specific symptom) or heavily mixed
  if (selectedSymptomIds.length === 1) {
    calculatedConfidence = Math.min(calculatedConfidence, 48);
    if (calculatedConfidence < 50) {
      winningCategory = 'Low Confidence Pattern';
    }
  } else if (selectedSymptomIds.length >= 4 && maxSimilarity < 0.55) {
    winningCategory = 'Mixed Symptoms';
    calculatedConfidence = Math.round(maxSimilarity * 65);
  }

  calculatedConfidence = Math.max(15, Math.min(99, calculatedConfidence));

  // Determine Matched vs Missing Symptoms
  const matchedSymptoms = selectedSymptomIds.filter((s) =>
    bestNeighbor?.symptoms.includes(s)
  );

  const expectedForCategory = Array.from(
    new Set(
      FICTIONAL_TRAINING_DATASET.filter((r) => r.illnessCategory === winningCategory)
        .flatMap((r) => r.symptoms)
    )
  );

  const missingKeySymptoms = expectedForCategory
    .filter((s) => !selectedSymptomIds.includes(s))
    .slice(0, 3);

  // Build Natural Language Explanations
  const symptomNameMap: Record<string, string> = {};
  SYMPTOMS_LIST.forEach((s) => {
    symptomNameMap[s.id] = s.name;
  });

  const matchedNames = matchedSymptoms.map((id) => symptomNameMap[id] || id).join(', ');
  const missingNames = missingKeySymptoms.map((id) => symptomNameMap[id] || id).join(', ');

  let mainReason = `AI detected ${matchedNames || 'the specified symptoms'}. These co-occurred strongly in historical training vectors labeled "${winningCategory}".`;
  
  const reasonBullets: string[] = [
    `The pattern recognizer matched ${matchedSymptoms.length} of your ${selectedSymptomIds.length} chosen symptoms directly against training clusters.`,
    `Training records with ${matchedNames || 'these symptoms'} demonstrated a ${(maxSimilarity * 100).toFixed(0)}% mathematical cosine alignment.`,
  ];

  if (missingKeySymptoms.length > 0 && winningCategory !== 'Mixed Symptoms' && winningCategory !== 'Low Confidence Pattern') {
    reasonBullets.push(
      `Because typical symptoms like [${missingNames}] were absent, the model discounted full certainty to avoid false positives.`
    );
  } else if (winningCategory === 'Mixed Symptoms') {
    reasonBullets.push(
      `The selected symptoms span multiple unrelated organ systems (e.g. digestive vs respiratory), creating high pattern entropy.`
    );
  } else if (winningCategory === 'Low Confidence Pattern') {
    reasonBullets.push(
      `A single or non-specific symptom does not provide enough mathematical dimensions for a decisive category match.`
    );
  }

  reasonBullets.push(
    'Remember: This is a purely statistical simulation. A real human doctor integrates physical exams, vital signs, and clinical context.'
  );

  // Build radar vector dimensions for data viz
  const countCategoryOverlap = (catGroup: string[]) =>
    selectedSymptomIds.filter((s) => catGroup.includes(s)).length / (catGroup.length || 1);

  const radarVectorData = [
    {
      dimension: 'Respiratory',
      currentPatient: Math.round(countCategoryOverlap(['cough', 'runny_nose', 'sore_throat', 'sneezing', 'difficulty_breathing']) * 100),
      categoryAverage: winningCategory.includes('Respiratory') || winningCategory.includes('Cold') ? 75 : 25
    },
    {
      dimension: 'Systemic / Fever',
      currentPatient: Math.round(countCategoryOverlap(['fever', 'fatigue', 'body_pain', 'headache']) * 100),
      categoryAverage: winningCategory.includes('Flu') ? 85 : 20
    },
    {
      dimension: 'Digestive',
      currentPatient: Math.round(countCategoryOverlap(['nausea', 'vomiting', 'diarrhea']) * 100),
      categoryAverage: winningCategory.includes('Digestive') ? 90 : 15
    },
    {
      dimension: 'Sensory Loss',
      currentPatient: Math.round(countCategoryOverlap(['loss_of_taste', 'loss_of_smell']) * 100),
      categoryAverage: winningCategory.includes('Viral') ? 80 : 10
    },
    {
      dimension: 'Cutaneous / Skin',
      currentPatient: Math.round(countCategoryOverlap(['rash']) * 100),
      categoryAverage: winningCategory.includes('Skin') || winningCategory.includes('Allergy') ? 85 : 15
    }
  ];

  // Top 3 similar cases
  const topSimilarCases = topK.slice(0, 3).map((item) => ({
    caseCode: item.caseCode,
    category: item.illnessCategory,
    similarityPercent: Math.round(item.rawSimilarity * 100),
    matchedCount: item.matchedCount,
    symptoms: item.symptoms
  }));

  // Scores across major categories
  const allCategories: IllnessCategory[] = [
    'Flu-like Illness',
    'Cold-like Illness',
    'Respiratory Pattern',
    'Digestive Pattern',
    'Allergy Pattern',
    'Viral-like Pattern',
    'Skin-related Pattern',
    'Mixed Symptoms'
  ];

  const allCategoryScores = allCategories.map((cat) => {
    const raw = categoryScores[cat]?.totalWeight || 0;
    const pct = Math.min(99, Math.round((raw / (totalVoteWeight || 1)) * 100));
    return {
      category: cat,
      score: raw,
      percentage: pct
    };
  }).sort((a, b) => b.percentage - a.percentage);

  return {
    category: winningCategory,
    confidence: calculatedConfidence,
    matchedSymptoms,
    missingKeySymptoms,
    reason: mainReason,
    reasonBullets,
    topSimilarCases,
    allCategoryScores,
    radarVectorData
  };
}
