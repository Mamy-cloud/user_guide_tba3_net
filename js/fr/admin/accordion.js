// js/fr/admin/accordion.js
function creerCarte(titreTexte, contenuHtml) {
    const parentContainer = document.getElementById('app-container');
    if (!parentContainer) return;

    const section = document.createElement('section');
    const card = document.createElement('div');
    card.classList.add('card');

    const header = document.createElement('div');
    header.classList.add('card-header');

    const h3 = document.createElement('h3');
    h3.textContent = titreTexte;

    const symbol = document.createElement('span');
    symbol.classList.add('symbol');
    symbol.textContent = '+';

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContent.innerHTML = contenuHtml;

    header.appendChild(h3);
    header.appendChild(symbol);
    card.appendChild(header);
    card.appendChild(cardContent);
    section.appendChild(card);
    parentContainer.appendChild(section);

    header.addEventListener('click', () => {
        card.classList.toggle('expanded');
        if (card.classList.contains('expanded')) {
            symbol.textContent = "-";
        } else {
            symbol.textContent = "+";
        }
    });
}