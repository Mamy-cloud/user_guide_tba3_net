// js/fr/admin/navhor.js
creerCarte(
    "Avis & Notes",
    `
    <ol>
        
        <li><h4>Contenu</h4></li>
        
            <ul>

                <li>En-tête</li>
                <li>Liste avis</li>
                 <li>Gestion des avis</li>
                <img src="../../img/fr/admin/fournisseur/avis.png" alt="img_tableau_bord">
            </ul>

        <li><h4>Utilisation</h4></li>
            <ul>

                <li>Aller dans "En-tête" > rechercher le nom d'un utilisateur > le système renseigne automatiquement</li>
                <li>Bouton "nouveau" dans "En-tête" > création d'un nouvel avis</li>
                <li>Bouton "filtre" dans "En-tête" > filtre de recherche d'un nouvel avis</li>
                <li>Bouton "exporter CSV" dans "En-tête" > exporte la liste sous forme de tableau</li>
                <li>Aller dans "Liste avis avec note":
                <ol>
                    <li>scroller le tableau vers la droite</li>
                    <li>Bouton "..." dans "le tableau" > gestion de l'avis</li>
                    <li>Bouton en icône crayon ou en trois point dans "le tableau" > modification de la ligne</li>
                </ol>
                </li>
            </ul>
    </ol>
    `
);