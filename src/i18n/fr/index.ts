export default {
  inputs: {
    catWeight: 'Poids du chat',
    calculate: 'Calculer',
    mealCount: 'Nombre de jours',
    measurements: 'Mesures',
    language: 'Langue',
    activityLevel: "Niveau d'activité",
  },
  maintenance: {
    LowActivity: 'Faible',
    NormalActivity: 'Actif',
    HighActivity: 'Très actif',
    LessThan6Months: '0 à 6 mois',
    Between6And18Months: '6 à 18 mois',
  },
  measurements: {
    metric: 'Métrique (g/kg)',
    imperial: 'Impérial (oz/lb)',
  },
  navigation: {
    home: 'Accueil',
    blog: 'Blog',
    feedback: 'Suggestions',
    navigation: 'Navigation',
    constantImprove:
      'Nous cherchons constamment à améliorer la calculatrice pour aider les passionnés du barf que nous sommes. Aidez-nous en donnant votre <a href="{0}" target="_blank" rel="noopener">feedback</a> !',
  },
  result: {
    daily: 'Quotidien : ',
    total: 'Total : ',
    meat: 'Viande',
    bone: 'Os',
    liver: 'Foie',
    otherOrgans: 'Autres organes',
    vegetables: 'Légumes',
    fishOil: 'Huile de poisson',
    eggs: 'Œufs',
  },
};
