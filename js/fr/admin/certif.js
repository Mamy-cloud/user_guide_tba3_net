// js/fr/admin/navhor.js
creerCarte(
    "cerfitication société",
    `
    <ol>
        
        <li><h4>Contenu</h4></li>
        
            <ul>

                <li>En-tête</li>
                <li>Liste société à certifier</li>
                 <li>Gestion certificat</li>
                <img src="../../img/fr/admin/fournisseur/certif.png" alt="img_tableau_bord">
            </ul>

        <li><h4>Utilisation</h4></li>
            <ul>

                <li>Aller dans "En-tête" > rechercher le nom d'un fournisseur > le système renseigne automatiquement</li>
                <li>Bouton "nouveau" dans "En-tête" > création d'un nouveau certificat</li>
                <li>Bouton "filtre" dans "En-tête" > filtre de recherche d'un certificat</li>
                <li>Bouton "exporter CSV" dans "En-tête" > exporte la liste sous forme de tableau</li>
                <li>Aller dans "Liste fournisseur avec leur certificat":
                <ol>
                    <li>scroller le tableau vers la droite</li>
                    <li>Bouton "..." dans "le tableau" > gestion du compte</li>
                    <li>Bouton en icône crayon ou en trois point dans "le tableau" > modification du compte</li>
                </ol>
                </li>
            </ul>
    </ol>
    `
);