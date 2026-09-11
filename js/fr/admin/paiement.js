// js/fr/admin/navhor.js
creerCarte(
    "Paiements",
    `
    <ol>
        
        <li><h4>Contenu</h4></li>
        
            <ul>

                <li>En-tête</li>
                <li>Liste des paiements</li>
                 <li>Gestion des paiements</li>
                <img src="../../img/fr/admin/fournisseur/paiement.png" alt="img_tableau_bord">
            </ul>

        <li><h4>Utilisation</h4></li>
            <ul>

                <li>Aller dans "En-tête" > rechercher un paiement > le système renseigne automatiquement</li>
                <li>Bouton "nouveau" dans "En-tête" > création d'un paiement</li>
                <li>Bouton "filtre" dans "En-tête" > filtre de recherche d'un paiement</li>
                <li>Bouton "exporter CSV" dans "En-tête" > exporte la liste sous forme de tableau</li>
                <li>Aller dans "Liste RFQ":
                <ol>
                    <li>scroller le tableau vers la droite</li>
                    <li>Bouton "..." dans "le tableau" > gestion des paiements</li>
                    <li>Bouton en icône crayon ou en trois point dans "le tableau" > modification de la ligne</li>
                </ol>
                </li>
            </ul>
    </ol>
    `
);