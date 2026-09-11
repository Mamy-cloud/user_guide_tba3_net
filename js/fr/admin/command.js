// js/fr/admin/navhor.js
creerCarte(
    "Commandes",
    `
    <ol>
        
        <li><h4>Contenu</h4></li>
        
            <ul>

                <li>En-tête</li>
                <li>Liste commande</li>
                 <li>Gestion des commandes</li>
                <img src="../../img/fr/admin/fournisseur/commande.png" alt="img_tableau_bord">
            </ul>

        <li><h4>Utilisation</h4></li>
            <ul>

                <li>Aller dans "En-tête" > rechercher une commande > le système renseigne automatiquement</li>
                <li>Bouton "nouveau" dans "En-tête" > création d'une nouvelle commande</li>
                <li>Bouton "filtre" dans "En-tête" > filtre de recherche d'une commande</li>
                <li>Bouton "exporter CSV" dans "En-tête" > exporte la liste sous forme de tableau</li>
                <li>Aller dans "Liste commande":
                <ol>
                    <li>scroller le tableau vers la droite</li>
                    <li>Bouton "..." dans "le tableau" > gestion des commandes</li>
                    <li>Bouton en icône crayon ou en trois point dans "le tableau" > modification de la ligne</li>
                </ol>
                </li>
            </ul>
    </ol>
    `
);