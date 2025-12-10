# Structure du projet AutoVisionTech

## Vue d'ensemble

AutoVisionTech suit une architecture modulaire basée sur les meilleures pratiques Angular, avec une séparation claire entre les couches core, features et shared.

## Architecture globale

```
AutoVisionTech/
│
├── src/
│   ├── app/                    # Application principale
│   ├── lib/                    # Librairies externes
│   ├── styles.css             # Styles globaux
│   ├── index.html             # Point d'entrée HTML
│   ├── main.ts                # Bootstrap de l'application
│   ├── main.server.ts         # Bootstrap SSR
│   └── server.ts              # Serveur Express SSR
│
├── docs/                       # Documentation
├── public/                     # Assets statiques
└── dist/                       # Build de production
```

## Structure détaillée de /src/app

### 1. Core Layer (`/core`)

Contient les services, modèles et logique métier fondamentale.

```
core/
├── models/                     # Interfaces TypeScript
│   ├── auth.model.ts          # Types d'authentification
│   ├── user.model.ts          # Types utilisateur
│   ├── car.model.ts           # Types véhicule
│   ├── comment.model.ts       # Types commentaire
│   ├── reservation.model.ts   # Types réservation
│   └── index.ts               # Barrel export
│
└── services/                   # Services Angular
    ├── auth.service.ts        # Gestion authentification
    ├── user.service.ts        # CRUD utilisateurs
    ├── car.service.ts         # CRUD véhicules
    ├── comment.service.ts     # Gestion commentaires
    └── reservation.service.ts # Gestion réservations
```

#### Modèles principaux

**auth.model.ts**
```typescript
- Session: Session utilisateur
- SessionResponse: Réponse de session
- LoginResponse: Réponse de connexion
- SignUpResponse: Réponse d'inscription
- SignUpDto: DTO d'inscription
```

**car.model.ts**
```typescript
- Car: Entité véhicule complète
- CarsResponse: Réponse paginée de véhicules
- CreateCarDto: DTO création véhicule
- UpdateCarDto: DTO mise à jour véhicule
- CarFilters: Filtres de recherche
```

**user.model.ts**
```typescript
- User: Entité utilisateur
- UserResponse: Réponse paginée d'utilisateurs
- UserFilterDto: Filtres utilisateur
- CreateUserDto: DTO création utilisateur
- UpdateProfileDto: DTO mise à jour profil
```

### 2. Features Layer (`/features`)

Modules fonctionnels organisés par domaine métier.

```
features/
│
├── admin-panel/               # Administration
│   ├── admin-panel.ts
│   ├── admin-panel.html
│   └── admin-panel.css
│
├── car-page/                  # Page détail véhicule
│   ├── car-page.ts
│   ├── car-page.html
│   └── car-page.css
│
├── main-page/                 # Page d'accueil/catalogue
│   ├── main-page.ts
│   ├── main-page.html
│   └── main-page.css
│
├── manage-cars/               # Gestion véhicules
│   ├── manage-cars.ts
│   ├── manage-cars.html
│   └── manage-cars.css
│
├── manage-reservations/       # Gestion réservations
│   ├── manage-reservations.ts
│   ├── manage-reservations.html
│   └── manage-reservations.css
│
├── profile-page/              # Profil utilisateur
│   ├── profile-page.ts
│   ├── profile-page.html
│   └── profile-page.css
│
├── signin/                    # Connexion
│   ├── signin.ts
│   ├── signin.html
│   └── signin.css
│
├── signup/                    # Inscription
│   ├── signup.ts
│   ├── signup.html
│   └── signup.css
│
└── static/                    # Pages statiques
    ├── about-us/
    ├── services/
    ├── financing/
    ├── trade-in/
    ├── faq/
    ├── contact-us/
    ├── privacy/
    ├── terms/
    └── warranty/
```

#### Description des features

**admin-panel**
- Gestion des utilisateurs
- Attribution des rôles
- Activation/désactivation de comptes
- Statistiques globales

**car-page**
- Détails complets du véhicule
- Galerie d'images
- Système de commentaires
- Formulaire de réservation

**main-page**
- Catalogue de véhicules
- Filtres avancés (prix, année, kilométrage)
- Tri dynamique
- Recherche par marque

**manage-cars**
- Ajout de véhicules
- Modification inline
- Gestion des images (max 5)
- Statistiques (disponibles, réservés, vendus)

**manage-reservations**
- Liste des réservations
- Filtrage par statut et date
- Changement de statut
- Détails des clients

**profile-page**
- Modification du profil
- Upload de photo de profil
- Changement de mot de passe
- Suppression de compte

### 3. Shared Layer (`/shared`)

Composants, directives et pipes réutilisables.

```
shared/
└── components/
    ├── navbar/                # Barre de navigation
    ├── footer/                # Pied de page
    ├── hero/                  # Section hero
    ├── car-card/              # Carte véhicule
    ├── car-details/           # Détails véhicule
    ├── car-filter/            # Filtres de recherche
    ├── add-car/               # Formulaire ajout véhicule
    ├── comments/              # Système de commentaires
    ├── reservation-form/      # Formulaire réservation
    ├── reservation-filter/    # Filtres réservations
    ├── info-card/             # Carte informative
    ├── legal-page/            # Template page légale
    └── ...
```

#### Composants partagés clés

**navbar**
- Navigation adaptative
- Gestion de l'authentification
- Menu mobile
- Affichage conditionnel selon le rôle

**car-card**
- Affichage carte véhicule
- Badges de statut
- Navigation vers détails

**car-filter**
- Filtres de prix avec sliders
- Recherche par texte
- Options de tri
- Filtres rapides

**comments**
- Affichage des commentaires
- Ajout de commentaire
- Validation de formulaire

**reservation-form**
- Formulaire de réservation
- Validation des champs
- Gestion des disponibilités
- Information de contact

## Flux de données

### Architecture des services

```
Components
    ↓
Services (HTTP Calls)
    ↓
Backend API
    ↓
Database
```

### Gestion de l'état

- **RxJS Observables** : Pour les données asynchrones
- **BehaviorSubject** : Pour l'état partagé (utilisateur, session)
- **Signals** : Pour l'état local des composants

### Pattern de communication

```typescript
// Service
user$ = new BehaviorSubject<User | null>(null);

// Component
this.authService.user$.subscribe(user => {
  this.currentUser = user;
});
```

## Conventions de nommage

### Fichiers
- **Components**: `nom-composant.ts`, `nom-composant.html`, `nom-composant.css`
- **Services**: `nom.service.ts`
- **Models**: `nom.model.ts`
- **Interfaces**: `INomInterface`

### Classes et variables
```typescript
// Classes (PascalCase)
export class UserService { }

// Variables (camelCase)
const currentUser = ...;

// Constants (SCREAMING_SNAKE_CASE)
const MAX_UPLOAD_SIZE = 5;

// Interfaces (PascalCase)
export interface User { }
```

## Organisation CSS

### Styles globaux
```
styles.css
├── CSS Variables
├── Reset & Base
├── Animations
├── Button Styles
├── Brand Styles
├── Status Badges
├── Input Styles
├── Forms
└── Utilities
```

### Styles composants
- Chaque composant a son propre fichier CSS
- Utilisation de TailwindCSS
- Classes utilitaires personnalisées
- Animations spécifiques

## Modules et Lazy Loading

### Configuration des routes

```typescript
// app.routes.ts
export const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'car-page/:id', component: CarPage },
  { path: 'manage-cars', component: ManageCars },
  // ... autres routes
  { path: '**', redirectTo: '' }
];
```

### Composants standalone

Tous les composants utilisent l'approche standalone d'Angular 19 :

```typescript
@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car-card.html',
  styleUrls: ['./car-card.css']
})
```

## Guards et Interceptors

### Structure (à implémenter)

```
core/
├── guards/
│   ├── auth.guard.ts
│   ├── admin.guard.ts
│   └── agent.guard.ts
│
└── interceptors/
    ├── auth.interceptor.ts
    ├── error.interceptor.ts
    └── loading.interceptor.ts
```

## Responsive Design

### Breakpoints TailwindCSS

```css
/* Mobile First */
sm:  640px   /* Tablette portrait */
md:  768px   /* Tablette landscape */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large */
```

### Organisation responsive

- Mobile first design
- Composants adaptatifs
- Menus burger sur mobile
- Grids flexibles

## Structure de tests

```
src/
└── app/
    ├── core/
    │   └── services/
    │       └── auth.service.spec.ts
    ├── features/
    │   └── main-page/
    │       └── main-page.spec.ts
    └── shared/
        └── components/
            └── navbar/
                └── navbar.spec.ts
```

## Métriques du projet

- **Lignes de code**: ~15,000
- **Composants**: 30+
- **Services**: 5
- **Pages**: 20+
- **Modèles**: 10+

## Performance

### Optimisations

- **Lazy Loading**: Routes chargées à la demande
- **SSR**: Server-Side Rendering avec Angular Universal
- **Change Detection**: OnPush où applicable
- **Image Optimization**: Compression et lazy loading
- **Bundle Splitting**: Séparation vendor/app

### Structure de build

```
dist/
├── browser/              # Build client
│   ├── index.html
│   ├── main.js
│   ├── polyfills.js
│   └── styles.css
│
└── server/              # Build server (SSR)
    └── main.js
```

## Documentation du code

### JSDoc

```typescript
/**
 * Service de gestion des véhicules
 * Gère les opérations CRUD pour les véhicules
 */
@Injectable({ providedIn: 'root' })
export class CarService {
  /**
   * Récupère la liste des véhicules
   * @param page - Numéro de page
   * @param limit - Nombre d'éléments par page
   * @param filters - Filtres optionnels
   * @returns Observable de CarsResponse
   */
  getCars(page: number, limit: number, filters?: CarFilters): Observable<CarsResponse> {
    // ...
  }
}
```

## Bonnes pratiques appliquées

1. **Separation of Concerns**: Core / Features / Shared
2. **DRY**: Composants réutilisables
3. **SOLID**: Principes respectés
4. **Reactive Programming**: RxJS et Observables
5. **Type Safety**: TypeScript strict
6. **Modularité**: Components standalone
7. **Clean Code**: Nommage clair et cohérent

---

Cette structure permet une maintenabilité optimale et une scalabilité du projet.