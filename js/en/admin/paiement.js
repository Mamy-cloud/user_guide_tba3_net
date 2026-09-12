// js/fr/admin/navhor.js
creerCarte(
    "Payments",
    `
    <ol>
        
        <li><h4>Content</h4></li>
        
            <ul>

                <li>Header</li>
                <li>Payment list</li>
                 <li>Payment management</li>
                <img src="../../img/fr/admin/fournisseur/paiement.png" alt="img_tableau_bord">
            </ul>

        <li><h4>Usage</h4></li>
            <ul>

                <li>Go to "Header" > search for a payment > the system fills in automatically</li>
                <li>"New" button in "Header" > create a payment</li>
                <li>"Filter" button in "Header" > payment search filter</li>
                <li>"Export CSV" button in "Header" > exports the list as a table</li>
                <li>Go to "RFQ list":
                <ol>
                    <li>scroll the table to the right</li>
                    <li>"..." button in "the table" > payment management</li>
                    <li>Pencil icon or three-dot button in "the table" > edit the row</li>
                </ol>
                </li>
            </ul>
    </ol>
    `
);