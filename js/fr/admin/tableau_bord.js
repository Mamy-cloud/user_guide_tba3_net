creerCarte(
    "Tableau de bord",
    `
    <p>Voici les éléments du tableau de bord.</p>
    <ol>
        <li><h4>A traiter maintenant :</h4></li>
        
        <ul>
            <h5>Ce sont les tâches à vérifier et traiter en priorité :</h5>
            <li>Produit à valider</li>
            <p>Il permet de vérifier le statut d'un produit : "Actif" ou "À valider".</p>

            <li>Litiges ouverts :</li>
            <p>Il permet de voir les réclamations. Redirection vers la page support et réclamation.</p>

            <li>Modération :</li>
            <p>Redirection vers la page des signalements effectués.</p>

            <img src="../../img/fr/admin/traiter_maintenant.png" alt="img_tableau_bord" style="width: 70%;
            border: 2px solid black; border-radius: 8px; padding: 5px;">
            
        </ul>
        
        
        

    
        <li><h4>Accès rapide :</h4></li>
        
            <ul>
                <h5>Liste des raccourcis :</h5>
                
                <li>Produit</li>
                <p>Redirection vers la page produits.</p>

                <li>Inbox fournisseur :</li>
                <p>Redirection vers la page de boîte de réception des notifications pour les messages, les demandes RFQ et les devis d'un fournisseur.</p>

                <li>Demande RFQ :</li>
                <p>Redirection vers la page de demande de devis (RFQ) qui les liste.</p>

                <li>Commande :</li>
                <p>Redirection vers la page des listes et des statuts de livraison d'une commande.</p>

                <li>Modération</li>
                <p>Redirection vers la page des signalements effectués.</p>

                <li>Modération</li>
                <p>Redirection vers la liste des fournisseurs.</p>

                <li>Intelligence IA</li>
                <p>Redirection vers l'interface de gestion de l'IA.</p>

                <img src="../../img/fr/admin/access_rapide.png" alt="img_tableau_bord" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">
            </ul>
        


        <li><h4>Plateforme :</h4></li>
        
            <ul>
                <li>Utilisateur :</li>
                <p>Montre le nombre d'utilisateurs et redirection vers la page utilisateurs.</p>

                <li>Fournisseur :</li>
                <p>Montre le nombre de fournisseurs.</p>

                <li>Fabricant :</li>
                <p>Redirection vers la page de la liste des fournisseurs.</p>

                <li>Catégorie :</li>
                <p>Redirection vers la page qui liste les catégories des produits disponibles.</p>

                
            </ul>

        <li><h4>Commerce :</h4></li>
        
            <ul>
                <li>Produit :</li>
                <p>Redirection vers la page "Produit".</p>

                <li>Demande de devis :</li>
                <p>Redirection vers la page "Demande de devis (RFQ)".</p>

                <li>Commandes :</li>
                <p>Redirection vers la page de la liste des commandes.</p>

                <li>Chiffre d'affaires :</li>
                <p>Redirection vers la page qui liste les paiements effectués.</p>

                
            </ul>

        <li><h4>Qualité et conformité :</h4></li>
        
            <ul>
                <li>Produit à valider :</li>
                <p>Redirection vers la page "Produit".</p>

                <li>KYC en attente :</li>
                <p>Redirection vers la page qui montre les dossiers légaux (RC, NIF, NIS).</p>

                <li>Litiges ouverts :</li>
                <p>Redirection vers la page "Supports et réclamations".</p>

                <li>Pays d'export :</li>
                <p>Redirection vers la page qui liste les pays d'exportation.</p>

                <img src="../../img/fr/admin/commerce.png" alt="img_tableau_bord" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">
                
            </ul>

            

        <li><h4>Graphiques :</h4></li>
        
            <ul>
                <li>Chiffre d'affaires :</li>
                <p>Montre une courbe des revenus des 6 derniers mois.</p>

                <li>Utilisateur par type :</li>
                <p>Diagramme en anneau concernant le nombre de comptes créés : en rouge le nombre d'acheteurs, en vert clair le nombre de super utilisateurs, en vert foncé le nombre de fournisseurs.</p>
                <img src="../../img/fr/admin/chiffre_aff1.png" alt="img_tableau_bord" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">


                <li>Commandes par statut :</li>
                <p>Histogramme qui montre le nombre de commandes par statut : confirmée, en transit, livrée.</p>
                <img src="../../img/fr/admin/chiffre_aff2.png" alt="img_tableau_bord" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Activité récente :</li>
                <p>Montre les dernières activités sur la console d'administration.</p>
                <img src="../../img/fr/admin/recentes.png" alt="img_tableau_bord" style="width: 40%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                
            </ul>

            
    </ol>
    `
);