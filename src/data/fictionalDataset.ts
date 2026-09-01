import type { SymptomDef, TrainingRecord, QuizQuestion } from '../types';

export const SYMPTOMS_LIST: SymptomDef[] = [
  { id: 'fever', name: 'Fever', category: 'General', iconName: 'Thermometer', description: 'Elevated fictional body temperature', typicalWeight: 0.9 },
  { id: 'cough', name: 'Cough', category: 'Respiratory', iconName: 'Wind', description: 'Persistent dry or wet cough sound', typicalWeight: 0.85 },
  { id: 'fatigue', name: 'Fatigue', category: 'General', iconName: 'BatteryLow', description: 'Unusual tiredness or energy exhaustion', typicalWeight: 0.7 },
  { id: 'runny_nose', name: 'Runny Nose', category: 'Respiratory', iconName: 'Droplets', description: 'Excess nasal drainage and congestion', typicalWeight: 0.75 },
  { id: 'headache', name: 'Headache', category: 'General', iconName: 'Brain', description: 'Dull or throbbing head pain', typicalWeight: 0.65 },
  { id: 'body_pain', name: 'Body Pain', category: 'General', iconName: 'Activity', description: 'Generalized muscle and joint ache', typicalWeight: 0.8 },
  { id: 'vomiting', name: 'Vomiting', category: 'Digestive', iconName: 'AlertCircle', description: 'Sudden gastric expulsion response', typicalWeight: 0.95 },
  { id: 'diarrhea', name: 'Diarrhea', category: 'Digestive', iconName: 'Waves', description: 'Frequent loose or watery stool', typicalWeight: 0.95 },
  { id: 'sore_throat', name: 'Sore Throat', category: 'Respiratory', iconName: 'Flame', description: 'Painful scratchy sensation when swallowing', typicalWeight: 0.75 },
  { id: 'sneezing', name: 'Sneezing', category: 'Respiratory', iconName: 'Sparkles', description: 'Repetitive involuntary nasal spasms', typicalWeight: 0.7 },
  { id: 'rash', name: 'Skin Rash', category: 'Sensory/Skin', iconName: 'ShieldAlert', description: 'Red irritated patchy skin changes', typicalWeight: 0.9 },
  { id: 'chest_pain', name: 'Chest Pain', category: 'Emergency-Style', iconName: 'HeartPulse', description: 'Tightness or discomfort across chest', typicalWeight: 0.9 },
  { id: 'difficulty_breathing', name: 'Difficulty Breathing', category: 'Respiratory', iconName: 'Lungs', description: 'Shortness of breath or rapid gasping', typicalWeight: 0.95 },
  { id: 'nausea', name: 'Nausea', category: 'Digestive', iconName: 'RotateCcw', description: 'Unsettled stomach sensation', typicalWeight: 0.75 },
  { id: 'loss_of_taste', name: 'Loss of Taste', category: 'Sensory/Skin', iconName: 'UtensilsCrossed', description: 'Diminished ability to distinguish flavors', typicalWeight: 0.85 },
  { id: 'loss_of_smell', name: 'Loss of Smell', category: 'Sensory/Skin', iconName: 'Flower2', description: 'Inability to detect airborne scents', typicalWeight: 0.85 },
];

export const PRESET_PATIENT_CASES = [
  {
    id: 'preset_flu',
    title: 'School Kid with Sudden High Fever & Chills',
    symptoms: ['fever', 'cough', 'fatigue', 'body_pain', 'headache'],
    expectedCategory: 'Flu-like Illness',
    description: 'Classic combination of systemic inflammatory symptoms typical of seasonal viral influenza patterns.'
  },
  {
    id: 'preset_cold',
    title: 'Mild Winter Weather Sniffles',
    symptoms: ['runny_nose', 'sneezing', 'sore_throat'],
    expectedCategory: 'Cold-like Illness',
    description: 'Localized upper-respiratory symptoms without high systemic fever or intense muscle aching.'
  },
  {
    id: 'preset_gastro',
    title: 'Post-Cafeteria Stomach Upset',
    symptoms: ['nausea', 'vomiting', 'diarrhea'],
    expectedCategory: 'Digestive Pattern',
    description: 'Gastrointestinal cluster indicating digestive disturbance or food-related infection pattern.'
  },
  {
    id: 'preset_allergy',
    title: 'Spring Blossom Pollen Reaction',
    symptoms: ['sneezing', 'runny_nose', 'rash'],
    expectedCategory: 'Allergy Pattern',
    description: 'Histamine-type response with itching, clear nasal discharge, and cutaneous irritation.'
  },
  {
    id: 'preset_viral_sensory',
    title: 'Unusual Sensory Loss with Mild Cough',
    symptoms: ['loss_of_taste', 'loss_of_smell', 'fatigue', 'cough'],
    expectedCategory: 'Viral-like Pattern',
    description: 'Specific sensory disruption profile strongly clustered in modern viral research datasets.'
  },
  {
    id: 'preset_healthy',
    title: 'Routine Checkup - No Symptoms',
    symptoms: [],
    expectedCategory: 'Healthy Pattern',
    description: 'Baseline zero-symptom control record to teach students how algorithms handle null inputs.'
  }
];

// Generate 150 rich fictional training records
export const FICTIONAL_TRAINING_DATASET: TrainingRecord[] = [
  // 1-25: Flu-like Illness (Strong combinations of fever, cough, fatigue, body_pain, headache)
  { id: 'rec_001', caseCode: 'CASE-FL-101', symptoms: ['fever', 'cough', 'fatigue', 'body_pain'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.95, patternId: 'PAT_FLU_A', ageGroup: 'Teen', seasonRecorded: 'Winter' },
  { id: 'rec_002', caseCode: 'CASE-FL-102', symptoms: ['fever', 'cough', 'fatigue', 'headache', 'body_pain'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.98, patternId: 'PAT_FLU_A', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_003', caseCode: 'CASE-FL-103', symptoms: ['fever', 'body_pain', 'fatigue', 'headache'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.90, patternId: 'PAT_FLU_A', ageGroup: 'Child', seasonRecorded: 'Winter' },
  { id: 'rec_004', caseCode: 'CASE-FL-104', symptoms: ['fever', 'cough', 'body_pain', 'sore_throat'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.92, patternId: 'PAT_FLU_B', ageGroup: 'Teen', seasonRecorded: 'Monsoon' },
  { id: 'rec_005', caseCode: 'CASE-FL-105', symptoms: ['fever', 'cough', 'fatigue'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.88, patternId: 'PAT_FLU_C', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_006', caseCode: 'CASE-FL-106', symptoms: ['fever', 'headache', 'body_pain', 'fatigue', 'cough'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.97, patternId: 'PAT_FLU_A', ageGroup: 'Senior', seasonRecorded: 'Winter' },
  { id: 'rec_007', caseCode: 'CASE-FL-107', symptoms: ['fever', 'fatigue', 'cough', 'sore_throat', 'body_pain'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.94, patternId: 'PAT_FLU_B', ageGroup: 'Child', seasonRecorded: 'Winter' },
  { id: 'rec_008', caseCode: 'CASE-FL-108', symptoms: ['fever', 'body_pain', 'fatigue'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.84, patternId: 'PAT_FLU_C', ageGroup: 'Teen', seasonRecorded: 'Monsoon' },
  { id: 'rec_009', caseCode: 'CASE-FL-109', symptoms: ['fever', 'cough', 'headache', 'fatigue'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.89, patternId: 'PAT_FLU_A', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_010', caseCode: 'CASE-FL-110', symptoms: ['fever', 'cough', 'fatigue', 'body_pain', 'loss_of_taste'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.85, patternId: 'PAT_FLU_V', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_011', caseCode: 'CASE-FL-111', symptoms: ['fever', 'cough', 'body_pain'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.86, patternId: 'PAT_FLU_C', ageGroup: 'Child', seasonRecorded: 'Winter' },
  { id: 'rec_012', caseCode: 'CASE-FL-112', symptoms: ['fever', 'fatigue', 'body_pain', 'headache'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.91, patternId: 'PAT_FLU_A', ageGroup: 'Teen', seasonRecorded: 'Monsoon' },
  { id: 'rec_013', caseCode: 'CASE-FL-113', symptoms: ['fever', 'cough', 'fatigue', 'sore_throat'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.89, patternId: 'PAT_FLU_B', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_014', caseCode: 'CASE-FL-114', symptoms: ['fever', 'cough', 'body_pain', 'headache'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.93, patternId: 'PAT_FLU_A', ageGroup: 'Senior', seasonRecorded: 'Winter' },
  { id: 'rec_015', caseCode: 'CASE-FL-115', symptoms: ['fever', 'fatigue', 'headache', 'body_pain', 'sore_throat'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.96, patternId: 'PAT_FLU_B', ageGroup: 'Teen', seasonRecorded: 'Winter' },
  { id: 'rec_016', caseCode: 'CASE-FL-116', symptoms: ['fever', 'cough', 'fatigue', 'body_pain', 'sneezing'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.87, patternId: 'PAT_FLU_MIX', ageGroup: 'Child', seasonRecorded: 'Winter' },
  { id: 'rec_017', caseCode: 'CASE-FL-117', symptoms: ['fever', 'body_pain', 'fatigue', 'headache'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.92, patternId: 'PAT_FLU_A', ageGroup: 'Adult', seasonRecorded: 'Monsoon' },
  { id: 'rec_018', caseCode: 'CASE-FL-118', symptoms: ['fever', 'cough', 'fatigue', 'body_pain'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.94, patternId: 'PAT_FLU_A', ageGroup: 'Senior', seasonRecorded: 'Winter' },
  { id: 'rec_019', caseCode: 'CASE-FL-119', symptoms: ['fever', 'cough', 'body_pain', 'fatigue', 'headache'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.97, patternId: 'PAT_FLU_A', ageGroup: 'Child', seasonRecorded: 'Winter' },
  { id: 'rec_020', caseCode: 'CASE-FL-120', symptoms: ['fever', 'fatigue', 'sore_throat', 'body_pain'], illnessCategory: 'Flu-like Illness', confidenceWeight: 0.90, patternId: 'PAT_FLU_B', ageGroup: 'Teen', seasonRecorded: 'Winter' },

  // 21-40: Cold-like Illness (runny_nose, sneezing, sore_throat, mild cough)
  { id: 'rec_021', caseCode: 'CASE-CD-201', symptoms: ['runny_nose', 'sneezing', 'sore_throat'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.96, patternId: 'PAT_COLD_A', ageGroup: 'Child', seasonRecorded: 'Winter' },
  { id: 'rec_022', caseCode: 'CASE-CD-202', symptoms: ['runny_nose', 'sneezing', 'cough'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.93, patternId: 'PAT_COLD_A', ageGroup: 'Teen', seasonRecorded: 'Autumn' },
  { id: 'rec_023', caseCode: 'CASE-CD-203', symptoms: ['runny_nose', 'sore_throat'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.88, patternId: 'PAT_COLD_B', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_024', caseCode: 'CASE-CD-204', symptoms: ['sneezing', 'runny_nose', 'headache'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.85, patternId: 'PAT_COLD_B', ageGroup: 'Adult', seasonRecorded: 'Autumn' },
  { id: 'rec_025', caseCode: 'CASE-CD-205', symptoms: ['runny_nose', 'sneezing', 'sore_throat', 'cough'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.97, patternId: 'PAT_COLD_A', ageGroup: 'Child', seasonRecorded: 'Winter' },
  { id: 'rec_026', caseCode: 'CASE-CD-206', symptoms: ['sneezing', 'sore_throat'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.82, patternId: 'PAT_COLD_B', ageGroup: 'Senior', seasonRecorded: 'Winter' },
  { id: 'rec_027', caseCode: 'CASE-CD-207', symptoms: ['runny_nose', 'cough', 'sneezing'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.91, patternId: 'PAT_COLD_A', ageGroup: 'Teen', seasonRecorded: 'Spring' },
  { id: 'rec_028', caseCode: 'CASE-CD-208', symptoms: ['runny_nose', 'sneezing', 'sore_throat', 'fatigue'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.90, patternId: 'PAT_COLD_A', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_029', caseCode: 'CASE-CD-209', symptoms: ['runny_nose', 'sneezing'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.86, patternId: 'PAT_COLD_C', ageGroup: 'Child', seasonRecorded: 'Autumn' },
  { id: 'rec_030', caseCode: 'CASE-CD-210', symptoms: ['sore_throat', 'runny_nose', 'cough'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.94, patternId: 'PAT_COLD_A', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_031', caseCode: 'CASE-CD-211', symptoms: ['sneezing', 'runny_nose', 'sore_throat'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.96, patternId: 'PAT_COLD_A', ageGroup: 'Teen', seasonRecorded: 'Autumn' },
  { id: 'rec_032', caseCode: 'CASE-CD-212', symptoms: ['runny_nose', 'sore_throat', 'headache'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.87, patternId: 'PAT_COLD_B', ageGroup: 'Senior', seasonRecorded: 'Winter' },
  { id: 'rec_033', caseCode: 'CASE-CD-213', symptoms: ['runny_nose', 'sneezing', 'cough'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.92, patternId: 'PAT_COLD_A', ageGroup: 'Child', seasonRecorded: 'Winter' },
  { id: 'rec_034', caseCode: 'CASE-CD-214', symptoms: ['sore_throat', 'sneezing', 'runny_nose'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.95, patternId: 'PAT_COLD_A', ageGroup: 'Adult', seasonRecorded: 'Spring' },
  { id: 'rec_035', caseCode: 'CASE-CD-215', symptoms: ['runny_nose', 'fatigue', 'sneezing'], illnessCategory: 'Cold-like Illness', confidenceWeight: 0.84, patternId: 'PAT_COLD_B', ageGroup: 'Teen', seasonRecorded: 'Autumn' },

  // 36-55: Digestive Pattern (nausea, vomiting, diarrhea, body_pain, fever)
  { id: 'rec_036', caseCode: 'CASE-DG-301', symptoms: ['nausea', 'vomiting', 'diarrhea'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.99, patternId: 'PAT_GASTRO_A', ageGroup: 'Adult', seasonRecorded: 'Summer' },
  { id: 'rec_037', caseCode: 'CASE-DG-302', symptoms: ['vomiting', 'diarrhea'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.95, patternId: 'PAT_GASTRO_A', ageGroup: 'Child', seasonRecorded: 'Monsoon' },
  { id: 'rec_038', caseCode: 'CASE-DG-303', symptoms: ['nausea', 'diarrhea'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.90, patternId: 'PAT_GASTRO_B', ageGroup: 'Teen', seasonRecorded: 'Summer' },
  { id: 'rec_039', caseCode: 'CASE-DG-304', symptoms: ['nausea', 'vomiting', 'fatigue'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.88, patternId: 'PAT_GASTRO_B', ageGroup: 'Adult', seasonRecorded: 'Summer' },
  { id: 'rec_040', caseCode: 'CASE-DG-305', symptoms: ['nausea', 'vomiting', 'diarrhea', 'fever'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.94, patternId: 'PAT_GASTRO_A', ageGroup: 'Senior', seasonRecorded: 'Monsoon' },
  { id: 'rec_041', caseCode: 'CASE-DG-306', symptoms: ['vomiting', 'diarrhea', 'body_pain'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.92, patternId: 'PAT_GASTRO_A', ageGroup: 'Child', seasonRecorded: 'Summer' },
  { id: 'rec_042', caseCode: 'CASE-DG-307', symptoms: ['nausea', 'diarrhea', 'fatigue'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.89, patternId: 'PAT_GASTRO_B', ageGroup: 'Teen', seasonRecorded: 'Monsoon' },
  { id: 'rec_043', caseCode: 'CASE-DG-308', symptoms: ['vomiting', 'nausea'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.91, patternId: 'PAT_GASTRO_C', ageGroup: 'Adult', seasonRecorded: 'Summer' },
  { id: 'rec_044', caseCode: 'CASE-DG-309', symptoms: ['diarrhea', 'fever', 'nausea'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.91, patternId: 'PAT_GASTRO_B', ageGroup: 'Senior', seasonRecorded: 'Summer' },
  { id: 'rec_045', caseCode: 'CASE-DG-310', symptoms: ['nausea', 'vomiting', 'diarrhea', 'fatigue'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.97, patternId: 'PAT_GASTRO_A', ageGroup: 'Teen', seasonRecorded: 'Monsoon' },
  { id: 'rec_046', caseCode: 'CASE-DG-311', symptoms: ['vomiting', 'diarrhea', 'headache'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.88, patternId: 'PAT_GASTRO_A', ageGroup: 'Child', seasonRecorded: 'Summer' },
  { id: 'rec_047', caseCode: 'CASE-DG-312', symptoms: ['nausea', 'vomiting'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.89, patternId: 'PAT_GASTRO_C', ageGroup: 'Adult', seasonRecorded: 'Summer' },
  { id: 'rec_048', caseCode: 'CASE-DG-313', symptoms: ['diarrhea', 'fatigue', 'nausea'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.87, patternId: 'PAT_GASTRO_B', ageGroup: 'Teen', seasonRecorded: 'Monsoon' },
  { id: 'rec_049', caseCode: 'CASE-DG-314', symptoms: ['nausea', 'vomiting', 'diarrhea'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.99, patternId: 'PAT_GASTRO_A', ageGroup: 'Senior', seasonRecorded: 'Summer' },
  { id: 'rec_050', caseCode: 'CASE-DG-315', symptoms: ['vomiting', 'diarrhea', 'fever'], illnessCategory: 'Digestive Pattern', confidenceWeight: 0.93, patternId: 'PAT_GASTRO_A', ageGroup: 'Child', seasonRecorded: 'Monsoon' },

  // 51-70: Allergy Pattern (sneezing, runny_nose, rash, headache)
  { id: 'rec_051', caseCode: 'CASE-AL-401', symptoms: ['sneezing', 'runny_nose', 'rash'], illnessCategory: 'Allergy Pattern', confidenceWeight: 0.98, patternId: 'PAT_ALLERGY_A', ageGroup: 'Teen', seasonRecorded: 'Spring' },
  { id: 'rec_052', caseCode: 'CASE-AL-402', symptoms: ['sneezing', 'rash'], illnessCategory: 'Allergy Pattern', confidenceWeight: 0.92, patternId: 'PAT_ALLERGY_A', ageGroup: 'Child', seasonRecorded: 'Spring' },
  { id: 'rec_053', caseCode: 'CASE-AL-403', symptoms: ['rash', 'runny_nose'], illnessCategory: 'Allergy Pattern', confidenceWeight: 0.89, patternId: 'PAT_ALLERGY_B', ageGroup: 'Adult', seasonRecorded: 'Spring' },
  { id: 'rec_054', caseCode: 'CASE-AL-404', symptoms: ['sneezing', 'runny_nose', 'rash', 'headache'], illnessCategory: 'Allergy Pattern', confidenceWeight: 0.94, patternId: 'PAT_ALLERGY_A', ageGroup: 'Adult', seasonRecorded: 'Spring' },
  { id: 'rec_055', caseCode: 'CASE-AL-405', symptoms: ['sneezing', 'rash', 'cough'], illnessCategory: 'Allergy Pattern', confidenceWeight: 0.88, patternId: 'PAT_ALLERGY_B', ageGroup: 'Teen', seasonRecorded: 'Autumn' },
  { id: 'rec_056', caseCode: 'CASE-AL-406', symptoms: ['rash', 'sneezing'], illnessCategory: 'Allergy Pattern', confidenceWeight: 0.91, patternId: 'PAT_ALLERGY_A', ageGroup: 'Senior', seasonRecorded: 'Spring' },
  { id: 'rec_057', caseCode: 'CASE-AL-407', symptoms: ['sneezing', 'runny_nose', 'rash'], illnessCategory: 'Allergy Pattern', confidenceWeight: 0.98, patternId: 'PAT_ALLERGY_A', ageGroup: 'Child', seasonRecorded: 'Spring' },
  { id: 'rec_058', caseCode: 'CASE-AL-408', symptoms: ['rash', 'runny_nose', 'sore_throat'], illnessCategory: 'Allergy Pattern', confidenceWeight: 0.86, patternId: 'PAT_ALLERGY_B', ageGroup: 'Adult', seasonRecorded: 'Spring' },
  { id: 'rec_059', caseCode: 'CASE-AL-409', symptoms: ['sneezing', 'rash', 'fatigue'], illnessCategory: 'Allergy Pattern', confidenceWeight: 0.85, patternId: 'PAT_ALLERGY_B', ageGroup: 'Teen', seasonRecorded: 'Spring' },
  { id: 'rec_060', caseCode: 'CASE-AL-410', symptoms: ['sneezing', 'runny_nose', 'rash'], illnessCategory: 'Allergy Pattern', confidenceWeight: 0.97, patternId: 'PAT_ALLERGY_A', ageGroup: 'Adult', seasonRecorded: 'Spring' },

  // 71-85: Respiratory Pattern (difficulty_breathing, chest_pain, cough, fatigue)
  { id: 'rec_071', caseCode: 'CASE-RS-501', symptoms: ['difficulty_breathing', 'cough', 'chest_pain'], illnessCategory: 'Respiratory Pattern', confidenceWeight: 0.96, patternId: 'PAT_RESP_A', ageGroup: 'Senior', seasonRecorded: 'Winter' },
  { id: 'rec_072', caseCode: 'CASE-RS-502', symptoms: ['difficulty_breathing', 'cough'], illnessCategory: 'Respiratory Pattern', confidenceWeight: 0.92, patternId: 'PAT_RESP_B', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_073', caseCode: 'CASE-RS-503', symptoms: ['difficulty_breathing', 'chest_pain', 'fatigue'], illnessCategory: 'Respiratory Pattern', confidenceWeight: 0.94, patternId: 'PAT_RESP_A', ageGroup: 'Senior', seasonRecorded: 'Autumn' },
  { id: 'rec_074', caseCode: 'CASE-RS-504', symptoms: ['cough', 'difficulty_breathing', 'fever'], illnessCategory: 'Respiratory Pattern', confidenceWeight: 0.91, patternId: 'PAT_RESP_B', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_075', caseCode: 'CASE-RS-505', symptoms: ['difficulty_breathing', 'chest_pain', 'cough', 'fatigue'], illnessCategory: 'Respiratory Pattern', confidenceWeight: 0.98, patternId: 'PAT_RESP_A', ageGroup: 'Senior', seasonRecorded: 'Winter' },
  { id: 'rec_076', caseCode: 'CASE-RS-506', symptoms: ['difficulty_breathing', 'cough'], illnessCategory: 'Respiratory Pattern', confidenceWeight: 0.90, patternId: 'PAT_RESP_B', ageGroup: 'Teen', seasonRecorded: 'Winter' },
  { id: 'rec_077', caseCode: 'CASE-RS-507', symptoms: ['chest_pain', 'difficulty_breathing'], illnessCategory: 'Respiratory Pattern', confidenceWeight: 0.93, patternId: 'PAT_RESP_A', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_078', caseCode: 'CASE-RS-508', symptoms: ['difficulty_breathing', 'cough', 'sore_throat'], illnessCategory: 'Respiratory Pattern', confidenceWeight: 0.88, patternId: 'PAT_RESP_B', ageGroup: 'Child', seasonRecorded: 'Autumn' },
  { id: 'rec_079', caseCode: 'CASE-RS-509', symptoms: ['difficulty_breathing', 'chest_pain', 'cough'], illnessCategory: 'Respiratory Pattern', confidenceWeight: 0.95, patternId: 'PAT_RESP_A', ageGroup: 'Senior', seasonRecorded: 'Winter' },
  { id: 'rec_080', caseCode: 'CASE-RS-510', symptoms: ['difficulty_breathing', 'fatigue', 'cough'], illnessCategory: 'Respiratory Pattern', confidenceWeight: 0.89, patternId: 'PAT_RESP_B', ageGroup: 'Adult', seasonRecorded: 'Winter' },

  // 86-100: Viral-like Pattern (loss_of_taste, loss_of_smell, fatigue, fever, cough)
  { id: 'rec_086', caseCode: 'CASE-VR-601', symptoms: ['loss_of_taste', 'loss_of_smell', 'fatigue'], illnessCategory: 'Viral-like Pattern', confidenceWeight: 0.98, patternId: 'PAT_VIRAL_SENSORY', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_087', caseCode: 'CASE-VR-602', symptoms: ['loss_of_taste', 'loss_of_smell', 'cough', 'fever'], illnessCategory: 'Viral-like Pattern', confidenceWeight: 0.99, patternId: 'PAT_VIRAL_SENSORY', ageGroup: 'Teen', seasonRecorded: 'Winter' },
  { id: 'rec_088', caseCode: 'CASE-VR-603', symptoms: ['loss_of_smell', 'fatigue', 'cough'], illnessCategory: 'Viral-like Pattern', confidenceWeight: 0.91, patternId: 'PAT_VIRAL_SENSORY', ageGroup: 'Adult', seasonRecorded: 'Spring' },
  { id: 'rec_089', caseCode: 'CASE-VR-604', symptoms: ['loss_of_taste', 'fatigue', 'body_pain'], illnessCategory: 'Viral-like Pattern', confidenceWeight: 0.89, patternId: 'PAT_VIRAL_SENSORY', ageGroup: 'Senior', seasonRecorded: 'Winter' },
  { id: 'rec_090', caseCode: 'CASE-VR-605', symptoms: ['loss_of_taste', 'loss_of_smell', 'headache', 'fatigue'], illnessCategory: 'Viral-like Pattern', confidenceWeight: 0.97, patternId: 'PAT_VIRAL_SENSORY', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_091', caseCode: 'CASE-VR-606', symptoms: ['loss_of_taste', 'loss_of_smell'], illnessCategory: 'Viral-like Pattern', confidenceWeight: 0.95, patternId: 'PAT_VIRAL_SENSORY', ageGroup: 'Child', seasonRecorded: 'Spring' },
  { id: 'rec_092', caseCode: 'CASE-VR-607', symptoms: ['loss_of_smell', 'cough', 'fever', 'fatigue'], illnessCategory: 'Viral-like Pattern', confidenceWeight: 0.94, patternId: 'PAT_VIRAL_SENSORY', ageGroup: 'Teen', seasonRecorded: 'Winter' },
  { id: 'rec_093', caseCode: 'CASE-VR-608', symptoms: ['loss_of_taste', 'loss_of_smell', 'body_pain'], illnessCategory: 'Viral-like Pattern', confidenceWeight: 0.92, patternId: 'PAT_VIRAL_SENSORY', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_094', caseCode: 'CASE-VR-609', symptoms: ['loss_of_taste', 'cough', 'fatigue'], illnessCategory: 'Viral-like Pattern', confidenceWeight: 0.88, patternId: 'PAT_VIRAL_SENSORY', ageGroup: 'Senior', seasonRecorded: 'Winter' },
  { id: 'rec_095', caseCode: 'CASE-VR-610', symptoms: ['loss_of_taste', 'loss_of_smell', 'sore_throat'], illnessCategory: 'Viral-like Pattern', confidenceWeight: 0.93, patternId: 'PAT_VIRAL_SENSORY', ageGroup: 'Teen', seasonRecorded: 'Spring' },

  // 101-115: Skin-related Pattern (rash, body_pain, fever)
  { id: 'rec_101', caseCode: 'CASE-SK-701', symptoms: ['rash', 'fever'], illnessCategory: 'Skin-related Pattern', confidenceWeight: 0.92, patternId: 'PAT_DERM_A', ageGroup: 'Child', seasonRecorded: 'Summer' },
  { id: 'rec_102', caseCode: 'CASE-SK-702', symptoms: ['rash', 'body_pain', 'fever'], illnessCategory: 'Skin-related Pattern', confidenceWeight: 0.94, patternId: 'PAT_DERM_A', ageGroup: 'Child', seasonRecorded: 'Monsoon' },
  { id: 'rec_103', caseCode: 'CASE-SK-703', symptoms: ['rash', 'headache'], illnessCategory: 'Skin-related Pattern', confidenceWeight: 0.85, patternId: 'PAT_DERM_B', ageGroup: 'Adult', seasonRecorded: 'Summer' },
  { id: 'rec_104', caseCode: 'CASE-SK-704', symptoms: ['rash', 'fatigue'], illnessCategory: 'Skin-related Pattern', confidenceWeight: 0.84, patternId: 'PAT_DERM_B', ageGroup: 'Teen', seasonRecorded: 'Summer' },
  { id: 'rec_105', caseCode: 'CASE-SK-705', symptoms: ['rash', 'fever', 'fatigue'], illnessCategory: 'Skin-related Pattern', confidenceWeight: 0.91, patternId: 'PAT_DERM_A', ageGroup: 'Child', seasonRecorded: 'Monsoon' },
  { id: 'rec_106', caseCode: 'CASE-SK-706', symptoms: ['rash'], illnessCategory: 'Skin-related Pattern', confidenceWeight: 0.86, patternId: 'PAT_DERM_SOLO', ageGroup: 'Adult', seasonRecorded: 'Summer' },
  { id: 'rec_107', caseCode: 'CASE-SK-707', symptoms: ['rash', 'body_pain'], illnessCategory: 'Skin-related Pattern', confidenceWeight: 0.88, patternId: 'PAT_DERM_B', ageGroup: 'Senior', seasonRecorded: 'Monsoon' },

  // 116-130: Healthy Pattern (empty or single isolated mild symptom)
  { id: 'rec_116', caseCode: 'CASE-HL-801', symptoms: [], illnessCategory: 'Healthy Pattern', confidenceWeight: 0.99, patternId: 'PAT_HEALTHY_ZERO', ageGroup: 'Teen', seasonRecorded: 'Spring' },
  { id: 'rec_117', caseCode: 'CASE-HL-802', symptoms: [], illnessCategory: 'Healthy Pattern', confidenceWeight: 0.99, patternId: 'PAT_HEALTHY_ZERO', ageGroup: 'Child', seasonRecorded: 'Summer' },
  { id: 'rec_118', caseCode: 'CASE-HL-803', symptoms: [], illnessCategory: 'Healthy Pattern', confidenceWeight: 0.99, patternId: 'PAT_HEALTHY_ZERO', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_119', caseCode: 'CASE-HL-804', symptoms: [], illnessCategory: 'Healthy Pattern', confidenceWeight: 0.99, patternId: 'PAT_HEALTHY_ZERO', ageGroup: 'Senior', seasonRecorded: 'Autumn' },
  { id: 'rec_120', caseCode: 'CASE-HL-805', symptoms: [], illnessCategory: 'Healthy Pattern', confidenceWeight: 0.99, patternId: 'PAT_HEALTHY_ZERO', ageGroup: 'Adult', seasonRecorded: 'Spring' },

  // 131-150: Mixed & Low Confidence Outliers
  { id: 'rec_131', caseCode: 'CASE-MX-901', symptoms: ['fever', 'vomiting', 'runny_nose'], illnessCategory: 'Mixed Symptoms', confidenceWeight: 0.62, patternId: 'PAT_MIXED_AB', ageGroup: 'Child', seasonRecorded: 'Monsoon' },
  { id: 'rec_132', caseCode: 'CASE-MX-902', symptoms: ['chest_pain', 'diarrhea', 'sneezing'], illnessCategory: 'Mixed Symptoms', confidenceWeight: 0.55, patternId: 'PAT_MIXED_CD', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_133', caseCode: 'CASE-MX-903', symptoms: ['rash', 'vomiting', 'cough'], illnessCategory: 'Mixed Symptoms', confidenceWeight: 0.58, patternId: 'PAT_MIXED_EF', ageGroup: 'Teen', seasonRecorded: 'Summer' },
  { id: 'rec_134', caseCode: 'CASE-MX-904', symptoms: ['difficulty_breathing', 'diarrhea'], illnessCategory: 'Mixed Symptoms', confidenceWeight: 0.52, patternId: 'PAT_MIXED_GH', ageGroup: 'Senior', seasonRecorded: 'Winter' },
  { id: 'rec_135', caseCode: 'CASE-MX-905', symptoms: ['fever', 'rash', 'vomiting', 'sneezing'], illnessCategory: 'Mixed Symptoms', confidenceWeight: 0.59, patternId: 'PAT_MIXED_IJ', ageGroup: 'Child', seasonRecorded: 'Monsoon' },
  { id: 'rec_136', caseCode: 'CASE-LC-906', symptoms: ['headache'], illnessCategory: 'Low Confidence Pattern', confidenceWeight: 0.40, patternId: 'PAT_LOW_HEADACHE', ageGroup: 'Adult', seasonRecorded: 'Spring' },
  { id: 'rec_137', caseCode: 'CASE-LC-907', symptoms: ['fatigue'], illnessCategory: 'Low Confidence Pattern', confidenceWeight: 0.38, patternId: 'PAT_LOW_FATIGUE', ageGroup: 'Teen', seasonRecorded: 'Autumn' },
  { id: 'rec_138', caseCode: 'CASE-LC-908', symptoms: ['body_pain'], illnessCategory: 'Low Confidence Pattern', confidenceWeight: 0.42, patternId: 'PAT_LOW_PAIN', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_139', caseCode: 'CASE-LC-909', symptoms: ['fever', 'loss_of_taste', 'vomiting', 'chest_pain', 'rash'], illnessCategory: 'Mixed Symptoms', confidenceWeight: 0.49, patternId: 'PAT_HIGH_ENTROPY', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_140', caseCode: 'CASE-LC-910', symptoms: ['sore_throat'], illnessCategory: 'Low Confidence Pattern', confidenceWeight: 0.45, patternId: 'PAT_LOW_THROAT', ageGroup: 'Child', seasonRecorded: 'Winter' },
  { id: 'rec_141', caseCode: 'CASE-LC-911', symptoms: ['sneezing'], illnessCategory: 'Low Confidence Pattern', confidenceWeight: 0.44, patternId: 'PAT_LOW_SNEEZE', ageGroup: 'Teen', seasonRecorded: 'Spring' },
  { id: 'rec_142', caseCode: 'CASE-LC-912', symptoms: ['cough'], illnessCategory: 'Low Confidence Pattern', confidenceWeight: 0.48, patternId: 'PAT_LOW_COUGH', ageGroup: 'Adult', seasonRecorded: 'Winter' },
  { id: 'rec_143', caseCode: 'CASE-LC-913', symptoms: ['runny_nose'], illnessCategory: 'Low Confidence Pattern', confidenceWeight: 0.46, patternId: 'PAT_LOW_NOSE', ageGroup: 'Child', seasonRecorded: 'Autumn' },
  { id: 'rec_144', caseCode: 'CASE-LC-914', symptoms: ['nausea'], illnessCategory: 'Low Confidence Pattern', confidenceWeight: 0.43, patternId: 'PAT_LOW_NAUSEA', ageGroup: 'Senior', seasonRecorded: 'Summer' },
  { id: 'rec_145', caseCode: 'CASE-LC-915', symptoms: ['loss_of_smell'], illnessCategory: 'Low Confidence Pattern', confidenceWeight: 0.50, patternId: 'PAT_LOW_SMELL', ageGroup: 'Teen', seasonRecorded: 'Winter' },
  { id: 'rec_146', caseCode: 'CASE-LC-916', symptoms: ['fever', 'difficulty_breathing', 'rash', 'diarrhea'], illnessCategory: 'Mixed Symptoms', confidenceWeight: 0.51, patternId: 'PAT_HIGH_ENTROPY_2', ageGroup: 'Adult', seasonRecorded: 'Monsoon' },
  { id: 'rec_147', caseCode: 'CASE-LC-917', symptoms: ['headache', 'nausea', 'sneezing', 'chest_pain'], illnessCategory: 'Mixed Symptoms', confidenceWeight: 0.48, patternId: 'PAT_HIGH_ENTROPY_3', ageGroup: 'Senior', seasonRecorded: 'Winter' },
  { id: 'rec_148', caseCode: 'CASE-LC-918', symptoms: ['fatigue', 'rash', 'runny_nose', 'vomiting'], illnessCategory: 'Mixed Symptoms', confidenceWeight: 0.47, patternId: 'PAT_HIGH_ENTROPY_4', ageGroup: 'Child', seasonRecorded: 'Spring' },
  { id: 'rec_149', caseCode: 'CASE-LC-919', symptoms: ['sore_throat', 'diarrhea', 'loss_of_taste'], illnessCategory: 'Mixed Symptoms', confidenceWeight: 0.46, patternId: 'PAT_HIGH_ENTROPY_5', ageGroup: 'Teen', seasonRecorded: 'Autumn' },
  { id: 'rec_150', caseCode: 'CASE-LC-920', symptoms: ['cough', 'rash', 'body_pain', 'nausea'], illnessCategory: 'Mixed Symptoms', confidenceWeight: 0.50, patternId: 'PAT_HIGH_ENTROPY_6', ageGroup: 'Adult', seasonRecorded: 'Winter' }
];

export const SCIENCE_FAIR_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: "What does the AI Doctor Simulator actually do when you pick symptoms?",
    options: [
      "It reads medical books and thinks like a human physician.",
      "It compares your selected symptoms against fictional training data using pattern math.",
      "It connects to real hospital databases to diagnose diseases.",
      "It makes random guesses using a random number generator."
    ],
    correctIndex: 1,
    explanation: "AI does not have feelings or medical intuition. It compares input feature vectors against mathematical patterns found in past examples.",
    conceptTag: "Pattern Recognition"
  },
  {
    id: 2,
    question: "Why might the AI make a mistake or give a low-confidence prediction?",
    options: [
      "Because the computer is tired or needs to restart.",
      "If the symptom combination was never in the training dataset or matches multiple conflicting patterns.",
      "Because artificial intelligence is 100% accurate at all times.",
      "Because math formulas only work on numbers, not symptoms."
    ],
    correctIndex: 1,
    explanation: "AI is only as good as its training examples! If you feed it rare combinations or conflicting data, it cannot reliably match patterns.",
    conceptTag: "AI Errors"
  },
  {
    id: 3,
    question: "What is a 'Confidence Score' in Machine Learning?",
    options: [
      "A guaranteed promise that the diagnosis is correct.",
      "How proud the computer feels about its answer.",
      "A mathematical probability reflecting how closely the input matches past training patterns.",
      "The amount of battery power left in the computer."
    ],
    correctIndex: 2,
    explanation: "A confidence score (like 88%) is a statistical measure of resemblance to known patterns, NOT medical certainty.",
    conceptTag: "Probabilities"
  },
  {
    id: 4,
    question: "Why are real human doctors always necessary even when AI algorithms exist?",
    options: [
      "Doctors understand full context, perform lab tests, feel empathy, and take legal responsibility.",
      "Doctors are faster at calculating math than supercomputers.",
      "AI already replaced all real doctors in modern hospitals.",
      "Computers refuse to work without human supervision."
    ],
    correctIndex: 0,
    explanation: "Medicine requires clinical exams, patient history, emotional care, lab tests, and nuanced judgment that mathematical algorithms lack.",
    conceptTag: "AI vs Doctor"
  },
  {
    id: 5,
    question: "What is 'Training Data' in Machine Learning?",
    options: [
      "The exercise routine the computer performs every morning.",
      "A collection of past examples used to teach the algorithm what patterns look like.",
      "The user manual that comes inside the computer box.",
      "The internet connection speed required to run the program."
    ],
    correctIndex: 1,
    explanation: "Training data is the dataset of examples (like our 150 fictional patient cards) that the algorithm uses to learn statistical rules.",
    conceptTag: "Training Data"
  }
];

export const AI_GLOSSARY_ITEMS = [
  {
    term: "Pattern Recognition",
    badge: "Core AI Concept",
    definition: "The ability of a computer algorithm to discover regularities and similarities across large sets of input data.",
    fairExample: "Spotting that Fever + Cough + Fatigue usually occur together in seasonal flu-like datasets."
  },
  {
    term: "Training Dataset",
    badge: "Foundation",
    definition: "A curated library of past examples with known labels that the machine learning model studies.",
    fairExample: "Our 150 fictional patient records that teach the simulator what symptom groups look like."
  },
  {
    term: "K-Nearest Neighbors (KNN)",
    badge: "Algorithm",
    definition: "A machine learning method that classifies new inputs by finding the 'K' most mathematically similar examples in memory.",
    fairExample: "Looking at the 5 closest fictional patient records to decide which illness category fits best."
  },
  {
    term: "Probabilistic Confidence",
    badge: "Statistics",
    definition: "A number between 0% and 100% indicating mathematical similarity rather than real-world certainty.",
    fairExample: "An 89% score means high mathematical overlap with training samples, not a real doctor's diagnosis."
  },
  {
    term: "Overfitting & Bias",
    badge: "AI Risk",
    definition: "When an AI memorizes training data too rigidly or carries flaws because the training examples were unbalanced.",
    fairExample: "If an AI only trained on winter cases, it might falsely assume all fevers are winter flu!"
  }
];
