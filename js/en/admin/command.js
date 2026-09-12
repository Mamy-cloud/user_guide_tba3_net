// js/fr/admin/navhor.js
creerCarte(
    "Orders",
    `
    <ol>
        
        <li><h4>Content</h4></li>
        
            <ul>

                <li>Header</li>
                <li>Order list</li>
                 <li>Order management</li>
                <img src="../../img/fr/admin/fournisseur/commande.png" alt="img_tableau_bord">
            </ul>

        <li><h4>Usage</h4></li>
            <ul>

                <li>Go to "Header" > search for an order > the system fills in automatically</li>
                <li>"New" button in "Header" > create a new order</li>
                <li>"Filter" button in "Header" > order search filter</li>
                <li>"Export CSV" button in "Header" > exports the list as a table</li>
                <li>Go to "Order list":
                <ol>
                    <li>scroll the table to the right</li>
                    <li>"..." button in "the table" > order management</li>
                    <li>Pencil icon or three-dot button in "the table" > edit the row</li>
                </ol>
                </li>
            </ul>
    </ol>
    `
);