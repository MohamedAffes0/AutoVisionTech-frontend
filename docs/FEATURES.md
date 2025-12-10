# Fonctionnalités - AutoVisionTech

Documentation complète des fonctionnalités de la plateforme.

## Vue d'ensemble

AutoVisionTech propose trois niveaux d'accès avec des fonctionnalités spécifiques :
- **Visiteurs** : Consultation et réservation
- **Agents** : Gestion des véhicules et réservations
- **Administrateurs** : Gestion complète du système

---

## Fonctionnalités Visiteurs

### 1. Catalogue de véhicules

#### Affichage
- **Grille responsive** de cartes véhicules
- **Images haute qualité** avec image par défaut si absente
- **Informations clés** :
  - Marque et modèle
  - Année de fabrication
  - Kilométrage
  - Prix
  - État (condition)
  - Statut (disponible/réservé/vendu)

#### Navigation
- Clic sur carte → Page détails
- Boutons "View Details" et "Book Now"
- Animation au survol

```typescript
// Exemple d'utilisation
<app-car-crad 
  *ngFor="let car of cars" 
  [car]="car">
</app-car-crad>
```

### 2. Filtres et recherche avancés

#### Recherche textuelle
- Recherche par marque
- Recherche instantanée
- Clear button

#### Filtres de prix
- **Filtres rapides** :
  - Under $20K
  - $20K - $40K
  - $40K - $60K
  - Over $60K

- **Sliders personnalisés** :
  - Prix minimum
  - Prix maximum
  - Double slider avec track visuel

#### Options de tri
- Par défaut
- Prix : Low to High
- Prix : High to Low
- Kilométrage : Low to High
- Kilométrage : High to Low
- Année : Newest First

```typescript
interface SearchFilters {
  searchText?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: SortByType;
}
```

### 3. Page détails véhicule

#### Galerie d'images
- **Image principale** avec zoom
- **Thumbnails** (miniatures)
- **Navigation** :
  - Flèches gauche/droite
  - Clic sur thumbnail
  - Swipe sur mobile

#### Spécifications
- Année
- Kilométrage
- Condition
- Prix (mis en évidence)
- Statut du véhicule

#### Caractéristiques
- Liste des features
- Présentation en grille
- Icons pour chaque feature

### 4. Système de réservation

#### Formulaire
- Nom complet
- Email
- Téléphone
- Date de visite
- Heure de visite

#### Validation
- Champs obligatoires
- Format email
- Date minimale (aujourd'hui)
- Messages d'erreur clairs

#### États
- Formulaire caché par défaut
- Bouton "Schedule Visit"
- Message de succès après soumission
- Gestion des erreurs

```typescript
interface CreateReservationDto {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  visitDate: string;
  visitTime: string;
}
```

### 5. Système de commentaires

#### Affichage
- Liste des commentaires
- Nom du commentateur
- Date de publication
- Contenu du commentaire

#### Ajout de commentaire
- Formulaire simple
- Champs : nom et contenu
- Validation requise
- Feedback immédiat

---

## Fonctionnalités Agents

### 1. Gestion des véhicules

#### Dashboard
- **Statistiques** :
  - Total cars
  - Available
  - Reserved
  - Sold

- **Actions** :
  - Bouton "Add New Car"
  - Toggle formulaire

#### Ajout de véhicule

**Formulaire complet** :
```typescript
interface CreateCarDto {
  brand: string;
  model: string;
  description?: string;
  year: number;
  price: number;
  kilometerAge: number;
  status: string;
  condition: string;
  features?: string[];
  images?: File[];
}
```

**Champs** :
- Marque et modèle
- Description
- Année (validation : 1900 à année + 1)
- Prix
- Kilométrage
- Condition
- Features (ajout dynamique)
- Images (max 5, validation de taille)

#### Upload d'images

**Spécifications** :
- Formats acceptés : JPG, PNG, GIF
- Taille max : 5MB par image
- Maximum : 5 images
- Preview en temps réel
- Suppression individuelle
- Numérotation automatique

```typescript
onImagesSelected(event: Event): void {
  // Validation
  // Conversion en base64
  // Affichage preview
  // Gestion des erreurs
}
```

#### Modification inline

- **Champs modifiables** :
  - Prix
  - Statut (available/reserved/sold)

- **Actions** :
  - Bouton Edit → Mode édition
  - Save → Sauvegarde
  - Cancel → Annulation

#### Suppression
- Confirmation obligatoire
- Message explicite
- Suppression immédiate

### 2. Gestion des réservations

#### Liste des réservations

**Affichage** :
- Carte par réservation
- Image du véhicule
- Informations véhicule
- Détails client
- Date et heure

**Informations affichées** :
- Nom du client
- Email
- Téléphone
- Véhicule réservé
- Date de visite
- Statut

#### Filtres

**Par statut** :
- All Status
- Pending
- Confirmed
- Cancelled

**Par date** :
- Sélecteur de date
- Filtrage dynamique

**Recherche** :
- Par numéro de téléphone
- Recherche instantanée

#### Changement de statut

**Actions disponibles** :
- Confirm → Passe en "confirmed"
- Pending → Passe en "pending"
- Cancel → Passe en "cancelled"

**Interface** :
- Boutons avec états
- Bouton disabled si déjà dans ce statut
- Couleurs distinctes par action

#### Suppression
- Bouton Delete
- Confirmation requise
- Suppression immédiate

### 3. Statistiques

**Métriques affichées** :
- Total des véhicules
- Véhicules disponibles
- Véhicules réservés
- Véhicules vendus
- Total des réservations
- Réservations en attente
- Réservations confirmées
- Réservations annulées

**Mise à jour** :
- Temps réel
- Recalcul automatique
- Animation des changements

---

## Fonctionnalités Administrateurs

### 1. Panel d'administration

#### Vue d'ensemble

**Statistiques** :
- Total Users
- Active Users
- Admins

**Actions** :
- Bouton "Add User"
- Modal de création

#### Gestion des utilisateurs

**Liste des utilisateurs** :
- Photo de profil (ou placeholder)
- Nom
- Email
- Rôle (badge coloré)
- Statut (badge coloré)
- Actions

**Informations affichées** :
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'agent';
  isActive: boolean;
  image: string | null;
  createdAt: string;
}
```

#### Modification inline

**Champs modifiables** :
- Rôle (select : agent/admin)
- Statut (toggle actif/inactif)

**Process** :
1. Clic sur Edit
2. Mode édition activé
3. Modification des champs
4. Save → Sauvegarde
5. Cancel → Annulation

#### Création d'utilisateur

**Modal avec formulaire** :
- Nom complet
- Email
- Mot de passe (min 8 caractères)
- Rôle (agent/admin)

**Validation** :
- Tous les champs requis
- Format email valide
- Mot de passe fort
- Feedback en temps réel

```typescript
interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'agent';
}
```

#### Suppression d'utilisateur

- Confirmation obligatoire
- Message avec nom de l'utilisateur
- Suppression immédiate
- Feedback de succès/erreur

### 2. Badges de rôle

**Admin** :
- Couleur jaune
- Badge : "ADMIN"
- Border jaune

**Agent** :
- Couleur bleue
- Badge : "AGENT"
- Border bleue

### 3. Badges de statut

**Active** :
- Couleur verte
- Badge : "ACTIVE"
- Checkmark icon

**Inactive** :
- Couleur rouge
- Badge : "INACTIVE"
- X icon

---

## Authentification

### 1. Inscription (Sign Up)

#### Formulaire
- Nom complet
- Email
- Mot de passe
- Confirmation mot de passe
- Sélection du rôle (admin/agent)
- Case à cocher T&C

#### Validation
- Nom : 2+ caractères
- Email : format valide
- Mot de passe : 8+ caractères
- Passwords match
- T&C acceptées

#### Rôle UI

**Sélection visuelle** :
- Cards pour chaque rôle
- Icon distinctif
- Description du rôle
- Sélection active stylisée

### 2. Connexion (Sign In)

#### Formulaire
- Email
- Mot de passe
- Remember me (optionnel)

#### Fonctionnalités
- Toggle password visibility
- Forgot password link
- Messages d'erreur clairs
- Redirection après connexion

#### Gestion de session
- Cookie HTTP-only
- Session persistante
- Auto-refresh
- Logout automatique

### 3. Profil utilisateur

#### Informations affichées
- Photo de profil
- Nom
- Email
- Rôle
- Statut du compte
- Date d'inscription

#### Modifications possibles

**Profil** :
- Nom
- Email
- Photo de profil (upload)

**Sécurité** :
- Changement de mot de passe
- Ancien mot de passe requis
- Validation stricte

**Danger Zone** :
- Suppression de compte
- Confirmation "DELETE" requise
- Action irréversible

```typescript
interface UpdateProfileDto {
  name?: string;
  email?: string;
}

interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}
```

---

## Pages statiques

### 1. About Us
- Histoire de l'entreprise
- Statistiques
- Valeurs
- Mission & Vision
- Équipe
- CTA

### 2. Services
- Services principaux
- Services additionnels
- Processus
- Bénéfices
- CTA

### 3. Financing
- Calculateur de financement
- Options de financement
- Bénéfices
- Facteurs influençant
- Requis
- CTA

### 4. Trade-In
- Formulaire d'estimation
- Processus
- Bénéfices
- Facteurs de valeur
- Conseils
- CTA

### 5. FAQ
- Recherche
- Catégories
- Questions/Réponses expandables
- Contact CTA

### 6. Contact
- Formulaire de contact
- Moyens de contact
- Départements
- Carte (placeholder)
- Horaires

### 7. Pages légales
- Privacy Policy
- Terms of Service
- Warranty

**Template réutilisable** :
- Hero section
- Table of contents
- Sections
- Important notice
- Contact CTA

---

## Fonctionnalités UI/UX

### 1. Design System

#### Couleurs
```css
--color-dashboard-dark: #0a0e17
--color-dashboard-secondary: #131820
--color-dashboard-card: #1a1f2e
--color-metallic-blue: #2563eb
--color-neon-green: #10b981
```

#### Glassmorphism
- Backdrop blur
- Semi-transparence
- Borders subtiles
- Shadows avec glow

### 2. Animations

**Entrées** :
- fadeIn
- slideUp
- slideDown
- slideIn

**Interactions** :
- Hover effects
- Click feedback
- Loading states
- Transitions fluides

### 3. Responsive Design

**Breakpoints** :
- Mobile : < 640px
- Tablet : 640px - 1024px
- Desktop : > 1024px

**Adaptations** :
- Menu burger mobile
- Grids flexibles
- Typography responsive
- Touch-friendly

### 4. Feedback utilisateur

**Success** :
- Bannières vertes
- Messages clairs
- Auto-dismiss

**Errors** :
- Bannières rouges
- Animation shake
- Messages détaillés

**Loading** :
- Spinners
- Skeleton screens
- Progress indicators


## Analytics

### Métriques à tracker
- Vues de véhicules
- Réservations créées
- Conversions

---

Cette documentation couvre toutes les fonctionnalités actuelles et potentielles de la plateforme AutoVisionTech.