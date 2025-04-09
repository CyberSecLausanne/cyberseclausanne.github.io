document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner tous les liens de navigation
    const navLinks = document.querySelectorAll('.nav-link');

    // Ajouter un événement de clic à chaque lien
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Empêcher le comportement par défaut du lien
            const targetId = this.getAttribute('href').substring(1); // Récupérer l'ID de la section cible
            const targetSection = document.getElementById(targetId); // Trouver la section correspondante

            // Calculer la position avec un décalage
            const offset = 56; // Hauteur du menu fixe
            const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            // Faire défiler vers la position ajustée
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Défilement fluide
            });
        });
    });
});