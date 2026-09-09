creerCarte(
    "Marketplace intelligence",
    `
    <ol>
        <hr>
        <li><h4>CEO:</h4></li>
        <p>Tableau de bord spécialisé dans le marketplace</p>
        
            <ul>

                <li>Historique des tâches:</li>
                <p>Il se trouve tout en haut à droite pour le triage par date et heure</p>
                    
                    <ul>
                        
                        <li>Aujourd'hui:</li>
                        <p>Montre les tâches faites depuis le marketplace aujourd'hui</p>

                        <li>7 jours:</li>
                        <p>Montre les tâches faites les 7 derniers jours sur le marketplace</p>

                        <li>30 jours:</li>
                        <p>Montre les tâches faites les 30 derniers jours sur le marketplace</p>

                        <img src="../../img/fr/admin/market_place/historique_date.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">
                        
                    </ul>
                
                <li>Product Maturity:</li>
                <p>KPI: indique la performance d'une annoce publiée</p>
                <img src="../../img/fr/admin/market_place/product_maturity.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Search Index Health:</li>
                <p>Résume le nombre de produits indéxés, redirection vers search intelligente. "Search intelligente sera détaillé dans la partie marketplace > search"</p>
                <img src="../../img/fr/admin/market_place/index_health.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">


                <li>Santé générale:</li>
                <p>Montre la moyenne des traitements conformes faits pour les Catalogues, Fournisseurs, Recherche IA, RFQ, SEO, Traductions, Ontologie</p>
                <img src="../../img/fr/admin/market_place/sante_generale.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Recherche IA / Sans résultat / Taux de réussite :</li>
                <p>Résumé statistique de recherche avec l'ia et raccourci vers la partie "marketplace > search"</p>

                <li>Produits consultés</li>
                <p>Résumé statistique des produits consultés et raccourci vers la partie "marketplace > product"</p>


                <li>RFQ créés / RFQ envoyés / RFQ acceptés</li>
                <p>Résumé statistique des demandes de devis et raccourci vers la partie "marketplace > RFQ"</p>

                <li>Fournisseurs actifs</li>
                <p>Résumé statistique des fournisseurs actifs et raccourci vers la partie "marketplace > suppliers"</p>
                <img src="../../img/fr/admin/market_place/ceo_raccourci.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Temps moyenne de réponse</li>
                <p>Mesure le temps de réponse d'une demande RFQ et raccourci vers la partie "marketplace > suppliers"</p>
                
                <li>Suggestion IA accepté</li>
                <p>Raccourci vers la partie "marketplace > IA"</p>
                
                <li>Infrastructure</li>
                <p>Liste des technologies utilisées pour la construction du site web</p>

                <img src="../../img/fr/admin/market_place/temps_reponse.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Priorité du moment</li>
                <p>Liste des tâches à accomplir :</p>
                <p>-Search Index Health : le bouton "voir" redirection vers marketplace > search / le bouton "corriger" redirection vers la page "produit"</p>
                <p>-Produit sans photo : le bouton "voir" redirection vers marketplace > product / le bouton "corriger" redirection vers la page "produit"</p>
                <p>-fournisseur sans certificat : le bouton "voir" redirection vers marketplace > suppliers / le bouton "corriger" redirection vers la page "fournisseurs & sociétés"</p>
                <p>-Taux de fallback IA : le bouton "voir" redirection vers marketplace > IA / le bouton "corriger" redirection vers la page "observabilité"</p>
                <p>-Recherche sans résultat : le bouton "voir" redirection vers marketplace > search / le bouton "corriger" redirection vers la page "lexique métier"</p>
                <img src="../../img/fr/admin/market_place/priorite_moment.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">
            </ul>
        

        <hr>
        <li><h4>Assistant:</h4></li>
        <p>Assistant IA qui propose des suggestions ou conseils à l'administrateur</p>
        <h5>Contenus de la page:</h5>
            <ul>
                
                <li>Boutons de l'assistant IA</li>
                <p>2 boutons tout en haut à droite :</p>
                <p>-Analyser & proposer : propose les conseils</p>
                <p>-Mesurer l'efficacité : vérifie si les conseils de l'IA est performant</p>
                <img src="../../img/fr/admin/market_place/btn_activation_assistant.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>PENDDING:</li>
                <p>Nombre de suggestions ou conseils donnés par l'ia</p>
                <li>ACCEPTED:</li>
                <p>Nombre de suggestions ou conseils donnés par l'administrateur</p>
                <li>APPLIED:</li>
                <p>Nombre de suggestions ou conseils appliqués</p>
                <li>REJECTED:</li>
                <p>Nombre de suggestions ou conseils rejetés</p>

                <img src="../../img/fr/admin/market_place/pend_accept.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Lexiques</li>
                <p>Suggestion venant des recherches IA</p>
                <img src="../../img/fr/admin/market_place/lexique.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">
                <li>Catalogues</li>
                <p>Suggestion des tâches à accomplir pour le catalogue</p>
                <img src="../../img/fr/admin/market_place/assistant_catalog.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Fournisseurs</li>
                <p>Suggestion des tâches à accomplir pour le fournisseur</p>
                <img src="../../img/fr/admin/market_place/fournisseur_assistant.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">
            </ul>
            
    </ol>
    `
);