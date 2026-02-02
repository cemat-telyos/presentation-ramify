// ============================================================================
// RAMIFY - Social Media Performance Data
// Période : 31/01/2025 → 30/01/2026 (sauf Instagram : 90 jours)
// ============================================================================

export const reportPeriod = {
  start: "31/01/2025",
  end: "30/01/2026",
  instagramPeriod: "90 jours",
  linkedinDays: 122,
};

// ============================================================================
// INSTAGRAM DATA (90 jours)
// ============================================================================

export const instagramData = {
  period: "90 jours",
  views: 316796,
  adsPercentage: 51.3,
  nonFollowersPercentage: 87,
  accountsReached: 139983,
  accountsReachedGrowth: 76.5,
  interactions: 2015,
  netSubscriberGrowth: 532,
  
  formatBreakdown: {
    reels: {
      viewsPercentage: 79,
      interactionsPercentage: 78,
    },
    publications: {
      viewsPercentage: 16,
      interactionsPercentage: 17,
    },
    stories: {
      viewsPercentage: 5,
      interactionsPercentage: 5,
    },
  },

  strategicRole: "Awareness & Acquisition froide",
  strategicInsight: "Excellent reach hors base existante. Canal d'exposition, non de conversion directe.",
};

export const instagramFormatChart = [
  { name: "Reels", vues: 79, interactions: 78 },
  { name: "Publications", vues: 16, interactions: 17 },
  { name: "Stories", vues: 5, interactions: 5 },
];

// ============================================================================
// LINKEDIN DATA (31/01/2025 → 30/01/2026)
// ============================================================================

export const linkedinData = {
  period: "31/01/2025 → 30/01/2026",
  impressions: 360393,
  organicPercentage: 100,
  reactions: 7363,
  comments: 254,
  reposts: 22,
  totalFollowers: 9547,
  newFollowers: 911,
  newFollowersPeriod: "122 jours",
  newFollowersGrowth: -5.3,
  pageSearches: 31810,
  pageSearchesGrowth: 31.1,
  pageViews: 11944,
  uniqueVisitors: 5117,
  buttonClicks: 1,

  strategicRole: "Autorité & Légitimité",
  strategicInsight: "Excellente visibilité organique. Conversion sous-exploitée malgré un engagement élevé.",
};

export const linkedinEngagementChart = [
  { name: "Réactions", value: 7363 },
  { name: "Commentaires", value: 254 },
  { name: "Republications", value: 22 },
];

// ============================================================================
// YOUTUBE DATA (31/01/2025 → 30/01/2026)
// ============================================================================

export const youtubeData = {
  period: "31/01/2025 → 30/01/2026",
  
  global: {
    views: 49338,
    watchtime: 2848, // heures
    averageDuration: "4:59",
    averageDurationSeconds: 299,
    impressions: 191783,
    ctr: 3.6,
    subscribersGained: 589,
  },

  longForm: {
    views: 28712,
    watchtime: 2782, // heures
    averageDuration: "6:25",
    averageDurationSeconds: 385,
    role: "Autorité",
  },

  shorts: {
    views: 20632,
    watchtime: 66, // heures
    averageDuration: "0:27",
    averageDurationSeconds: 27,
    role: "Acquisition",
  },

  strategicRole: "Autorité & Acquisition",
  strategicInsight: "Les Shorts génèrent l'acquisition, les vidéos longues construisent l'autorité et la confiance.",
};

export const youtubeComparisonChart = [
  { 
    name: "Vidéos longues", 
    vues: 28712, 
    watchtime: 2782,
    duree: 385,
  },
  { 
    name: "Shorts", 
    vues: 20632, 
    watchtime: 66,
    duree: 27,
  },
];

// ============================================================================
// YOUTUBE JANVIER 2026 (Focus Shorts)
// ============================================================================

export const youtubeJanuary2026 = {
  period: "Janvier 2026",
  subscribers: 252,
  videosPublished: 21,
  views: 7335,
  watchtime: 218, // heures
  averageDuration: "2:47",
  averageDurationSeconds: 167,

  interpretation: `Janvier est un mois dominé par les Shorts, expliquant la forte acquisition d'abonnés et la baisse mécanique de la durée moyenne. Les Shorts remplissent leur rôle d'acquisition, sans vocation d'autorité.`,
};

// ============================================================================
// CROSS-PLATFORM ANALYSIS
// ============================================================================

export const crossPlatformData = {
  totalReach: 316796 + 360393 + 191783, // Instagram views + LinkedIn impressions + YouTube impressions
  
  funnel: {
    awareness: {
      platform: "Instagram",
      role: "Exposition & Acquisition froide",
      metric: "316 796 vues",
      strength: "87% non-followers",
    },
    consideration: {
      platform: "LinkedIn",
      role: "Autorité & Légitimité",
      metric: "360 393 impressions",
      strength: "100% organique",
    },
    engagement: {
      platform: "YouTube",
      role: "Éducation & Conversion",
      metric: "2 848h watchtime",
      strength: "Durée moyenne 4:59",
    },
  },

  platformComparison: [
    {
      platform: "Instagram",
      reach: 139983,
      engagement: 2015,
      engagementRate: 1.44,
      growth: 532,
      role: "Awareness",
    },
    {
      platform: "LinkedIn",
      reach: 360393,
      engagement: 7639,
      engagementRate: 2.12,
      growth: 911,
      role: "Autorité",
    },
    {
      platform: "YouTube",
      reach: 191783,
      engagement: 49338,
      engagementRate: 25.7, // CTR + views/impressions
      growth: 589,
      role: "Conversion",
    },
  ],
};

export const funnelChart = [
  { stage: "Awareness", platform: "Instagram", value: 316796, label: "Vues" },
  { stage: "Considération", platform: "LinkedIn", value: 360393, label: "Impressions" },
  { stage: "Engagement", platform: "YouTube", value: 2848, label: "Heures" },
];

// ============================================================================
// STRATEGIC INSIGHTS
// ============================================================================

export const strategicInsights = [
  {
    id: 1,
    title: "Instagram : canal d'acquisition, pas de conversion",
    insight: "87% des vues proviennent de non-followers. Instagram sert l'exposition de marque, non la conversion directe.",
    recommendation: "Maintenir une présence régulière sans investir dans des contenus conversion-oriented.",
  },
  {
    id: 2,
    title: "LinkedIn : autorité organique sous-exploitée",
    insight: "100% de visibilité organique avec +31% de recherches de page. Le taux de conversion (1 clic bouton) reste très faible.",
    recommendation: "Renforcer les Call-to-Action et optimiser le parcours de conversion depuis LinkedIn.",
  },
  {
    id: 3,
    title: "YouTube : double stratégie efficace",
    insight: "Les Shorts génèrent l'acquisition (+252 abonnés en janvier), les vidéos longues construisent l'autorité (6:25 de durée moyenne).",
    recommendation: "Maintenir l'équilibre Shorts/Longs. Capitaliser sur les webinaires pour le contenu long.",
  },
  {
    id: 4,
    title: "Cohérence cross-plateforme à renforcer",
    insight: "Chaque plateforme remplit un rôle distinct dans le funnel. La synergie peut être amplifiée.",
    recommendation: "Créer des parcours de redirection explicites entre plateformes.",
  },
  {
    id: 5,
    title: "Contenu institutionnel : positionnement différenciant",
    insight: "La sobriété du contenu (interviews, webinaires) distingue Ramify des acteurs marketing-driven.",
    recommendation: "Préserver cette posture institutionnelle, gage de crédibilité pour la cible HNWI.",
  },
];

// ============================================================================
// RECOMMENDATIONS
// ============================================================================

export const recommendations = [
  {
    priority: 1,
    platform: "LinkedIn",
    action: "Optimiser le parcours de conversion",
    detail: "Implémenter des CTA clairs sur chaque publication et optimiser le bouton de la page entreprise.",
    impact: "Convertir la visibilité organique en leads qualifiés.",
  },
  {
    priority: 2,
    platform: "YouTube",
    action: "Maintenir la cadence Shorts",
    detail: "Continuer à publier des Shorts régulièrement pour alimenter l'acquisition d'abonnés.",
    impact: "Soutenir la croissance de l'audience YouTube.",
  },
  {
    priority: 3,
    platform: "YouTube",
    action: "Capitaliser sur les webinaires",
    detail: "Systématiser la rediffusion des webinaires en format long pour renforcer l'autorité.",
    impact: "Augmenter le watchtime et la durée moyenne de visionnage.",
  },
  {
    priority: 4,
    platform: "Instagram",
    action: "Rationaliser l'investissement publicitaire",
    detail: "51% des vues proviennent des ads. Évaluer le ROI réel de cette dépense.",
    impact: "Optimiser l'allocation budgétaire.",
  },
  {
    priority: 5,
    platform: "Cross-platform",
    action: "Créer des passerelles entre plateformes",
    detail: "Rediriger explicitement l'audience Instagram vers LinkedIn et YouTube pour la conversion.",
    impact: "Améliorer le taux de conversion global du funnel social.",
  },
];

// ============================================================================
// COLORS (Ramify Brand)
// ============================================================================

export const colors = {
  gold500: "#EFC27E",
  grey900: "#1E1E1E",
  gold100: "#F8F7F7",
  white: "#FFFFFF",
};

export const chartColors = {
  primary: "#EFC27E",
  secondary: "#1E1E1E",
  tertiary: "#989591",
  quaternary: "#726F6B",
  instagram: "#E1306C",
  linkedin: "#0A66C2",
  youtube: "#FF0000",
};

export const gradients = {
  essential: ["#F8F7F7", "#D9D6D2"],
  flagship: ["#989591", "#726F6B"],
  elite: ["#EFC27E", "#856432"],
  green: ["#E2F0CF", "#879373"],
};
