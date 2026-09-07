// Sélection des éléments du DOM
const conteneur = document.getElementById('monConteneur');
const toggleHeader = document.getElementById('toggleHeader');
const symbole = document.getElementById('symbole');

// Ajout d'un écouteur d'événement sur l'en-tête (titre + symbole)
toggleHeader.addEventListener('click', function() {
    // Alterne (ajoute ou enlève) la classe 'expanded'
    conteneur.classList.toggle('expanded');

    // Change le symbole selon l'état du conteneur
    if (conteneur.classList.contains('expanded')) {
        symbole.textContent = "-";
    } else {
        symbole.textContent = "+";
    }
});