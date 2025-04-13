document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const toggleIcon = document.querySelector(".bi-sun"); // Sélectionner l'icône soleil
    const body = document.body;

    const offset = 56; // Hauteur du menu fixe (offset commun)

    // Détecter le style préféré de l'utilisateur
    const prefersLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;

    // Appliquer le style préféré au chargement de la page
    if (prefersLightMode) {
        body.classList.add("light-mode");
        toggleIcon.classList.remove("bi-sun");
        toggleIcon.classList.add("bi-moon");
        toggleIcon.style.color = "#000000"; // Lune en noir
    } else {
        body.classList.remove("light-mode");
        toggleIcon.classList.remove("bi-moon");
        toggleIcon.classList.add("bi-sun");
        toggleIcon.style.color = "#ffffff"; // Soleil en blanc
    }

    // Fonction pour détecter la section active
    function setActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + offset < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        if (index >= 0) {
            navLinks[index].classList.add("active");
        }
    }

    // Ajouter un écouteur d'événement pour le défilement
    window.addEventListener("scroll", setActiveLink);

    // Ajouter un événement de clic à chaque lien
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Empêcher le comportement par défaut du lien
            const targetId = this.getAttribute('href').substring(1); // Récupérer l'ID de la section cible
            const targetSection = document.getElementById(targetId); // Trouver la section correspondante

            // Calculer la position avec un décalage
            const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            // Faire défiler vers la position ajustée
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Défilement fluide
            });
        });
    });

    // Ajouter un événement de clic sur l'icône
    toggleIcon.addEventListener("click", function () {
        body.classList.toggle("light-mode"); // Basculer la classe "light-mode" sur le body

        // Basculer entre les icônes soleil et lune
        if (body.classList.contains("light-mode")) {
            toggleIcon.classList.remove("bi-sun");
            toggleIcon.classList.add("bi-moon");
            toggleIcon.style.color = "#000000"; // Lune en noir
        } else {
            toggleIcon.classList.remove("bi-moon");
            toggleIcon.classList.add("bi-sun");
            toggleIcon.style.color = "#ffffff"; // Soleil en blanc
        }
    });
});