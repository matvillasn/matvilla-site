// JavaScript pour MatVilla

/* ================================
   MATVILLA - JavaScript Principal
   Interactivité et animations
   ================================ */

// === VARIABLES GLOBALES ===
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

// === HEADER AU SCROLL ===
function handleScroll() {
  if (window.scrollY > 100) {
    header.classList.remove('transparent');
  } else {
    // Seulement sur la page d'accueil avec hero
    if (document.querySelector('.hero')) {
      header.classList.add('transparent');
    }
  }
}

// Écouter le scroll
window.addEventListener('scroll', handleScroll);

// Initialiser au chargement
window.addEventListener('load', handleScroll);

// === MENU MOBILE ===
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('nav-open');
  });

  // Fermer le menu en cliquant sur un lien
  const navLinks = nav.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('nav-open');
    });
  });

  // Fermer le menu en cliquant à l'extérieur
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('nav-open');
    }
  });
}

// === ANIMATIONS AU SCROLL ===
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.scroll-animate');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // Déclencher l'animation quand l'élément est visible
    if (elementTop < windowHeight - 100) {
      element.classList.add('is-visible');
    }
  });
}

// Écouter le scroll pour animations
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// === COMPTEURS ANIMÉS ===
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'));
  const duration = 2000; // 2 secondes
  const increment = target / (duration / 16); // 60 FPS
  let current = 0;
  
  element.classList.add('counting');
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Observer pour les compteurs
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counting')) {
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

// Observer tous les compteurs
document.querySelectorAll('.counter').forEach(counter => {
  counterObserver.observe(counter);
});

// === SMOOTH SCROLL POUR ANCRES ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Ignorer les liens vides
    if (href === '#') {
      e.preventDefault();
      return;
    }
    
    const target = document.querySelector(href);
    
    if (target) {
      e.preventDefault();
      
      // Calculer la position avec offset pour le header
      const headerHeight = header.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// === VALIDATION EN TEMPS RÉEL ===
const inputs = document.querySelectorAll('.form-input, .form-textarea, .form-select');
inputs.forEach(input => {
  input.addEventListener('blur', () => {
    if (input.hasAttribute('required') && !input.value.trim()) {
      input.style.borderColor = '#E74C3C';
    } else {
      input.style.borderColor = '';
    }
  });
  
  input.addEventListener('input', () => {
    if (input.style.borderColor === 'rgb(231, 76, 60)') {
      input.style.borderColor = '';
    }
  });
});

// === PROGRESS BAR (si utilisé) ===
const progressBars = document.querySelectorAll('.progress-fill');
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
  progressObserver.observe(bar);
});

// === ACTIVE LINK NAVIGATION ===
function updateActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

// Mettre à jour au chargement
updateActiveLink();

// === LAZY LOADING IMAGES ===
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// === DÉTECTION MOBILE ===
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
  document.body.classList.add('is-mobile');
}

// === MESSAGES CONSOLE ===
console.log('%cMatvilla - Site Web', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
console.log('%cDe la fondation à la finition', 'color: #0066B3; font-size: 14px;');
console.log('%cDéveloppé avec ❤️ pour Matvilla', 'color: #7F8C8D; font-size: 12px;');

// === EXPORT POUR DEBUGGING ===
window.MatvillaDebug = {
  version: '1.0.0',
  scrollPosition: () => window.scrollY,
  isMobile: isMobile,
  headerTransparent: () => header.classList.contains('transparent')
};

// === PRÉ-REMPLISSAGE FORMULAIRE CONTACT DEPUIS URL ===
(function() {
  // Récupérer les paramètres de l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const service = urlParams.get('service');
  
  // Si on est sur la page contact et qu'il y a un paramètre service
  if (service && document.getElementById('objetDemande')) {
    const selectElement = document.getElementById('objetDemande');
    
    // Mapper les services vers les valeurs du select
    const serviceMapping = {
      'electricite': 'electricite',
      'peinture': 'peinture',
      'plomberie': 'plomberie',
      'brique': 'brique',
      'carrelage': 'carrelage',
      'plafonnage': 'plafonnage'
    };
    
    // Si le service existe dans le mapping
    if (serviceMapping[service]) {
      selectElement.value = serviceMapping[service];
      
      // Optionnel : Faire défiler jusqu'au formulaire
      setTimeout(() => {
        const form = document.getElementById('contactForm');
        if (form) {
          form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
      
      // Optionnel : Ajouter une classe pour highlight visuel
      selectElement.classList.add('highlight-field');
      setTimeout(() => {
        selectElement.classList.remove('highlight-field');
      }, 2000);
    }
  }
})();

// === PRÉ-SÉLECTIONNER "DEMANDE DE DEVIS" AU CLIC ===
function preselectDevis(event) {
  const selectElement = document.getElementById('objetDemande');
  if (selectElement) {
    selectElement.value = 'devis';  // ← Change en 'devis' au lieu de 'electricite'
    
    // Highlight visuel
    selectElement.classList.add('highlight-field');
    setTimeout(() => {
      selectElement.classList.remove('highlight-field');
    }, 2000);
  }
}

// === PRÉ-SÉLECTIONNER "DEVENIR DISTRIBUTEUR" AU CLIC ===
function preselectDistributeur(event) {
  const selectElement = document.getElementById('objetDemande');
  if (selectElement) {
    selectElement.value = 'distributeur';  // ← Pré-sélectionne "Devenir distributeur"
    
    // Highlight visuel
    selectElement.classList.add('highlight-field');
    setTimeout(() => {
      selectElement.classList.remove('highlight-field');
    }, 2000);
  }
}