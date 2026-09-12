// js/fr/admin/navhor.js
creerCarte(
    "Reviews & Ratings",
    `
    <ol>
        
        <li><h4>Content</h4></li>
        
            <ul>

                <li>Header</li>
                <li>Review list</li>
                 <li>Review management</li>
                <img src="../../img/fr/admin/fournisseur/avis.png" alt="img_tableau_bord">
            </ul>

        <li><h4>Usage</h4></li>
            <ul>

                <li>Go to "Header" > search for a user name > the system fills in automatically</li>
                <li>"New" button in "Header" > create a new review</li>
                <li>"Filter" button in "Header" > new review search filter</li>
                <li>"Export CSV" button in "Header" > exports the list as a table</li>
                <li>Go to "Review list with rating":
                <ol>
                    <li>scroll the table to the right</li>
                    <li>"..." button in "the table" > review management</li>
                    <li>Pencil icon or three-dot button in "the table" > edit the row</li>
                </ol>
                </li>
            </ul>
    </ol>
    `
);