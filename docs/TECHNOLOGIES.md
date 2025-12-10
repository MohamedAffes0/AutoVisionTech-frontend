# Technologies - AutoVisionTech

## Stack technique complet

## Frontend Core

### Angular 19.1.5
**Framework principal**

- **Version**: 19.1.5 (Latest)
- **Architecture**: Standalone Components
- **Features utilisées**:
  - Signals pour la réactivité
  - Server-Side Rendering (SSR)
  - Zoneless Change Detection
  - Event Replay pour l'hydratation
  - Reactive Forms

**Pourquoi Angular ?**
- Framework complet et structuré
- TypeScript natif
- Performance optimale
- SSR intégré
- Large écosystème

### TypeScript 5.7.2
**Langage de programmation**

- Type safety strict
- Interfaces et types personnalisés
- Decorators pour les métadonnées
- Compilation optimisée

```typescript
// Exemple de typage strict
interface Car {
  id: string;
  brand: string;
  model: string;
  price: number;
  status: 'available' | 'reserved' | 'sold';
}
```

## Styling & UI

### TailwindCSS 3.4.17
**Framework CSS utilitaire**

**Configuration**:
```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'dashboard-dark': '#0a0e17',
        'dashboard-secondary': '#131820',
        'dashboard-card': '#1a1f2e'
      }
    }
  }
}
```

**Avantages**:
- Utility-first CSS
- Purge automatique du CSS inutilisé
- Responsive design simplifié
- Dark mode natif
- Personnalisation complète

### CSS Custom Properties
**Variables CSS**

```css
:root {
  --color-dashboard-dark: #0a0e17;
  --color-metallic-blue: #2563eb;
  --shadow-glow-blue: 0 0 30px rgba(37, 99, 235, 0.4);
  --border-radius: 1.5rem;
}
```

**Design System**:
- Glassmorphism effects
- Gradients personnalisés
- Animations fluides
- Shadows avec glow effects

## Authentification

### Better Auth 1.1.5
**Système d'authentification**

**Features**:
- Email/Password authentication
- Session management
- Cookie-based auth
- CSRF protection
- Secure by default

```typescript
// auth-client.ts
export const authClient = createAuthClient({
  baseURL: "http://localhost:3000"
});

// Utilisation
await authClient.signIn.email({ 
  email, 
  password 
});
```

**Configuration**:
- Cookies HTTP-only
- Sessions sécurisées
- Gestion automatique des tokens
- Support SSR

## HTTP & API

### HttpClient (Angular)
**Client HTTP natif**

```typescript
// Service example
@Injectable({ providedIn: 'root' })
export class CarService {
  constructor(private http: HttpClient) {}
  
  getCars(): Observable<CarsResponse> {
    return this.http.get<CarsResponse>(`${this.apiUrl}/cars`, {
      withCredentials: true
    });
  }
}
```

**Features utilisées**:
- Interceptors
- Error handling
- Retry logic
- Loading states
- Credentials management

## State Management

### RxJS 7.8.1
**Programmation réactive**

```typescript
// Observable patterns
private userSubject = new BehaviorSubject<User | null>(null);
public user$ = this.userSubject.asObservable();

// Utilisation
this.authService.user$
  .pipe(
    filter(user => user !== null),
    map(user => user.role)
  )
  .subscribe(role => {
    console.log('User role:', role);
  });
```

**Operators utilisés**:
- `map`, `filter`, `tap`
- `switchMap`, `mergeMap`
- `catchError`, `retry`
- `shareReplay`, `distinctUntilChanged`

### Angular Signals
**Réactivité moderne**

```typescript
// Signals usage
protected showForm = signal(false);
protected formData = signal({ name: '', email: '' });

// Dans le template
@if (showForm()) {
  <form>...</form>
}
```

## Server-Side Rendering

### Angular Universal
**SSR & Pre-rendering**

**Configuration**:
```typescript
// app.config.server.ts
export const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ]
};
```

**Bénéfices**:
- SEO optimisé
- First paint rapide
- Performance améliorée
- Hydratation progressive

### Express.js
**Serveur Node.js**

```typescript
// server.ts
const app = express();
const angularApp = new AngularNodeAppEngine();

app.use(express.static(browserDistFolder));
app.use((req, res, next) => {
  angularApp.handle(req)
    .then(response => writeResponseToNodeResponse(response, res))
    .catch(next);
});
```

## Forms & Validation

### Reactive Forms (Angular)
**Gestion des formulaires**

```typescript
// FormsModule integration
import { FormsModule } from '@angular/forms';

// Two-way binding
[(ngModel)]="formData.email"

// Validation
isFormValid(): boolean {
  return !!(
    this.form.name.trim() &&
    this.isValidEmail(this.form.email)
  );
}
```

**Features**:
- Validation en temps réel
- Messages d'erreur dynamiques
- Pattern validation
- Custom validators

## Animations

### CSS Animations
**Animations personnalisées**

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out both;
}
```

**Bibliothèque d'animations**:
- `fadeIn`, `fadeOut`
- `slideUp`, `slideDown`
- `slideIn`, `slideOut`
- `shake`, `spin`
- `glow-pulse`

## Build Tools

### Angular CLI
**Outil de développement**

```json
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch",
    "test": "ng test"
  }
}
```

### Vite (via Angular)
**Build tool moderne**

- Hot Module Replacement (HMR)
- Build rapide
- Optimisations automatiques
- Tree-shaking

## Package Manager

### npm
**Gestionnaire de paquets**

**Dépendances principales**:
```json
{
  "@angular/animations": "^19.1.5",
  "@angular/common": "^19.1.5",
  "@angular/core": "^19.1.5",
  "@angular/forms": "^19.1.5",
  "@angular/platform-browser": "^19.1.5",
  "@angular/router": "^19.1.5",
  "@angular/ssr": "^19.1.5",
  "better-auth": "^1.1.5",
  "rxjs": "~7.8.1",
  "tailwindcss": "^3.4.17",
  "tslib": "^2.8.1"
}
```

## Testing

### Jasmine & Karma
**Framework de tests**

```typescript
describe('CarService', () => {
  it('should fetch cars', (done) => {
    service.getCars().subscribe(response => {
      expect(response.items).toBeDefined();
      done();
    });
  });
});
```

### Configuration
```javascript
// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    browsers: ['Chrome']
  });
};
```

## Development Tools

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "esModuleInterop": true
  }
}
```

### ESLint
**Linting**

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@angular-eslint/recommended"
  ]
}
```

## Assets & Media

### Image Handling
- Lazy loading natif
- Responsive images
- Optimisation automatique
- Multiple formats support

### Fonts
- System fonts prioritaires
- Fallback cascade
- Performance optimale

```css
font-family: -apple-system, BlinkMacSystemFont, 
             'Segoe UI', 'Roboto', 'Inter', sans-serif;
```

## Performance Monitoring

### Built-in Angular Tools
- Change detection profiler
- Bundle analyzer
- Lighthouse integration
- Performance budgets

```json
// angular.json
"budgets": [
  {
    "type": "initial",
    "maximumWarning": "500kb",
    "maximumError": "1mb"
  }
]
```

## SEO & Meta

### Angular Meta Service
```typescript
import { Meta, Title } from '@angular/platform-browser';

constructor(
  private meta: Meta,
  private title: Title
) {
  this.title.setTitle('AutoVisionTech - Premium Cars');
  this.meta.addTags([
    { name: 'description', content: '...' },
    { property: 'og:title', content: '...' }
  ]);
}
```

## API Communication

### REST API Architecture
```
GET    /api/cars              → Liste des voitures
GET    /api/cars/:id          → Détails d'une voiture
POST   /api/cars              → Créer une voiture
PATCH  /api/cars/:id          → Modifier une voiture
DELETE /api/cars/:id          → Supprimer une voiture
```

### Error Handling
```typescript
catchError((error: HttpErrorResponse) => {
  if (error.status === 401) {
    // Redirect to login
  } else if (error.status === 404) {
    // Show not found
  }
  return throwError(() => error);
})
```

## Security

### Measures implémentées
- XSS Protection (Angular sanitization)
- CSRF Tokens (Better Auth)
- HTTP-only cookies
- Secure headers
- Input validation
- Rate limiting (backend)

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline'">
```

## Responsive Design

### Breakpoints
```typescript
// TailwindCSS breakpoints
sm:  640px   // Tablet portrait
md:  768px   // Tablet landscape
lg:  1024px  // Desktop
xl:  1280px  // Large desktop
2xl: 1536px  // Extra large
```

### Mobile-First Approach
- Base styles pour mobile
- Progressive enhancement
- Touch-friendly interfaces
- Optimized mobile navigation

## Production Optimizations

### Build Optimizations
- Ahead-of-Time (AOT) compilation
- Tree-shaking
- Minification
- Dead code elimination
- Bundle splitting
- Lazy loading

### Runtime Optimizations
- OnPush change detection
- Virtual scrolling (si nécessaire)
- Memoization
- Image lazy loading
- Route preloading

## Documentation Tools

### TSDoc
```typescript
/**
 * Récupère les voitures avec pagination
 * @param page - Numéro de la page
 * @param limit - Nombre d'éléments par page
 * @returns Observable contenant la réponse paginée
 */
getCars(page: number, limit: number): Observable<CarsResponse>
```

### Compodoc (recommandé)
```bash
npm install -g @compodoc/compodoc
compodoc -p tsconfig.json
```

## Version Control

### Git
- Semantic commits
- Feature branches
- Pull requests
- Code reviews

---

Stack moderne et performant assurant maintenabilité et scalabilité du projet.