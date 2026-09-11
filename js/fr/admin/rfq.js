// js/fr/admin/navhor.js
creerCarte(
    "Demandes de devis (RFQ)",
    `
    <ol>
        
        <li><h4>Contenu</h4></li>
        
            <ul>

                <li>En-tête</li>
                <li>Liste demande RFQ</li>
                 <li>Gestion des RFQ</li>
                <img src="../../img/fr/admin/fournisseur/rfq.png" alt="img_tableau_bord">
            </ul>

        <li><h4>Utilisation</h4></li>
            <ul>

                <li>Aller dans "En-tête" > rechercher une demande rfq > le système renseigne automatiquement</li>
                <li>Bouton "nouveau" dans "En-tête" > création d'une nouvelle demande</li>
                <li>Bouton "filtre" dans "En-tête" > filtre de recherche d'une demande</li>
                <li>Bouton "exporter CSV" dans "En-tête" > exporte la liste sous forme de tableau</li>
                <li>Aller dans "Liste RFQ":
                <ol>
                    <li>scroller le tableau vers la droite</li>
                    <li>Bouton "..." dans "le tableau" > gestion des demandes de devis RFQ</li>
                    <li>Bouton en icône crayon ou en trois point dans "le tableau" > modification de la ligne</li>
                </ol>
                </li>
            </ul>
    </ol>
    `
);