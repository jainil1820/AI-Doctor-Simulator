/**
 * Centralized Disease Knowledge Base & Supportive Care Repository
 * Source of Truth: Uploaded Gujarati Health Documents (doc1_text.txt & doc2_text.txt)
 *
 * IMPORTANT SCIENCE FAIR RULES:
 * - Strictly educational supportive care & traditional home remedies.
 * - Not a medical diagnosis, prescription, or doctor replacement.
 * - Does NOT claim to cure any disease.
 */

export interface RemedySolution {
  titleGujarati: string;
  titleEnglish: string;
  descriptionGujarati: string;
}

export interface DiseaseSolutionRecord {
  id: string;
  nameGujarati: string;
  nameEnglish: string;
  categoryTag?: string;
  aliases: string[];
  solutions: RemedySolution[];
  source: string;
}

export const SOURCE_DOCUMENT_TITLE = 'Uploaded Gujarati Health Documents (આયુર્વેદિક અને ઘરેલુ ઉપચાર સ્ત્રોત)';

export const DISEASE_SOLUTIONS: DiseaseSolutionRecord[] = [
  {
    id: 'digestive-problems',
    nameGujarati: 'પાચન અને પેટની સમસ્યાઓ (ગેસ, એસિડિટી, અજીર્ણ)',
    nameEnglish: 'Digestive Problems (Gas, Acidity, Indigestion)',
    categoryTag: 'Digestive',
    aliases: [
      'digestive pattern',
      'digestive-pattern',
      'digestive problems',
      'digestive',
      'gas',
      'acidity',
      'indigestion',
      'nausea',
      'vomiting',
      'diarrhea',
      'preset_gastro',
      'પાચન અને પેટની સમસ્યાઓ'
    ],
    solutions: [
      {
        titleGujarati: 'હિંગ અને સંચળ',
        titleEnglish: 'Hing and Black Salt (Asafoetida & Rock Salt)',
        descriptionGujarati: 'એક ગ્લાસ નવશેકા પાણીમાં એક ચપટી હિંગ અને સંચળ ઉમેરીને પીવાથી ગેસમાં તુરંત રાહત મળે છે.'
      },
      {
        titleGujarati: 'આંબળા અને જેઠીમધ',
        titleEnglish: 'Amla and Licorice (Jethimadh)',
        descriptionGujarati: 'એસિડિટી માટે અડધી ચમચી આંબળાનું ચૂર્ણ અને જેઠીમધ ચૂર્ણનું સેવન કરવું.'
      },
      {
        titleGujarati: 'અજમો અને જીરૂં',
        titleEnglish: 'Ajwain and Cumin (Carom Seeds & Cumin)',
        descriptionGujarati: 'અજમો, જીરૂં અને સંચળ સરખા ભાગે પીસીને જમ્યા પછી નવશેકા પાણી સાથે લેવું.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'cold-cough-phlegm',
    nameGujarati: 'શરદી, ઉધરસ અને કફ',
    nameEnglish: 'Cold, Cough and Phlegm',
    categoryTag: 'Respiratory',
    aliases: [
      'cold-like illness',
      'cold like illness',
      'cold-like',
      'cold',
      'cough',
      'phlegm',
      'runny nose',
      'sneezing',
      'preset_cold',
      'શરદી, ઉધરસ અને કફ'
    ],
    solutions: [
      {
        titleGujarati: 'હળદર અને દૂધ',
        titleEnglish: 'Turmeric and Warm Milk',
        descriptionGujarati: 'રાત્રે સૂતા પહેલા નવશેકા દૂધમાં હળદર ઉમેરીને પીવાથી કફ અને શરદીમાં રાહત થાય છે.'
      },
      {
        titleGujarati: 'તુલસી અને આદુનો ઉકાળો',
        titleEnglish: 'Tulsi and Ginger Decoction',
        descriptionGujarati: 'તુલસીના પાન, આદુ, કાળા મરી અને ગોળ નાખીને બનાવેલો ઉકાળો દિવસમાં ૨ વખત પીવો.'
      },
      {
        titleGujarati: 'મધ અને ફટકડી / તજ',
        titleEnglish: 'Honey and Cinnamon',
        descriptionGujarati: '૧ ચમચી મધમાં ચપટી તજ પાવડર ભેળવીને ચાટવાથી સૂકી ઉધરસ ઓછી થાય છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'joint-and-back-pain',
    nameGujarati: 'સાંધા અને કમરનો દુખાવો (વાયુ)',
    nameEnglish: 'Joint and Back Pain (Vata)',
    categoryTag: 'General/Musculoskeletal',
    aliases: [
      'joint pain',
      'back pain',
      'body pain',
      'body_pain',
      'joint and back pain',
      'વાયુ',
      'સાંધા અને કમરનો દુખાવો'
    ],
    solutions: [
      {
        titleGujarati: 'મેથી દાણા',
        titleEnglish: 'Fenugreek Seeds (Methi)',
        descriptionGujarati: 'રાત્રે ૧ ચમચી મેથી દાણા પાણીમાં પલાળી, સવારે નયણા કોઠે પાણી પીવું અને મેથી ચાવી જવી.'
      },
      {
        titleGujarati: 'એરંડી (દિવેલ) અને સૂંઠ',
        titleEnglish: 'Castor Oil and Dry Ginger',
        descriptionGujarati: '૧ ગ્લાસ ગરમ પાણી અથવા દૂધમાં અડધી ચમચી સૂંઠ પાવડર અને થોડું દિવેલ ઉમેરીને પીવું.'
      },
      {
        titleGujarati: 'તલ / સરસવનું તેલ',
        titleEnglish: 'Warm Sesame / Mustard Oil Massage',
        descriptionGujarati: 'અજમો અને લસણ તેલમાં ઉકાળીને સાંધા પર માલિશ કરવી.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'fever',
    nameGujarati: 'તાવ (જ્વર)',
    nameEnglish: 'Fever (Jvara / Flu-like Illness)',
    categoryTag: 'Systemic',
    aliases: [
      'flu-like illness',
      'flu like illness',
      'flu-like',
      'fever',
      'flu',
      'influenza',
      'preset_flu',
      'તાવ',
      'જ્વર'
    ],
    solutions: [
      {
        titleGujarati: 'ગિલોય (ગળો)',
        titleEnglish: 'Giloy / Guduchi Decoction',
        descriptionGujarati: 'ગળોનો કઢા (ઉકાળો) પીવાથી શરીરની રોગપ્રતિકારક શક્તિ વધે છે અને તાવ ઉતરે છે.'
      },
      {
        titleGujarati: 'સુદર્શન ચૂર્ણ',
        titleEnglish: 'Sudarshan Churna',
        descriptionGujarati: 'તાવમાં આયુર્વેદિક સુદર્શન ચૂર્ણનું નવશેકા પાણી સાથે સેવન કરવું ફાયદાકારક છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'constipation',
    nameGujarati: 'કબજિયાત (Constipation)',
    nameEnglish: 'Constipation',
    categoryTag: 'Digestive',
    aliases: ['constipation', 'કબજિયાત'],
    solutions: [
      {
        titleGujarati: 'ત્રિફળા ચૂર્ણ',
        titleEnglish: 'Triphala Churna',
        descriptionGujarati: 'રાત્રે સૂતી વખતે ૧ ચમચી ત્રિફળા ચૂર્ણ નવશેકા પાણી સાથે લેવું.'
      },
      {
        titleGujarati: 'નવશેકું દૂધ અને ઘી',
        titleEnglish: 'Warm Milk with Desi Ghee',
        descriptionGujarati: 'રાત્રે ગરમ દૂધમાં ૧ ચમચી દેશી ગાયનું ઘી નાખીને પીવું.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'diabetes',
    nameGujarati: 'ડાયાબિટીસ (મધુમેહ)',
    nameEnglish: 'Diabetes (Madhumeha)',
    categoryTag: 'Metabolic',
    aliases: ['diabetes', 'madhumeha', 'blood sugar', 'ડાયાબિટીસ', 'મધુમેહ'],
    solutions: [
      {
        titleGujarati: 'જાંબુના ઠળિયા અને કારેલા',
        titleEnglish: 'Jamun Seed Powder and Bitter Gourd',
        descriptionGujarati: 'જાંબુના ઠળિયાનું ચૂર્ણ અને મેથી પાવડર સવારે નયણા કોઠે પાણી સાથે લેવો.'
      },
      {
        titleGujarati: 'લીમડાના પાન',
        titleEnglish: 'Neem Leaves',
        descriptionGujarati: 'સવારે ૪-૫ મોળા લીમડાના કે કડવા લીમડાના પાન ચાવીને ખાવા.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'headache-migraine',
    nameGujarati: 'માથાનો દુખાવો અને આધાશીશી (Migraine)',
    nameEnglish: 'Headache and Migraine',
    categoryTag: 'Neurological/General',
    aliases: ['headache', 'migraine', 'headache and migraine', 'માથાનો દુખાવો', 'આધાશીશી'],
    solutions: [
      {
        titleGujarati: 'ગાયનું ઘી',
        titleEnglish: 'Pure Cow Ghee Nasal Application',
        descriptionGujarati: 'સવારે અને રાત્રે બંને નસકોરામાં ૧-૧ ટીંપું દેશી ગાયનું શુદ્ધ ઘી નાખવાથી માથાના દુખાવામાં રાહત મળે છે.'
      },
      {
        titleGujarati: 'સૂંઠ અને જાયફળ',
        titleEnglish: 'Dry Ginger and Nutmeg Forehead Paste',
        descriptionGujarati: 'સૂંઠ અથવા જાયફળને થોડા પાણી સાથે ઘસીને કપાળ પર લેપ કરવો.'
      },
      {
        titleGujarati: 'બદામ અને દૂધ',
        titleEnglish: 'Soaked Almonds with Warm Milk',
        descriptionGujarati: 'રાત્રે ૪-૫ બદામ પલાળી, સવારે છોલીને વાટી લેવી અને ગરમ દૂધ સાથે પીવી.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'high-blood-pressure',
    nameGujarati: 'હાઈ બ્લડ પ્રેશર (High BP)',
    nameEnglish: 'High Blood Pressure (Hypertension)',
    categoryTag: 'Cardiovascular',
    aliases: ['high bp', 'high blood pressure', 'hypertension', 'હાઈ બ્લડ પ્રેશર', 'બીપી'],
    solutions: [
      {
        titleGujarati: 'લસણ',
        titleEnglish: 'Raw Garlic Clove',
        descriptionGujarati: 'સવારે નયણા કોઠે લસણની ૧ કળી પાણી સાથે ગળી જવી. તે લોહી પાતળું કરવામાં અને બીપી નિયંત્રિત કરવામાં મદદ કરે છે.'
      },
      {
        titleGujarati: 'અર્જુન છાલ',
        titleEnglish: 'Arjun Tree Bark Decoction',
        descriptionGujarati: 'અર્જુન વૃક્ષની છાલનો ઉકાળો અથવા ચૂર્ણ દૂધ/પાણી સાથે લેવાથી હૃદય મજબૂત થાય છે અને બીપી કાબૂમાં રહે છે.'
      },
      {
        titleGujarati: 'એલોવેરા અને આંબળા',
        titleEnglish: 'Aloe Vera and Amla Juice',
        descriptionGujarati: 'સવારે આંબળા અને એલોવેરાનો રસ સરખા ભાગે પાણીમાં મેળવીને પીવો.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'skin-problems',
    nameGujarati: 'ચામડીના રોગો (ધાધર, ખંજવાળ, ખીલ)',
    nameEnglish: 'Skin Problems (Rash, Itching, Acne, Ringworm)',
    categoryTag: 'Dermatological',
    aliases: [
      'skin-related pattern',
      'skin related pattern',
      'skin pattern',
      'allergy pattern',
      'allergy-pattern',
      'skin problems',
      'rash',
      'itching',
      'acne',
      'ringworm',
      'preset_allergy',
      'ચામડીના રોગો'
    ],
    solutions: [
      {
        titleGujarati: 'કડવો લીમડો',
        titleEnglish: 'Neem Leaf Paste and Neem Water Wash',
        descriptionGujarati: 'લીમડાના પાનની પેસ્ટ બનાવી ખંજવાળ કે ધાધર પર લગાવવી અથવા લીમડાના ઉકાળેલા પાણીથી સ્નાન કરવું.'
      },
      {
        titleGujarati: 'હળદર અને એલોવેરા',
        titleEnglish: 'Turmeric and Aloe Vera Gel',
        descriptionGujarati: 'ચહેરા પરના ખીલ કે ડાઘ માટે હળદર અને એલોવેરા જેલ ભેળવીને લગાવવું.'
      },
      {
        titleGujarati: 'બાવચી અને નાળિયેર તેલ',
        titleEnglish: 'Bavchi and Camphor in Coconut Oil',
        descriptionGujarati: 'ધાધર પર નાળિયેર તેલમાં કપૂર મેળવીને લગાવવાથી ખંજવાળ ઓછી થાય છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'kidney-stones',
    nameGujarati: 'પથરી (Kidney Stones)',
    nameEnglish: 'Kidney Stones',
    categoryTag: 'Renal',
    aliases: ['kidney stones', 'kidney stone', 'pathari', 'stones', 'પથરી'],
    solutions: [
      {
        titleGujarati: 'ગોખરું (Gokhru)',
        titleEnglish: 'Gokhru Decoction',
        descriptionGujarati: 'ગોખરુંનો ઉકાળો સવાર-સાંજ પીવાથી પથરી તૂટીને પેશાબ વાટે બહાર નીકળે છે.'
      },
      {
        titleGujarati: 'કુળથ (કાંગ)',
        titleEnglish: 'Kulthi (Horse Gram Soup / Water)',
        descriptionGujarati: 'કુળથની દાળનો સૂપ અથવા પાણી પીવું. કુળથ પથરી ઓગાળવામાં ખૂબ ગુણકારી માનવામાં આવે છે.'
      },
      {
        titleGujarati: 'કાચી ભીંડી અને પથ્થરચટ્ટા',
        titleEnglish: 'Raw Okra and Pattharchatta Leaves',
        descriptionGujarati: 'પથ્થરચટ્ટાના ૨ પાન સવારે ચાવીને ખાવા.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'pyorrhea-toothache',
    nameGujarati: 'પાયોરિયા અને દાંતનો દુખાવો',
    nameEnglish: 'Pyorrhea and Toothache',
    categoryTag: 'Dental/Oral',
    aliases: ['pyorrhea', 'toothache', 'teeth', 'dental pain', 'પાયોરિયા', 'દાંતનો દુખાવો'],
    solutions: [
      {
        titleGujarati: 'લવિંગનું તેલ',
        titleEnglish: 'Clove Oil Dab',
        descriptionGujarati: 'દાંત કે દાઢના દુખાવા પર લવિંગનું તેલ રૂનું પૂમડું બોળીને રાખવું.'
      },
      {
        titleGujarati: 'મીઠું અને સરસવનું તેલ',
        titleEnglish: 'Rock Salt, Turmeric & Mustard Oil',
        descriptionGujarati: '૧ ચમચી સરસવના તેલમાં ચપટી સિંધવ મીઠું અને હળદર મેળવીને પેઢા પર હળવી માલિશ કરવી.'
      },
      {
        titleGujarati: 'જામફળના પાન',
        titleEnglish: 'Guava Leaves Boiled Rinse',
        descriptionGujarati: 'જામફળના પાન પાણીમાં ઉકાળીને કોગળા કરવાથી મોંની દુર્ગંધ અને પેઢાનું લોહી બંધ થાય છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'hair-fall',
    nameGujarati: 'વાળ ખરવા અને અકાળે સફેદ થવા',
    nameEnglish: 'Hair Fall and Premature Greying',
    categoryTag: 'Cosmetic/General',
    aliases: ['hair fall', 'hair loss', 'premature greying', 'વાળ ખરવા'],
    solutions: [
      {
        titleGujarati: 'આંબળા અને ભૃંગરાજ',
        titleEnglish: 'Amla and Bhringraj Herbal Hair Pack/Oil',
        descriptionGujarati: 'આંબળા અને ભૃંગરાજ ચૂર્ણનો લેપ વાળમાં લગાવવો અથવા તેનાથી સિદ્ધ કરેલું તેલ વાપરવું.'
      },
      {
        titleGujarati: 'મેથી અને દહીં',
        titleEnglish: 'Soaked Fenugreek and Curd Paste',
        descriptionGujarati: 'મેથીના દાણા પલાળીને પીસી લેવા અને દહીં સાથે મિક્સ કરી વાળના મૂળમાં લગાવવું.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'insomnia',
    nameGujarati: 'અનિદ્રા (ઊંઘ ન આવવી / Insomnia)',
    nameEnglish: 'Insomnia (Sleep Disturbance)',
    categoryTag: 'Neurological/Lifestyle',
    aliases: ['insomnia', 'sleeplessness', 'sleep disorder', 'અનિદ્રા', 'ઊંઘ'],
    solutions: [
      {
        titleGujarati: 'દૂધ અને જાયફળ',
        titleEnglish: 'Warm Milk with Nutmeg and Rock Sugar',
        descriptionGujarati: 'રાત્રે સૂતા પહેલા નવશેકા ગરમ દૂધમાં ચપટી જાયફળ પાવડર અને સાકર ઉમેરીને પીવું.'
      },
      {
        titleGujarati: 'પગના તળિયે માલિશ',
        titleEnglish: 'Warm Sesame Oil / Ghee Foot Sole Massage',
        descriptionGujarati: 'રાત્રે સૂતી વખતે તલના તેલ અથવા ગાયના ઘીથી પગના તળિયે માલિશ કરવાથી મગજ શાંત થાય છે અને સારી ઊંઘ આવે છે.'
      },
      {
        titleGujarati: 'અશ્વગંધા',
        titleEnglish: 'Ashwagandha Powder with Warm Milk',
        descriptionGujarati: 'અશ્વગંધા ચૂર્ણ રાત્રે દૂધ સાથે લેવાથી માનસિક તણાવ ઓછો થાય છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'thyroid',
    nameGujarati: 'થાઇરોઇડ (Thyroid)',
    nameEnglish: 'Thyroid Health',
    categoryTag: 'Endocrine',
    aliases: ['thyroid', 'થાઇરોઇડ'],
    solutions: [
      {
        titleGujarati: 'ધાણાનું પાણી',
        titleEnglish: 'Coriander Seed Infusion',
        descriptionGujarati: '૧ ચમચી આખા ધાણા રાત્રે ૧ ગ્લાસ પાણીમાં પલાળી, સવારે ઉકાળીને અડધું રહે ત્યારે ગાળીને પીવું.'
      },
      {
        titleGujarati: 'ઉજ્જયી પ્રાણાયામ',
        titleEnglish: 'Anulom-Vilom and Ujjayi Pranayama',
        descriptionGujarati: 'દરરોજ સવારે ૧૦-૧૫ મિનિટ અનુલોમ-વિલોમ અને ઉજ્જયી પ્રાણાયામ કરવા.'
      },
      {
        titleGujarati: 'કાંચનાર ગુગ્ગુલ',
        titleEnglish: 'Kanchnar Guggulu / Avaleha',
        descriptionGujarati: 'આયુર્વેદમાં થાઇરોઇડના સંતુલન માટે કાંચનાર અવલેહ કે ગુગ્ગુલનો ઉપયોગ થાય છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'anemia',
    nameGujarati: 'એનિમિયા (લોહીની ટકાવારી ઓછી હોવી)',
    nameEnglish: 'Anemia (Low Hemoglobin / Iron Deficiency)',
    categoryTag: 'Hematological',
    aliases: ['anemia', 'low hemoglobin', 'iron deficiency', 'એનિમિયા'],
    solutions: [
      {
        titleGujarati: 'બીટ અને આંબળા',
        titleEnglish: 'Beetroot and Amla Juice',
        descriptionGujarati: 'બીટ અને આંબળાનો રસ ભેગો કરીને દરરોજ સવારે પીવો.'
      },
      {
        titleGujarati: 'કાળી દ્રાક્ષ અને ખજૂર',
        titleEnglish: 'Soaked Munakka Raisins and Dates',
        descriptionGujarati: '૮-૧૦ કાળી દ્રાક્ષ (મુનક્કા) અને ખજૂર રાત્રે પાણીમાં પલાળી સવારે ચાવીને ખાવા.'
      },
      {
        titleGujarati: 'ગોળ અને તલ',
        titleEnglish: 'Desi Jaggery and Black Sesame Seeds',
        descriptionGujarati: 'દેશી ગોળ અને કાળા તલનું સેવન કરવાથી શરીરમાં આયર્નનું પ્રમાણ ઝડપથી વધે છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'weight-loss',
    nameGujarati: 'વજન ઘટાડવા માટે (Obesity)',
    nameEnglish: 'Weight Loss (Obesity / Healthy Metabolism)',
    categoryTag: 'Metabolic/Lifestyle',
    aliases: ['weight loss', 'obesity', 'વજન ઘટાડવા'],
    solutions: [
      {
        titleGujarati: 'મધ અને લીંબુ',
        titleEnglish: 'Warm Water with Lemon and Honey',
        descriptionGujarati: 'સવારે નયણા કોઠે નવશેકા ગરમ પાણીમાં અડધું લીંબુ અને ૧ ચમચી શુદ્ધ મધ મેળવીને પીવું.'
      },
      {
        titleGujarati: 'મેથી અને અજમો',
        titleEnglish: 'Roasted Fenugreek, Ajwain & Cumin Powder',
        descriptionGujarati: 'મેથી, અજમો અને જીરૂં સરખા ભાગે શેકીને પાવડર બનાવી લેવો. રાત્રે ગરમ પાણી સાથે ૧ ચમચી લેવું.'
      },
      {
        titleGujarati: 'ત્રિફળા ઉકાળો',
        titleEnglish: 'Triphala Herbal Decoction',
        descriptionGujarati: 'ત્રિફળા ચૂર્ણને પાણીમાં ઉકાળીને પીવાથી મેદસ્વીતા ઘટે છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'weight-gain',
    nameGujarati: 'વજન વધારવા માટે (Weight Gain)',
    nameEnglish: 'Weight Gain (Healthy Nourishment)',
    categoryTag: 'Metabolic/Lifestyle',
    aliases: ['weight gain', 'underweight', 'વજન વધારવા'],
    solutions: [
      {
        titleGujarati: 'કેળા અને દૂધ',
        titleEnglish: 'Ripe Bananas with Warm Milk & Ghee',
        descriptionGujarati: 'દરરોજ સવારે ૨ પાકા કેળા સાથે ગરમ દૂધ અને થોડું ઘી કે મધ લેવું.'
      },
      {
        titleGujarati: 'અશ્વગંધા અને શતાવરી',
        titleEnglish: 'Ashwagandha and Shatavari Powder with Milk',
        descriptionGujarati: 'અશ્વગંધા અને શતાવરી ચૂર્ણ સરખા ભાગે મિક્સ કરી સવાર-સાંજ દૂધ સાથે લેવું.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'urinary-tract-infection',
    nameGujarati: 'પેશાબમાં બળતરા (URINARY TRACT INFECTION / UTI)',
    nameEnglish: 'Urinary Tract Infection (UTI / Burning Sensation)',
    categoryTag: 'Urological',
    aliases: [
      'uti',
      'urinary tract infection',
      'urinary burning',
      'burning urination',
      'પેશાબમાં બળતરા'
    ],
    solutions: [
      {
        titleGujarati: 'વરિયાળી અને સાકર',
        titleEnglish: 'Fennel and Rock Sugar Decoction',
        descriptionGujarati: 'વરિયાળી અને ખડી સાકરનો ઉકાળો અથવા ઠંડુ પાણી પીવાથી પેશાબની બળતરા શાંત થાય છે.'
      },
      {
        titleGujarati: 'ધાણા - જીરૂં પાણી',
        titleEnglish: 'Soaked Coriander and Cumin Water',
        descriptionGujarati: 'ધાણા અને જીરૂં રાત્રે પલાળી, સવારે મસળીને ગાળીને પીવું.'
      },
      {
        titleGujarati: 'ચંદનાસવ / ગોક્ષુરાદિ',
        titleEnglish: 'Chandanasava / Gokshuradi',
        descriptionGujarati: 'આયુર્વેદિક ચંદનાસવ પાણીમાં મેળવીને પીવાથી પેશાબના ઇન્ફેક્શનમાં રાહત મળે છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'gout-uric-acid',
    nameGujarati: 'યુરિક એસિડ અને વા (Gout)',
    nameEnglish: 'Gout / Uric Acid and Vata',
    categoryTag: 'Musculoskeletal/Metabolic',
    aliases: ['gout', 'uric acid', 'uric-acid', 'યુરિક એસિડ', 'વા'],
    solutions: [
      {
        titleGujarati: 'ગળો (ગિલોય)',
        titleEnglish: 'Giloy Decoction / Ghanvati',
        descriptionGujarati: 'ગળોનો ઉકાળો અથવા ગિલોય ઘનવટીનું સેવન યુરિક એસિડ ઘટાડવામાં સૌથી ઉત્તમ ગણાય છે.'
      },
      {
        titleGujarati: 'એરંડાનું તેલ (દિવેલ)',
        titleEnglish: 'Castor Oil with Warm Water / Milk',
        descriptionGujarati: 'રાત્રે ૧ ચમચી દિવેલ નવશેકા પાણી અથવા દૂધ સાથે લેવાથી શરીરમાંથી વાયુ અને યુરિક એસિડ બહાર નીકળે છે.'
      },
      {
        titleGujarati: 'સૂર્યમુખી અને રાઈનું તેલ',
        titleEnglish: 'Sunflower and Mustard Oil Gentle Massage',
        descriptionGujarati: 'દુખાવાવાળા સાંધા પર હળવા હાથે માલિશ કરવી.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'mouth-ulcers',
    nameGujarati: 'મોંના ચાંદા (Mouth Ulcers)',
    nameEnglish: 'Mouth Ulcers (Stomatitis)',
    categoryTag: 'Oral/Digestive',
    aliases: ['mouth ulcers', 'mouth ulcer', 'canker sore', 'મોંના ચાંદા'],
    solutions: [
      {
        titleGujarati: 'જેઠીમધ (Licorice)',
        titleEnglish: 'Licorice Powder with Honey',
        descriptionGujarati: 'જેઠીમધના પાવડરને થોડા મધમાં ભેળવીને મોંના ચાંદા પર લગાવવું અથવા જેઠીમધ વાળા પાણીથી કોગળા કરવા.'
      },
      {
        titleGujarati: 'તુલસીના પાન',
        titleEnglish: 'Fresh Tulsi Leaves',
        descriptionGujarati: 'દિવસમાં ૨-૩ વખત તુલસીના ૪-૫ પાન ચાવીને ઉપર થોડું પાણી પીવું.'
      },
      {
        titleGujarati: 'એલોવેરા જેલ',
        titleEnglish: 'Pure Aloe Vera Gel Rinse',
        descriptionGujarati: 'શુદ્ધ એલોવેરા જેલ ચાંદા પર લગાવી ૫ મિનિટ રાખ્યા પછી કોગળા કરી લેવા.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'hyperacidity-body-heat',
    nameGujarati: 'પિત્ત અને શરીરની બળતરા (Hyperacidity & Body Heat)',
    nameEnglish: 'Hyperacidity and Body Heat (Pitta)',
    categoryTag: 'Digestive/Systemic',
    aliases: ['hyperacidity', 'body heat', 'pitta', 'acid reflux', 'પિત્ત', 'શરીરની બળતરા'],
    solutions: [
      {
        titleGujarati: 'ગુલાબનું ગુલકંદ',
        titleEnglish: 'Rose Gulkand with Milk / Water',
        descriptionGujarati: 'દરરોજ સવાર-સાંજ ૧-૧ ચમચી ગુલકંદ દૂધ અથવા પાણી સાથે લેવાથી શરીરની ગરમી શાંત થાય છે.'
      },
      {
        titleGujarati: 'વરિયાળી અને સાકર',
        titleEnglish: 'Fennel Seeds and Rock Sugar',
        descriptionGujarati: '૧ ચમચી વરિયાળી અને ખડી સાકર ચાવીને ખાવાથી પેટની ગરમી અને બળતરા દૂર થાય છે.'
      },
      {
        titleGujarati: 'દૂધીનો રસ',
        titleEnglish: 'Fresh Bottle Gourd (Lauki) Juice',
        descriptionGujarati: 'સવારે તાજી દૂધીનો રસ પીવાથી પિત્ત શમે છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'high-cholesterol',
    nameGujarati: 'કોલેસ્ટ્રોલ (High Cholesterol)',
    nameEnglish: 'High Cholesterol (Lipid Balance)',
    categoryTag: 'Cardiovascular/Metabolic',
    aliases: ['high cholesterol', 'cholesterol', 'કોલેસ્ટ્રોલ'],
    solutions: [
      {
        titleGujarati: 'અર્જુન છાલનો ઉકાળો',
        titleEnglish: 'Arjun Bark Milk Decoction (Arjun Ksheerpak)',
        descriptionGujarati: 'અર્જુનની છાલનો પાવડર દૂધ અને પાણીમાં ઉકાળીને (અર્જુન ક્ષીરપાક) પીવાથી નસોની અંદર જમેલો કચરો અને બેડ કોલેસ્ટ્રોલ ઘટે છે.'
      },
      {
        titleGujarati: 'મેથી અને જીરૂં',
        titleEnglish: 'Soaked Fenugreek and Cumin Water',
        descriptionGujarati: 'રોજ સવારે પલાળેલી મેથી અને જીરૂંનું પાણી પીવું.'
      },
      {
        titleGujarati: 'લસણ',
        titleEnglish: 'Raw Garlic Cloves',
        descriptionGujarati: 'દરરોજ સવારે લસણની ૧-૨ કળી કાચી ચાવીને ખાવાથી ધમનીઓ સાફ રહે છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'eye-weakness-burning',
    nameGujarati: 'આંખોની નબળાઈ અને બળતરા',
    nameEnglish: 'Eye Weakness and Burning Sensation',
    categoryTag: 'Ophthalmic/Sensory',
    aliases: ['eye weakness', 'eye burning', 'vision care', 'આંખોની નબળાઈ'],
    solutions: [
      {
        titleGujarati: 'આંબળા અને ત્રિફળા',
        titleEnglish: 'Triphala Infusion Eye Wash',
        descriptionGujarati: 'ત્રિફળા ચૂર્ણ રાત્રે પાણીમાં પલાળી, સવારે તે પાણી ગાળીને આંખો ધોવી (આંખમાં છાંટ મારવી).'
      },
      {
        titleGujarati: 'ગાયનું ઘી',
        titleEnglish: 'Cow Ghee Foot Massage & Eyelid Application',
        descriptionGujarati: 'રાત્રે સૂતી વખતે તળિયે ગાયના ઘીથી માલિશ કરવી અને આંખોના પલકારા પર થોડું ઘી લગાવવું.'
      },
      {
        titleGujarati: 'ગાજર અને બીટ',
        titleEnglish: 'Carrot and Beetroot Juice (Vitamin A)',
        descriptionGujarati: 'ગાજરનો રસ પીવાથી વિટામિન-A મળે છે અને દ્રષ્ટિ સુધરે છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'breathlessness-asthma',
    nameGujarati: 'શ્વાસ અને અસ્થમા (Breathlessness / Asthma)',
    nameEnglish: 'Breathlessness and Asthma (Respiratory Pattern)',
    categoryTag: 'Respiratory',
    aliases: [
      'respiratory pattern',
      'respiratory-pattern',
      'breathlessness',
      'asthma',
      'difficulty_breathing',
      'difficulty breathing',
      'chest_pain',
      'chest pain',
      'preset_viral_sensory',
      'શ્વાસ અને અસ્થમા'
    ],
    solutions: [
      {
        titleGujarati: 'આદુ અને મધ',
        titleEnglish: 'Ginger Juice with Honey and Black Pepper',
        descriptionGujarati: '૧ ચમચી આદુના રસમાં ૧ ચમચી મધ અને ચપટી કાળા મરી પાવડર ઉમેરીને સવાર-સાંજ લેવું.'
      },
      {
        titleGujarati: 'અરડૂસી (Vasaka)',
        titleEnglish: 'Adhatoda Vasaka Leaf Juice with Honey',
        descriptionGujarati: 'અરડૂસીના પાનનો રસ મધ સાથે લેવાથી ફેફસાંમાંથી કફ છૂટો પડે છે અને શ્વાસ લેવામાં રાહત થાય છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'earache',
    nameGujarati: 'કાનનો દુખાવો (Earache)',
    nameEnglish: 'Earache',
    categoryTag: 'Sensory/ENT',
    aliases: ['earache', 'ear pain', 'કાનનો દુખાવો'],
    solutions: [
      {
        titleGujarati: 'લસણ અને સરસવનું તેલ',
        titleEnglish: 'Warm Garlic-Infused Mustard Oil Drops',
        descriptionGujarati: 'સરસવના તેલમાં લસણની ૨ કળી નાખીને ગરમ કરવું. તેલ નવશેકું થાય ત્યારે ૧-૨ ટીંપા કાનમાં નાખવાથી કાનના દુખાવામાં રાહત મળે છે.'
      },
      {
        titleGujarati: 'તુલસીનો રસ',
        titleEnglish: 'Warm Tulsi Leaf Juice Drops',
        descriptionGujarati: 'તુલસીના પાનનો તાજો રસ નવશેકો ગરમ કરીને ૧-૨ ટીંપા કાનમાં મૂકવો.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'leg-cramps',
    nameGujarati: 'પિંડીઓમાં ખેંચાણ અને પગનો દુખાવો (Leg Cramps)',
    nameEnglish: 'Leg Cramps and Calf Pain',
    categoryTag: 'Musculoskeletal',
    aliases: ['leg cramps', 'calf pain', 'leg pain', 'પિંડીઓમાં ખેંચાણ', 'પગનો દુખાવો'],
    solutions: [
      {
        titleGujarati: 'સિંધવ મીઠું અને ગરમ પાણી',
        titleEnglish: 'Warm Rock Salt Foot Soak',
        descriptionGujarati: 'ગરમ પાણીમાં સિંધવ મીઠું નાખીને ૧૫-૨૦ મિનિટ પગ બોળી રાખવા.'
      },
      {
        titleGujarati: 'તલ / સરસવના તેલની માલિશ',
        titleEnglish: 'Warm Sesame / Mustard Oil Calf Massage',
        descriptionGujarati: 'રાત્રે સૂતા પહેલા નવશેકા તેલથી પિંડીઓ પર માલિશ કરવી.'
      },
      {
        titleGujarati: 'કેળા અને દૂધ',
        titleEnglish: 'Bananas and Warm Milk (Potassium & Calcium)',
        descriptionGujarati: 'શરીરમાં કેલ્શિયમ કે પોટેશિયમની ઉણપ દૂર કરવા કેળાનું સેવન કરવું.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'pigmentation-dark-spots',
    nameGujarati: 'ચહેરાના કાળા ધાબા અને છાલી (Pigmentation / Dark Spots)',
    nameEnglish: 'Pigmentation and Dark Spots',
    categoryTag: 'Dermatological',
    aliases: ['pigmentation', 'dark spots', 'blemishes', 'ચહેરાના કાળા ધાબા'],
    solutions: [
      {
        titleGujarati: 'જાયફળ અને દૂધ',
        titleEnglish: 'Nutmeg Paste with Raw Milk',
        descriptionGujarati: 'જાયફળને કાચા દૂધમાં ઘસીને ચહેરાના કાળા ધાબા પર લેપ કરવો.'
      },
      {
        titleGujarati: 'એલોવેરા અને હળદર',
        titleEnglish: 'Aloe Vera Gel with Turmeric',
        descriptionGujarati: 'તાજા એલોવેરા જેલમાં ચપટી હળદર ભેળવીને રોજ રાત્રે ચહેરા પર લગાવવું.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'sore-throat',
    nameGujarati: 'ગળાની ખરાશ અને અવાજ બેસી જવો (Sore Throat)',
    nameEnglish: 'Sore Throat and Hoarseness',
    categoryTag: 'Respiratory/ENT',
    aliases: ['sore throat', 'sore_throat', 'hoarseness', 'ગળાની ખરાશ'],
    solutions: [
      {
        titleGujarati: 'મીઠાના કોગળા',
        titleEnglish: 'Warm Salt and Turmeric Water Gargle',
        descriptionGujarati: 'નવશેકા ગરમ પાણીમાં સિંધવ મીઠું અને ચપટી હળદર નાખીને દિવસમાં ૩ વખત કોગળા કરવા.'
      },
      {
        titleGujarati: 'જેઠીમધ',
        titleEnglish: 'Licorice (Jethimadh) Root',
        descriptionGujarati: 'જેઠીમધનો નાનો ટુકડો મોંમાં રાખીને તેનો રસ ધીમે ધીમે ગળવો.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'kidney-health-cleansing',
    nameGujarati: 'પથરી અને કિડનીની સફાઈ (Kidney Health)',
    nameEnglish: 'Kidney Health & Cleansing',
    categoryTag: 'Renal',
    aliases: ['kidney health', 'kidney cleansing', 'renal cleanse', 'કિડનીની સફાઈ'],
    solutions: [
      {
        titleGujarati: 'મકાઈના સુવર્ણ વાળ (Corn Silk)',
        titleEnglish: 'Corn Silk Infusion (Makai Silk)',
        descriptionGujarati: 'મકાઈના ડોડા પરના રેશમી વાળને પાણીમાં ઉકાળીને તે પાણી પીવાથી કિડની સાફ થાય છે અને પેશાબ છૂટો આવે છે.'
      },
      {
        titleGujarati: 'ધાણા અને જીરૂં ઉકાળો',
        titleEnglish: 'Coriander, Cumin and Fennel Decoction',
        descriptionGujarati: 'ધાણા, જીરૂં અને વરિયાળીનો ઉકાળો પીવાથી કિડની પરનું દબાણ ઘટે છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  },
  {
    id: 'general-weakness-fatigue',
    nameGujarati: 'થાક અને અશક્તિ (General Weakness & Fatigue)',
    nameEnglish: 'General Weakness and Fatigue',
    categoryTag: 'Systemic/General',
    aliases: [
      'viral-like pattern',
      'viral like pattern',
      'viral-like',
      'fatigue',
      'weakness',
      'general weakness',
      'loss_of_taste',
      'loss_of_smell',
      'થાક',
      'અશક્તિ'
    ],
    solutions: [
      {
        titleGujarati: 'ખજૂર અને દૂધ',
        titleEnglish: 'Dates Boiled with Warm Milk',
        descriptionGujarati: 'રાત્રે ૪-૫ ખજૂર દૂધમાં ઉકાળીને પીવું અને ખજૂર ચાવી જવું.'
      },
      {
        titleGujarati: 'ચ્યવનપ્રાશ',
        titleEnglish: 'Chyawanprash with Warm Milk',
        descriptionGujarati: 'રોજ સવારે ૧ ચમચી ચ્યવનપ્રાશ નવશેકા દૂધ સાથે લેવાથી શક્તિ અને રોગપ્રતિકારક ક્ષમતા વધે છે.'
      }
    ],
    source: SOURCE_DOCUMENT_TITLE
  }
];

/**
 * Normalizes an input string by removing spaces, hyphens, and punctuation for robust matching.
 */
export function normalizeDiseaseKey(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '') // Keep letters & numbers across all scripts
    .trim();
}

/**
 * Deterministic mapping dictionary from AI Simulator categories to DiseaseSolutionRecord ID.
 */
const CATEGORY_TO_DISEASE_ID_MAP: Record<string, string> = {
  'cold-like illness': 'cold-cough-phlegm',
  'flu-like illness': 'fever',
  'respiratory pattern': 'breathlessness-asthma',
  'digestive pattern': 'digestive-problems',
  'allergy pattern': 'skin-problems',
  'skin-related pattern': 'skin-problems',
  'viral-like pattern': 'general-weakness-fatigue'
};

/**
 * Map of condition IDs to records for fast O(1) lookup.
 */
const DISEASE_SOLUTIONS_MAP: Map<string, DiseaseSolutionRecord> = new Map(
  DISEASE_SOLUTIONS.map((item) => [item.id, item])
);

/**
 * Deterministic lookup to retrieve supportive care solutions for a predicted condition or category.
 * If no valid mapping is present in the source dataset, returns null.
 */
export function getDiseaseSolution(
  categoryOrDiseaseName?: string | null
): DiseaseSolutionRecord | null {
  if (!categoryOrDiseaseName) return null;

  const raw = categoryOrDiseaseName.trim();
  const normalized = normalizeDiseaseKey(raw);
  const lower = raw.toLowerCase();

  // 1. Direct match by ID
  if (DISEASE_SOLUTIONS_MAP.has(lower)) {
    return DISEASE_SOLUTIONS_MAP.get(lower)!;
  }
  if (DISEASE_SOLUTIONS_MAP.has(raw)) {
    return DISEASE_SOLUTIONS_MAP.get(raw)!;
  }

  // 2. Direct match via category dictionary
  if (CATEGORY_TO_DISEASE_ID_MAP[lower]) {
    const targetId = CATEGORY_TO_DISEASE_ID_MAP[lower];
    return DISEASE_SOLUTIONS_MAP.get(targetId) || null;
  }

  // 3. Search aliases, English names, Gujarati names
  for (const record of DISEASE_SOLUTIONS) {
    if (normalizeDiseaseKey(record.id) === normalized) {
      return record;
    }
    if (normalizeDiseaseKey(record.nameEnglish) === normalized) {
      return record;
    }
    if (normalizeDiseaseKey(record.nameGujarati) === normalized) {
      return record;
    }
    if (record.aliases.some((alias) => normalizeDiseaseKey(alias) === normalized || lower.includes(alias.toLowerCase()))) {
      return record;
    }
  }

  // 4. Substring / Token matching on aliases
  for (const record of DISEASE_SOLUTIONS) {
    for (const alias of record.aliases) {
      const normAlias = normalizeDiseaseKey(alias);
      if (normAlias.length > 3 && (normalized.includes(normAlias) || normAlias.includes(normalized))) {
        return record;
      }
    }
  }

  return null;
}

/**
 * Returns all available supportive care disease records.
 */
export function getAllDiseaseSolutions(): DiseaseSolutionRecord[] {
  return DISEASE_SOLUTIONS;
}
