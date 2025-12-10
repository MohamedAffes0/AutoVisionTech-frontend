<p align="center">
    <picture>
        <img src="./docs/images/logo.png" width=450px>
    </picture>
</p>
<p align="center">
    <image src="https://img.shields.io/badge/Angular-19-red?logo=angular">
    <image src="https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript">
    <image src="https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwindcss">
    <image src="https://img.shields.io/badge/License-Proprietary-green">
</p>

## Table des matières

- [Vue d'ensemble](#-vue-densemble)
- [Fonctionnalités](#-fonctionnalités)
- [Documentation](#-documentation)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Scripts disponibles](#-scripts-disponibles)
- [Structure du projet](#-structure-du-projet)

## Vue d'ensemble

AutoVisionTech est une plateforme web moderne et élégante pour la vente de voitures premium. Conçue avec Angular 19 et TailwindCSS, elle offre une expérience utilisateur fluide et intuitive pour la gestion de véhicules de luxe.

### Points forts

- **Interface moderne** : Design glassmorphism avec animations fluides
- **Architecture scalable** : Structure modulaire et réutilisable
- **Authentification sécurisée** : Système d'authentification avec Better Auth
- **Gestion complète** : CRUD complet pour véhicules, réservations et utilisateurs
- **Responsive** : Interface adaptative pour tous les appareils
- **Performance optimisée** : SSR avec Angular Universal

## Fonctionnalités

### Pour les visiteurs
- Catalogue de véhicules avec filtres avancés
- Réservation de rendez-vous en ligne
- Système de commentaires
- Détails complets des véhicules
- Programme d'échange (Trade-in)

### Pour les agents
- Gestion des véhicules (CRUD)
- Gestion des réservations
- Tableau de bord statistiques
- Upload d'images (max 5 par véhicule)

### Pour les administrateurs
- Gestion des utilisateurs
- Attribution des rôles
- Panel d'administration complet
- Contrôle d'activation des comptes

### Pages statiques
- À propos
- Services
- Financement
- Trade-in
- FAQ
- Contact
- Politique de confidentialité
- Conditions d'utilisation
- Garantie

## 📚 Documentation

Consultez les fichiers de documentation détaillés :

- [`STRUCTURE.md`](./docs/STRUCTURE.md) - Architecture et organisation du projet
- [`TECHNOLOGIES.md`](./docs/TECHNOLOGIES.md) - Stack technique détaillée
- [`FEATURES.md`](./docs/FEATURES.md) - Fonctionnalités complètes
- [`DESIGN.md`](./docs/DESIGN.md) - Guide de style et composants UI

## Installation

### Prérequis

- Node.js >= 18.19.0
- npm >= 10.0.0
- Angular CLI 19

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/MohamedAffes0/AutoVisionTech-frontend.git
cd autovisiontech
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration de l'environnement**
```bash
# Créer le fichier .env à la racine
cp .env.example .env
```

Configurer les variables d'environnement :
```env
# API Configuration
API_BASE_URL=http://localhost:3000

# Authentication
AUTH_SECRET=your-secret-key-here
```

4. **Démarrer le serveur de développement**
```bash
npm start
```

L'application sera accessible sur `http://localhost:4200`

## Utilisation

### Comptes de test

**Administrateur**
```
Email: admin@autovision.com
Password: Admin123!
```

**Agent**
```
Email: agent@autovision.com
Password: Agent123!
```

### Workflow typique

1. **Visiteur** : Parcourir le catalogue → Réserver un rendez-vous
2. **Agent** : Ajouter des véhicules → Gérer les réservations
3. **Admin** : Gérer les utilisateurs → Superviser l'activité

## Scripts disponibles

```bash
# Développement
npm start              # Démarrer le serveur de développement
npm run dev            # Alias pour start

# Build
npm run build          # Build de production
npm run watch          # Build en mode watch

# Tests
npm test               # Lancer les tests unitaires
npm run test:coverage  # Tests avec couverture de code

# Server-Side Rendering
npm run serve:ssr:ArtisanArt-frontend  # Serveur SSR

# Linting & Formatting
npm run lint           # Vérifier le code
npm run format         # Formater le code
```

## Structure du projet

```
src/
├── app/
│   ├── core/              # Services et modèles
│   │   ├── models/        # Interfaces TypeScript
│   │   └── services/      # Services métier
│   ├── features/          # Modules fonctionnels
│   │   ├── admin-panel/
│   │   ├── car-page/
│   │   ├── main-page/
│   │   ├── manage-cars/
│   │   ├── manage-reservations/
│   │   ├── profile-page/
│   │   ├── signin/
│   │   ├── signup/
│   │   └── static/        # Pages statiques
│   └── shared/            # Composants partagés
│       └── components/
├── lib/                   # Librairies externes
└── styles.css            # Styles globaux
```

Voir [`STRUCTURE.md`](./docs/STRUCTURE.md) pour plus de détails.

## Configuration

### TailwindCSS

La configuration Tailwind se trouve dans `tailwind.config.js`. Le projet utilise :
- Variables CSS personnalisées
- Thème dark par défaut
- Classes utilitaires étendues

### Angular

Configuration dans `angular.json` :
- SSR activé
- Optimisations de build
- Source maps pour le débogage

## Déploiement

### Build de production

```bash
npm run build
```

Les fichiers de build seront dans `dist/artisan-art-frontend/browser/`

### Déploiement SSR

```bash
npm run build
npm run serve:ssr:ArtisanArt-frontend
```

## Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

### Guidelines

- Suivre les conventions de code Angular
- Écrire des tests pour les nouvelles fonctionnalités
- Documenter les changements importants
- Respecter les standards ESLint

## Rapporter un bug

Utiliser les [GitHub Issues](https://github.com/MohamedAffes0/AutoVisionTech-frontend/issues) avec :
- Description claire du problème
- Steps to reproduce
- Comportement attendu vs actuel
- Screenshots si applicable
- Environnement (OS, navigateur, version)

## License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

⭐ Si vous aimez ce projet, n'hésitez pas à lui donner une étoile sur GitHub !