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

                <li>Historique des décisions</li>
                <img src="../../img/fr/admin/market_place/historique_decision.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">
            </ul>
        <h5>Utilisation de l'assistant IA:</h5>
        <p> Cliquer sur le bouton "analyser et proposer" > cocher un ou plusieurs choix dans "lexique ou catalogue ou fournisseur" > cliquer sur "accepter le lot" > la suggestion sera accepté ou refusé </p>
        <p> Cliquer sur le bouton "mesurer l'efficatité" > montre les résultats</p>
            

        <hr>
        <li><h4>Opérations:</h4></li>
                <h5>Contenus:</h5>

                    <ul>
                        <li>En tête</li>
                        <img src="../../img/fr/admin/market_place/ope_sync_ia.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">    

                        <li>Statuts des tickets</li>
                        <img src="../../img/fr/admin/market_place/statut_operation.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                        <li>Listes des tickets</li>
                        <img src="../../img/fr/admin/market_place/op_list_ticket.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                        <li>Worflows</li>
                        <img src="../../img/fr/admin/market_place/op_workflows.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">
                    
                    </ul>
                <h5>Utilisation:</h5>
                <ul>
                        <li>Cliquer sur le bouton "synchroniser depuis l'intelligence" dans "En-tête"</li>
                        <li>Aller dans "Listes des tickets" > Choisir le statut de traitement > Cliquer sur un des tickets</li>
                        <li>Choisir un des actions dans "Workflow":
                            <ol>
                                <li>prendre en charge: changement statut en 'in progress'</li>
                                <li>créer un synonyme: donner un autre nom aux ticket</li>
                                <li>créer un produit: redirection vers la page 'produit'</li>
                                <li>créer un catégorie: redirection vers la page 'catégorie'</li>
                                <li>créer une relation ontologique: redirection vers la page 'ontologie métier'</li>
                                <li>Assistant image, ouvre un autre page:
                                    <ul>
                                        <li>nom du produit</li>
                                        <li>bouton "ouvrir catalogue": redirection vers la page "produit"</li>
                                        <li>bouton "uploader": importation d'image pour le produit</li>
                                        <li>bouton "précédent": ouvre le produit précédent</li>
                                        <li>bouton "suivant": ouvre le produit suivant</li>
                                        <li>bouton "retour operation"</li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                        
                    
                </ul>

         <hr>
        <li><h4>Experiments:</h4></li>
        <p>Expérimente la base vectorielle pour l'ia</p>
        <h5>Contenus:</h5>
            <ul>
                <li>Baseline (30 j)</li>
                <li>Nouvelle expérience</li>
                <li>Expériences</li>
                <img src="../../img/fr/admin/market_place/experiments2.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">
                <img src="../../img/fr/admin/market_place/experiments1.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">
            </ul>

        <h5>Utilisation:</h5>
            <ul>
                <li>Aller sur la partie "nouvelle expérience"</li>
                <li>Remplir les 3 "inputs"</li>
                <li>Cliquer sur "créer draft"</li>
                
            </ul>

        <hr>
        <li><h4>Search:</h4></li>
        <p>Statistique concernant les activités de recherche</p>
        <h5>Contenus:</h5>
            <ul>
                <li>En-tête</li>
                <img src="../../img/fr/admin/market_place/market_search5.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Statistiques</li>
                <img src="../../img/fr/admin/market_place/market_search4.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Courbe de recherche</li>
                <img src="../../img/fr/admin/market_place/market_search3.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Liste des recherches</li>
                <img src="../../img/fr/admin/market_place/market_search2.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Raccourcis</li>
                <img src="../../img/fr/admin/market_place/market_search1.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">
            </ul>

        <h5>Utilisation:</h5>
            <ul>
                <li>Cliquer sur 7j ou 30j pour trier la recherche qui est dans l'en-tête</li>
                <li>Aller dans "Liste des recherches" > Recherches sans résultat > cliquer sur une recherche > redirection vers la page "lexique métier"</li>
                <li>Raccourcis:
                    <ol>
                        <li>liste des boutons:
                            <ul>

                                <li> ouvrir le lexique metier: redirection vers la page "lexique métier"</li>
                                <li> créer une catégorie: redirection vers la page "catégorie"</li>
                                <li> Voir opportunité catalogue: redirection vers la page "intelligence catalogue"</li>
                            </ul>
                        </li>

                        <li>Priorités:
                            <ul>

                                <li> Search Index Health: le bouton "voir" - redirection vers "l'en-tête"; le bouton "corriger" - redirection vers la page "produit"; </li>
                                <li> Recherches sans résultat: le bouton "voir" - redirection vers "l'en-tête"; le bouton "corriger" - redirection vers la page "catégorie"; le bouton "créer synonyme" - redirection vers la page "léxique métier" </li>
                            </ul>
                        </li>
                        
                    </ol>
                </li>
                
            </ul>


        <hr>
        <li><h4>Product:</h4></li>
        <p>Statistique concernant les activités sur les produits</p>
        <h5>Contenus:</h5>
            <ul>
                <li>En-tête</li>
                <img src="../../img/fr/admin/market_place/market_product5.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Statistiques</li>
                <img src="../../img/fr/admin/market_place/market_product4.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Courbe</li>
                <img src="../../img/fr/admin/market_place/market_product3.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Liste des produits</li>
                <img src="../../img/fr/admin/market_place/market_product2.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Raccourcis</li>
                <img src="../../img/fr/admin/market_place/market_product1.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">
            </ul>

        <h5>Utilisation:</h5>
            <ul>
                <li>Cliquer sur 7j ou 30j pour trier la recherche qui est dans l'en-tête</li>
                <li>Aller dans "Liste des produits" > Plus consultés (viewCount) > cliquer sur un produit > redirection vers la page "produit"</li>
                <li>Aller dans "Liste des produits" > Produits sans image (échantillon) > cliquer sur un produit > redirection vers la page "produit"</li>
                <li>Raccourcis:
                    <ol>
                        <li>liste des boutons:
                            <ul>

                                <li> corriger les photos: redirection vers la page "produit"</li>
                                <li> voir le catalogue: redirection vers la page "produit"</li>
                                <li> knowledge center: redirection vers la page "knowledge center"</li>
                                <li> bibliothèque document: redirection vers la page "bibliothèque"</li>
                            </ul>
                        </li>

                        <li>Priorités:
                            <ul>

                                <li> produits sans photo: le bouton "voir" - redirection vers "l'en-tête"; le bouton "corriger" - redirection vers la page "produit"; </li>
                                <li> Knowledge Score moyen Agroalimentaire: le bouton "voir" - redirection vers "l'en-tête"; le bouton "corriger" - redirection vers la page "knowledge center"; </li>
                                <li> Coverage documentaire: le bouton "voir" - redirection vers "l'en-tête"; le bouton "corriger" - redirection vers la page "bibliothèque"; </li>
                            </ul>
                        </li>
                        
                    </ol>
                </li>
                
            </ul>

            <hr>
        <li><h4>Supplier:</h4></li>
        <p>Statistique concernant les activités du fournisseur</p>
        <h5>Contenus:</h5>
            <ul>
                <li>En-tête</li>
                <img src="../../img/fr/admin/market_place/market_suppli5.png" alt="img_marketplace">

                <li>Statistiques</li>
                <img src="../../img/fr/admin/market_place/market_suppli4.png" alt="img_marketplace" >

                <li>Courbe</li>
                <img src="../../img/fr/admin/market_place/market_suppli3.png" alt="img_marketplace">

                <li>Liste des fournisseurs et demandes RFQ</li>
                <img src="../../img/fr/admin/market_place/market_suppli2.png" alt="img_marketplace" >

                <li>Raccourcis</li>
                <img src="../../img/fr/admin/market_place/market_suppli1.png" alt="img_marketplace" >
            </ul>

        <h5>Utilisation:</h5>
            <ul>
                <li>Cliquer sur 7j ou 30j pour trier la recherche qui est dans l'en-tête</li>
                <li>Aller dans "Liste des fournisseurs et demandes RFQ" > RFQ gagnés > cliquer sur un RFQ > redirection vers la page "demande RFQ"</li>
                <li>Aller dans "Liste des fournisseurs et demandes RFQ" > Profils incomplets > cliquer sur un fournisseur > redirection vers la page "fournisseurs & sociétés"</li>
                <li>Raccourcis:
                    <ol>
                        <li>liste des boutons:
                            <ul>

                                <li> compléter les profils: redirection vers la page "fournisseurs & sociétés"</li>
                                <li> gérer les certification: redirection vers la page "Certifications sociétés"</li>
                            </ul>
                        </li>

                        <li>Priorités:
                            <ul>

                                <li> fournisseurs sans certificat: le bouton "voir" - redirection vers "l'en-tête"; le bouton "corriger" redirection vers la page "fournisseurs & sociétés" </li>
                                <li> fournisseurs sans logo: le bouton "voir" - redirection vers "l'en-tête"; le bouton "corriger" redirection vers la page "fournisseurs & sociétés"  </li>
                            </ul>
                        </li>
                        
                    </ol>
                </li>
                
            </ul>

        <hr>
        <li><h4>RFQ:</h4></li>
        <p>Statistique concernant les demandes de devis (RFQ)</p>
        <h5>Contenus:</h5>
            <ul>
                <li>En-tête</li>
                <img src="../../img/fr/admin/market_place/market_rfq5.png" alt="img_marketplace">

                <li>Statistiques</li>
                <img src="../../img/fr/admin/market_place/market_rfq4.png" alt="img_marketplace" >

                <li>Courbe</li>
                <img src="../../img/fr/admin/market_place/market_rfq3.png" alt="img_marketplace">

                <li>Historique des demandes RFQ</li>
                <img src="../../img/fr/admin/market_place/market_rfq2.png" alt="img_marketplace" >

                <li>Raccourcis</li>
                <img src="../../img/fr/admin/market_place/market_rfq1.png" alt="img_marketplace" >
            </ul>

        <h5>Utilisation:</h5>
            <ul>
                <li>Cliquer sur 7j ou 30j pour trier la recherche qui est dans l'en-tête</li>
                <li>Aller dans "Historique des demandes RFQ" > Répartition pipeline > cliquer sur un RFQ > redirection vers la page "demande RFQ"</li>
                <li>Aller dans "Historique des demandes RFQ" > Expirés / annulés > cliquer sur un RFQ > redirection vers la page "demande RFQ"</li>
                <li>Raccourcis:
                    <ol>
                        <li>liste des boutons:
                            <ul>

                                <li> voir les RFQ: redirection vers la page "demande RFQ"</li>
                                <li> traiter les ouverts: redirection vers la page "demande RFQ"</li>
                            </ul>
                        </li>

                        <li>Priorités:
                            <ul>

                                <li> RFQ ouverts: le bouton "voir" - redirection vers "l'en-tête"; le bouton "corriger" redirection vers la page "demande de devis RFQ" </li>
                            </ul>
                        </li>
                        
                    </ol>
                </li>
                
            </ul>


            <hr>
        <li><h4>Reco:</h4></li>
        <p>Statistique concernant les recommandations</p>
        <h5>Contenus:</h5>
            <ul>
                <li>En-tête</li>
                <img src="../../img/fr/admin/market_place/market_reco5.png" alt="img_marketplace">

                <li>Statistiques</li>
                <img src="../../img/fr/admin/market_place/market_reco4.png" alt="img_marketplace" >

                <li>Courbe</li>
                <img src="../../img/fr/admin/market_place/market_reco3.png" alt="img_marketplace">

                <li>Historique des recommandations</li>
                <img src="../../img/fr/admin/market_place/market_reco2.png" alt="img_marketplace" >

                <li>Raccourcis</li>
                <img src="../../img/fr/admin/market_place/market_reco1.png" alt="img_marketplace" >
            </ul>

        <h5>Utilisation:</h5>
            <ul>
                <li>Cliquer sur 7j ou 30j pour trier la recherche qui est dans l'en-tête</li>
                <li>Aller dans "Historique des recommandations" > Paires les plus fortes (BI Graph) > cliquer sur une recommandation > redirection vers la page "produit"</li>
                
                <li>Raccourcis:
                    <ol>
                        <li>liste des boutons:
                            <ul>

                                <li> voir fiche produit: redirection vers la page "produit"</li>
                            </ul>
                        </li>
                        
                    </ol>
                </li>
                
            </ul>

        <hr>
        <li><h4>IA:</h4></li>
        <p>Statistique d'utilisation IA</p>
        <h5>Contenus:</h5>
            <ul>
                <li>En-tête</li>
                <img src="../../img/fr/admin/market_place/market_IA5.png" alt="img_marketplace">

                <li>Statistiques</li>
                <img src="../../img/fr/admin/market_place/market_IA4.png" alt="img_marketplace" >

                <li>Courbe</li>
                <img src="../../img/fr/admin/market_place/market_IA3.png" alt="img_marketplace">

                <li>Historique des recherches faits avec l'IA</li>
                <img src="../../img/fr/admin/market_place/market_IA2.png" alt="img_marketplace" >

                <li>Raccourcis</li>
                <img src="../../img/fr/admin/market_place/market_IA1.png" alt="img_marketplace" >
            </ul>

        <h5>Utilisation:</h5>
            <ul>
                <li>Cliquer sur 7j ou 30j pour trier la recherche qui est dans l'en-tête</li>
                <li>Aller dans "Historique des recherches faits avec l'IA" > Risques > cliquer sur une recherche IA > redirection vers la page "lexique métier"</li>
                
                <li>Raccourcis:
                    <ol>
                        <li>liste des boutons:
                            <ul>

                                <li> pipeline document: redirection vers la page "document"</li>
                                <li> bibliothèque: redirection vers la page "bibliothèque"</li>
                                <li> simulateur: redirection vers la page "simulateur"</li>
                                <li> bibliothèque: redirection vers la page "bibliothèque"</li>
                                <li> observabilité IA: redirection vers la page "observabilité"</li>
                            </ul>
                        </li>
                        
                        <li>Priorités:
                            <ul>

                                <li> documents en attente de validation: le bouton "voir" - redirection vers "l'en-tête"; le bouton "corriger" redirection vers la page "documents" </li>
                                <li> produits actifs sans documentation Published: le bouton "voir" - redirection vers "l'en-tête"; le bouton "corriger" redirection vers la page "bibliothèque" </li>
                                <li> Coverage documentaire: le bouton "voir" - redirection vers "l'en-tête"; le bouton "corriger" redirection vers la page "bibliothèque" </li>
                                <li> taux de fallback: le bouton "voir" - redirection vers "l'en-tête"; le bouton "corriger" redirection vers la page "observabilité" </li>
                            </ul>
                        </li>
                    </ol>

                    
                </li>
                
            </ul>

            <hr>
        <li><h4>Lexique:</h4></li>
        <p>Tableau de bord pour le contrôle des mots</p>
        <h5>Contenus:</h5>
            <ul>
                <li>En-tête</li>
                <img src="../../img/fr/admin/market_place/market_lexique5.png" alt="img_marketplace">

                <li>Statistiques</li>
                <img src="../../img/fr/admin/market_place/market_lexique4.png" alt="img_marketplace" >

                <li>Courbe</li>
                <img src="../../img/fr/admin/market_place/market_lexique3.png" alt="img_marketplace">

                <li>Historique des recherches</li>
                <img src="../../img/fr/admin/market_place/market_lexique2.png" alt="img_marketplace" >

                <li>Raccourcis</li>
                <img src="../../img/fr/admin/market_place/market_lexique1.png" alt="img_marketplace" >
            </ul>

        <h5>Utilisation:</h5>
            <ul>
                <li>Cliquer sur 7j ou 30j pour trier la recherche qui est dans l'en-tête</li>
                <li>Aller dans "Historique des recherches" > À ajouter au lexique > cliquer sur une recherche > redirection vers la page "lexique métier"</li>
                <li>Aller dans "Toutes recherches sans résultat" > À ajouter au lexique > cliquer sur une recherche > redirection vers la page "lexique métier"</li>
                
                <li>Raccourcis:
                    <ol>
                        <li>liste des boutons:
                            <ul>

                                <li> créer un synonyme: redirection vers la page "lexique métier"</li>
                                <li> corriger une entrée: redirection vers la page "lexique métier"</li>
                            </ul>
                        </li>
                        
                        <li>Priorités:
                            <ul>

                                <li> termes absents du lexique: le bouton "voir" - redirection vers "l'en-tête"; le bouton "corriger" redirection vers l'en-tête; le bouton "créer un synonyme" redirection vers "lexique métier" </li>
                               
                            </ul>
                        </li>
                    </ol>

                    
                </li>
                
            </ul>

            <hr>
        <li><h4>Ontologie:</h4></li>
        <p>Tableau de bord des relations métiers</p>
        <h5>Contenus:</h5>
            <ul>
                <li>En-tête</li>
                <img src="../../img/fr/admin/market_place/market_onto5.png" alt="img_marketplace">

                <li>Statistiques</li>
                <img src="../../img/fr/admin/market_place/market_onto4.png" alt="img_marketplace" >

                <li>Courbe</li>
                <img src="../../img/fr/admin/market_place/market_onto3.png" alt="img_marketplace">

                <li>Historique des relations utilisées</li>
                <img src="../../img/fr/admin/market_place/market_onto2.png" alt="img_marketplace" >

                <li>Raccourcis</li>
                <img src="../../img/fr/admin/market_place/market_onto1.png" alt="img_marketplace" >
            </ul>

        <h5>Utilisation:</h5>
            <ul>
                <li>Cliquer sur 7j ou 30j qui est dans l'en-tête pour trier le tableau de bord </li>
                <li>Aller dans "Historique des recherches" > À ajouter au lexique > cliquer sur une recherche > redirection vers la page "lexique métier"</li>
                <li>Aller dans "Toutes recherches sans résultat" > À ajouter au lexique > cliquer sur une recherche > redirection vers la page "lexique métier"</li>
                
                <li>Raccourcis:
                    <ol>
                        <li>liste des boutons:
                            <ul>

                                <li> ouvrir l'éditeur ontologie: redirection vers la page "Ontologie métier"</li>
                                <li> data quality: redirection vers la page "marketplace > data quality"</li>
                            </ul>
                        </li>
                        
                    </ol>

                    
                </li>
                
            </ul>

            <hr>
        <li><h4>Data quality:</h4></li>
        <p>Tableau de bord des traitements de données</p>
        <h5>Contenus:</h5>
            <ul>
                <li>En-tête</li>
                <img src="../../img/fr/admin/market_place/market_data_qual5.png" alt="img_marketplace">

                <li>Statistiques</li>
                <img src="../../img/fr/admin/market_place/market_data_qual4.png" alt="img_marketplace" >

                <li>Courbe</li>
                <img src="../../img/fr/admin/market_place/market_data_qual3.png" alt="img_marketplace">

                <li>Liste des données</li>
                <img src="../../img/fr/admin/market_place/market_data_qual2.png" alt="img_marketplace" >

                <li>Raccourcis</li>
                <img src="../../img/fr/admin/market_place/market_data_qual1.png" alt="img_marketplace" >
            </ul>

        <h5>Utilisation:</h5>
            <ul>
                <li>Cliquer sur 7j ou 30j qui est dans l'en-tête pour trier le tableau de bord </li>
                <li>Aller dans "Liste des données" > Domaines les plus sains > cliquer sur une donnée > redirection vers l'en-tête</li>
                
                
                <li>Raccourcis:
                    <ol>
                        <li>liste des boutons:
                            <ul>

                                <li> compléter les produits: redirection vers la page "produit"</li>
                                <li> compléter les fournisseurs: redirection vers la page "Fournisseurs & Sociétés"</li>
                                <li> compléter les ontologies: redirection vers la page "ontologie métier"</li>
                            </ul>
                        </li>
                        
                    </ol>

                    
                </li>

                <li>Priorités:
                    <ul>

                        <li> Search Index Health: le bouton "voir" - redirection vers "marketplace > search"; le bouton "corriger" redirection vers la page "produit";</li>
                        <li> produits sans photo: le bouton "voir" - redirection vers "produit"; le bouton "corriger" redirection vers la page "produit";</li>
                        <li> fournisseurs sans certificat: le bouton "voir" - redirection vers "marketplace > supplier"; le bouton "corriger" redirection vers la page "fournisseur & société";</li>
                        <li> taux de fallback IA: le bouton "voir" - redirection sur la même page; le bouton "corriger" redirection vers la page "observabilité";</li>                       
                        <li> recherches sans résultat: le bouton "voir" - redirection vers la page "marketplace > search"; le bouton "corriger" redirection vers la page "lexique métier"; le bouton "corriger" redirection vers la page "lexique métier"; le bouton "créer synonyme" redirection vers la page "lexique métier";</li>
                    </ul>
                </li>
                
            </ul>
    </ol>
    `
);