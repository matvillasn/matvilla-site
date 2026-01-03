# Matvilla - Site Web BTP & Peinture LUMINA

Site web professionnel multi-pages pour Matvilla, entreprise BTP spécialisée dans les matériaux de construction et la peinture LUMINA à Dakar, Sénégal.

## 🎨 Caractéristiques

- ✅ **Design moderne et professionnel** inspiré des meilleures pratiques
- ✅ **100% Responsive** (Mobile, Tablette, Desktop)
- ✅ **5 pages complètes** avec navigation fluide
- ✅ **Animations subtiles** au scroll et au hover
- ✅ **SEO optimisé** avec meta tags appropriés
- ✅ **Performance optimale** avec lazy loading
- ✅ **Code propre et documenté** facile à maintenir

## 📁 Structure du Projet

```
matvilla/
├── index.html              # Page d'accueil
├── produits.html           # Gamme LUMINA (3 produits)
├── services.html           # 6 catégories BTP
├── espace-pro.html         # Club Maître LUMINA
├── contact.html            # Contact & Où acheter
│
├── css/
│   ├── variables.css       # Couleurs, spacings, breakpoints
│   ├── reset.css           # Normalisation navigateurs
│   ├── layout.css          # Structure générale, grids
│   ├── components.css      # Composants réutilisables
│   └── animations.css      # Toutes les animations
│
├── js/
│   └── main.js             # Interactivité complète
│
└── assets/
    ├── logo-matvilla.png
    ├── logo-matvilla-white.png
    ├── favicon.png
    ├── hero-background.jpg
    ├── products/           # Images produits LUMINA
    ├── categories/         # Images catégories services
    └── services/           # Images détails services
```

## 🚀 Installation Rapide

1. **Cloner ou télécharger** le projet
2. **Créer le dossier `assets/`** avec les sous-dossiers
3. **Ajouter vos images** dans les dossiers appropriés
4. **Ouvrir `index.html`** dans un navigateur

Aucune dépendance npm requise ! HTML/CSS/JS pur.

## 🎨 Personnalisation

### 1. Couleurs de la marque

Modifier dans `css/variables.css` :

```css
:root {
  --orange-primary: #FF6B35;  /* Couleur orange Matvilla */
  --blue-primary: #0066B3;    /* Couleur bleue Matvilla */
  --orange-light: #FF8C61;
  --blue-light: #3399CC;
}
```

### 2. Typographie

Changer les polices dans `<head>` de chaque page HTML et dans `variables.css` :

```css
--font-primary: 'Poppins', sans-serif;     /* Titres */
--font-secondary: 'Inter', sans-serif;      /* Corps de texte */
```

### 3. Coordonnées de contact

**À remplacer dans TOUS les fichiers HTML :**

- `+221 XX XXX XX XX` → Votre numéro de téléphone
- `+221XXXXXXXXX` → Numéro WhatsApp (sans espaces)
- `contact@matvilla.com` → Votre email
- `123 Avenue Example, Dakar` → Votre adresse
- Liens réseaux sociaux (Facebook, Instagram, LinkedIn)

**Fichiers concernés :**
- index.html
- produits.html
- services.html
- espace-pro.html
- contact.html

### 4. Google Maps

Dans `contact.html`, remplacer l'iframe de la carte :

```html
<iframe 
  src="VOTRE_URL_GOOGLE_MAPS_EMBED"
  width="100%" 
  height="450">
</iframe>
```

**Comment obtenir l'URL :**
1. Aller sur Google Maps
2. Chercher votre adresse
3. Cliquer sur "Partager" → "Intégrer une carte"
4. Copier le code iframe

### 5. Images

**Images requises :**

```
assets/
├── logo-matvilla.png              (Format PNG, fond transparent, ~200x60px)
├── logo-matvilla-white.png        (Version blanche pour footer)
├── favicon.png                     (32x32px ou 64x64px)
├── hero-background.jpg             (1920x1080px minimum)
│
├── products/
│   ├── lumina-fachadas.jpg         (600x600px)
│   ├── lumina-satinado.jpg
│   ├── lumina-mate.jpg
│   ├── lumina-fachadas-thumb.jpg   (400x400px)
│   ├── lumina-satinado-thumb.jpg
│   └── lumina-mate-thumb.jpg
│
├── categories/
│   ├── electricite.jpg             (800x600px)
│   ├── peinture.jpg
│   ├── plomberie.jpg
│   ├── brique.jpg
│   ├── carrelage.jpg
│   └── plafonnage.jpg
│
└── services/
    ├── electricite-large.jpg       (1200x800px)
    ├── peinture-large.jpg
    ├── plomberie-large.jpg
    ├── brique-large.jpg
    ├── carrelage-large.jpg
    └── plafonnage-large.jpg
```

**Optimisation recommandée :**
- Format : JPG pour photos, PNG pour logos
- Compression : TinyPNG ou ImageOptim
- Taille max : 500KB par image

### 6. Contenu textuel

**À personnaliser :**

1. **Page d'accueil** (`index.html`) :
   - Section Mission
   - Stats (années d'expérience, projets, artisans)

2. **Page Produits** (`produits.html`) :
   - Descriptions détaillées LUMINA
   - Liste des outils disponibles

3. **Page Services** (`services.html`) :
   - Descriptions de chaque service
   - Listes de prestations

4. **Page Espace Pro** (`espace-pro.html`) :
   - Témoignages clients (remplacer les exemples)
   - Avantages du club

5. **Page Contact** (`contact.html`) :
   - Horaires d'ouverture
   - Liste des points de vente
   - FAQ

## ⚙️ Fonctionnalités JavaScript

### Header transparent au scroll
Le header devient solide après 100px de scroll (uniquement sur l'accueil).

### Menu mobile
Navigation responsive avec hamburger menu sur mobile.

### Animations au scroll
Éléments avec classe `.scroll-animate` s'animent quand visibles.

### Compteurs animés
Les chiffres avec classe `.counter` et attribut `data-count` s'animent.

### Formulaires
Validation basique et simulation d'envoi (à connecter avec backend).

## 📱 Responsive Breakpoints

```css
/* Mobile */
max-width: 768px

/* Tablet */
768px - 1024px

/* Desktop */
min-width: 1024px
```

## 🔧 Intégration Backend (Formulaires)

Actuellement, les formulaires sont simulés. Pour les connecter :

### Option 1 : EmailJS (Gratuit, facile)
```javascript
// Dans main.js, remplacer la partie simulation par :
emailjs.send("service_id", "template_id", formData)
  .then(() => {
    // Success
  });
```

### Option 2 : API PHP personnalisée
Créer `send-email.php` et envoyer avec fetch().

### Option 3 : Service tiers
- Formspree
- Netlify Forms
- Google Forms

## 🎯 SEO - À faire

1. **Meta descriptions** : Personnaliser dans chaque page
2. **Titles** : Optimiser avec mots-clés locaux
3. **Alt text images** : Ajouter descriptions pertinentes
4. **Schema.org** : Ajouter markup LocalBusiness
5. **Sitemap.xml** : Générer et soumettre à Google

## 📊 Analytics

Ajouter Google Analytics dans `<head>` de chaque page :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Déploiement

### Hébergement recommandé :
- **Netlify** (Gratuit, facile, HTTPS auto)
- **Vercel** (Gratuit, performant)
- **GitHub Pages** (Gratuit)
- **OVH / O2Switch** (Payant, français)

### Étapes Netlify :
1. Créer un compte sur netlify.com
2. Drag & drop le dossier `matvilla/`
3. Configurer le domaine `matvilla.com`
4. HTTPS automatique ✅

## 📞 Support Technique

Pour toute question sur le code ou personnalisation :
- Utiliser Cursor AI pour modifications
- Structure modulaire = facile à modifier
- Code commenté pour comprendre chaque partie

## ✅ Checklist Avant Mise en Ligne

- [ ] Remplacer TOUTES les images placeholder
- [ ] Mettre à jour tous les numéros de téléphone
- [ ] Configurer les emails de contact
- [ ] Ajouter les liens réseaux sociaux
- [ ] Personnaliser tous les textes
- [ ] Tester sur mobile, tablette, desktop
- [ ] Vérifier tous les liens internes
- [ ] Optimiser les images (compression)
- [ ] Configurer Google Analytics
- [ ] Intégrer les formulaires avec backend
- [ ] Ajouter la carte Google Maps
- [ ] Tester la vitesse (PageSpeed Insights)
- [ ] Vérifier le SEO (meta tags, titles)

## 🎨 Palette Couleurs Matvilla

```
Orange Principal : #FF6B35
Bleu Principal   : #0066B3
Orange Clair     : #FF8C61
Bleu Clair       : #3399CC
Gris Foncé       : #2C3E50
Gris             : #7F8C8D
Gris Clair       : #ECF0F1
Blanc            : #FFFFFF
```

## 📝 Licence

Propriété de Matvilla © 2024. Tous droits réservés.

---

**Développé avec ❤️ pour Matvilla - De la fondation à la finition**
```

---
