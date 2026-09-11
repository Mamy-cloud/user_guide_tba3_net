// js/fr/admin/navhor.js
creerCarte(
    "Produits",
    `
    <ol>
        
        <li><h4>Contenu</h4></li>
        
            <ul>

                <li>En-tête</li>
                <li>Liste produit</li>
                 <li>Gestion produit</li>
                <img src="../../img/fr/admin/fournisseur/product.png" alt="img_tableau_bord">
            </ul>

        <li><h4>Utilisation</h4></li>
            <ul>

                <li>Aller dans "En-tête" > rechercher le nom d'un produit > le système renseigne automatiquement</li>
                <li>Bouton "nouveau" dans "En-tête" > création d'un nouveau produit</li>
                <li>Bouton "filtre" dans "En-tête" > filtre de recherche d'un produit</li>
                <li>Bouton "exporter CSV" dans "En-tête" > exporte la liste sous forme de tableau</li>
                <li>Aller dans "Liste produit":
                <ol>
                    <li>scroller le tableau vers la droite</li>
                    <li>Bouton "..." dans "le tableau" > gestion du compte</li>
                    <li>Bouton en icône crayon ou en trois point dans "le tableau" > modification de la ligne</li>
                </ol>
                </li>
            </ul>
    </ol>
    `
);