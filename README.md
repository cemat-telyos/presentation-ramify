# Ramify — Social Media Performance Report

Présentation web stratégique pour l'analyse des performances Social Media de Ramify (YouTube, Instagram, LinkedIn).

## Stack technique

- **Framework** : Next.js 14+ (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS
- **Graphiques** : Recharts
- **Déploiement** : Vercel-ready

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le serveur démarre sur [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

## Déploiement Vercel

Le projet est prêt pour un déploiement immédiat sur Vercel :

1. Connectez votre repository à Vercel
2. Vercel détectera automatiquement la configuration Next.js
3. Déployez

Ou via CLI :

```bash
npx vercel
```

## Export PDF

La présentation est optimisée pour l'impression/export PDF :

1. Ouvrez la présentation dans le navigateur
2. Cliquez sur le bouton "PDF" dans la navigation
3. Utilisez le dialogue d'impression du navigateur (Ctrl/Cmd + P)
4. Sélectionnez "Enregistrer en PDF"

## Navigation

- **Flèches gauche/droite** : Slide précédente/suivante
- **Espace** : Slide suivante
- **Escape** : Afficher/masquer la navigation

## Structure du projet

```
src/
├── app/
│   ├── globals.css      # Styles globaux + charte Ramify
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page de présentation
├── components/
│   ├── Slide.tsx        # Composant slide de base
│   ├── KPI.tsx          # Composants KPI
│   ├── ChartBlock.tsx   # Composants graphiques
│   ├── InsightCard.tsx  # Cartes insights
│   ├── DataTable.tsx    # Tables de données
│   └── FunnelDiagram.tsx # Diagramme funnel
├── data/
│   └── index.ts         # Données centralisées
└── slides/
    ├── CoverSlide.tsx
    ├── ExecutiveSummarySlide1.tsx
    ├── ExecutiveSummarySlide2.tsx
    ├── InstagramSlide.tsx
    ├── LinkedInSlide.tsx
    ├── YouTubeGlobalSlide.tsx
    ├── YouTubeShortsVsLongsSlide.tsx
    ├── YouTubeJanuarySlide.tsx
    ├── CrossPlatformSlide.tsx
    ├── StrategicInsightsSlide.tsx
    ├── RecommendationsSlide.tsx
    └── ConclusionSlide.tsx
```

## Charte graphique Ramify

### Couleurs

| Nom | Code | Usage |
|-----|------|-------|
| Gold 500 | `#EFC27E` | Accent principal |
| Grey 900 | `#1E1E1E` | Texte, backgrounds dark |
| Gold 100 | `#F8F7F7` | Background clair |
| White | `#FFFFFF` | Cartes, contenus |

### Typographies

- **Titres** : PP Fragment Serif Regular
- **Paragraphes** : PP Fragment Sans Light
- **Labels** : PP Fragment Sans Regular

(Fallbacks : Georgia / Helvetica Neue)

## Période d'analyse

- **YouTube & LinkedIn** : 31/01/2025 → 30/01/2026
- **Instagram** : 90 derniers jours
- **Focus YouTube Janvier** : Janvier 2026

---

Document confidentiel — Usage interne
