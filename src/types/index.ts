export type IllnessCategory =
  | 'Flu-like Illness'
  | 'Cold-like Illness'
  | 'Respiratory Pattern'
  | 'Digestive Pattern'
  | 'Allergy Pattern'
  | 'Healthy Pattern'
  | 'Skin-related Pattern'
  | 'Viral-like Pattern'
  | 'Mixed Symptoms'
  | 'Low Confidence Pattern';

export interface SymptomDef {
  id: string;
  name: string;
  category: 'General' | 'Respiratory' | 'Digestive' | 'Sensory/Skin' | 'Emergency-Style';
  iconName: string;
  description: string;
  typicalWeight: number; // 0.1 to 1.0 importance weight
}

export interface TrainingRecord {
  id: string;
  caseCode: string;
  symptoms: string[];
  illnessCategory: IllnessCategory;
  confidenceWeight: number;
  patternId: string;
  ageGroup: 'Child' | 'Teen' | 'Adult' | 'Senior';
  seasonRecorded: 'Winter' | 'Spring' | 'Summer' | 'Monsoon' | 'Autumn';
}

export interface MatchResult {
  category: IllnessCategory;
  confidence: number; // 0 to 100
  matchedSymptoms: string[];
  missingKeySymptoms: string[];
  reason: string;
  reasonBullets: string[];
  topSimilarCases: {
    caseCode: string;
    category: IllnessCategory;
    similarityPercent: number;
    matchedCount: number;
    symptoms: string[];
  }[];
  allCategoryScores: {
    category: IllnessCategory;
    score: number;
    percentage: number;
  }[];
  radarVectorData: {
    dimension: string;
    currentPatient: number;
    categoryAverage: number;
  }[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  conceptTag: 'Pattern Recognition' | 'Training Data' | 'Probabilities' | 'AI vs Doctor' | 'AI Errors';
}
