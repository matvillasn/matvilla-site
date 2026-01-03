// ========================================
// CONFIGURATION EMAILJS - MATVILLA
// ========================================

const EMAILJS_CONFIG = {
    publicKey: 'uf7IV13n67l8f3ECc',
    serviceID: 'service_wdw70s4',
    templateID: 'template_ghsl29u'
};

// ========================================
// SYSTÈME DE TOAST
// ========================================

function showToast(message, type = 'success') {
    // Créer le toast
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-icon">${type === 'success' ? '✅' : '❌'}</div>
      <div class="toast-message">${message}</div>
    `;

    // Ajouter au body
    document.body.appendChild(toast);

    // Animation d'entrée
    setTimeout(() => toast.classList.add('show'), 100);

    // Retirer après 4 secondes
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ========================================
// INITIALISATION EMAILJS
// ========================================

(function () {
    emailjs.init(EMAILJS_CONFIG.publicKey);
})();

// ========================================
// FONCTION DE SOUMISSION FORMULAIRE
// ========================================

async function soumettreFormulaire(event) {
    event.preventDefault();

    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    // Désactiver le bouton
    submitButton.textContent = 'Envoi en cours...';
    submitButton.disabled = true;

    // Récupérer les données du formulaire
    const experienceField = form.querySelector('[name="experience"]');
    const messageField = form.querySelector('[name="message"]');

    // Si le formulaire a un champ expérience, l'ajouter au message
    let messageComplet = messageField.value;
    if (experienceField && experienceField.value) {
        messageComplet = `Années d'expérience : ${experienceField.value}\n\n${messageField.value}`;
    }

    const formData = {
        type_demande: form.querySelector('[name="type-demande"]')?.value || 'Non spécifié',
        nom: form.querySelector('[name="nom"]').value,
        email: form.querySelector('[name="email"]').value,
        telephone: form.querySelector('[name="telephone"]').value,
        entreprise: form.querySelector('[name="entreprise"]')?.value || 'Non renseigné',
        localisation: form.querySelector('[name="localisation"]')?.value || 'Non renseigné',
        sujet: form.querySelector('[name="sujet"]')?.value || 'Non spécifié',
        message: messageComplet,
        date_reception: new Date().toLocaleString('fr-FR', { 
            dateStyle: 'full', 
            timeStyle: 'short' 
        })
    };

    try {
        // Envoyer via EmailJS
        await emailjs.send(
            EMAILJS_CONFIG.serviceID,
            EMAILJS_CONFIG.templateID,
            formData
        );

        // Toast de succès
        showToast('Votre demande a été envoyée avec succès ! Notre équipe vous contactera rapidement.', 'success');

        // Réinitialiser le formulaire
        form.reset();

    } catch (error) {
        console.error('Erreur EmailJS:', error);

        // Toast d'erreur
        showToast('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.', 'error');

    } finally {
        // Réactiver le bouton
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

// ========================================
// ATTACHER AUX FORMULAIRES
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    // Tous les formulaires avec l'attribut data-matvilla-form
    const forms = document.querySelectorAll('form[data-matvilla-form]');

    forms.forEach(form => {
        form.addEventListener('submit', soumettreFormulaire);
    });

    console.log('✅ EmailJS MATVILLA initialisé -', forms.length, 'formulaire(s) détecté(s)');
});