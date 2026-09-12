creerCarte(
    "Marketplace intelligence",
    `
    <ol>
        <hr>
        <li><h4>CEO:</h4></li>
        <p>Dashboard specialized in the marketplace</p>
        
            <ul>

                <li>Task history:</li>
                <p>It is located at the very top right for sorting by date and time</p>
                    
                    <ul>
                        
                        <li>Today:</li>
                        <p>Shows the tasks done from the marketplace today</p>

                        <li>7 days:</li>
                        <p>Shows the tasks done over the last 7 days on the marketplace</p>

                        <li>30 days:</li>
                        <p>Shows the tasks done over the last 30 days on the marketplace</p>

                        <img src="../../img/fr/admin/market_place/historique_date.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">
                        
                    </ul>
                
                <li>Product Maturity:</li>
                <p>KPI: indicates the performance of a published listing</p>
                <img src="../../img/fr/admin/market_place/product_maturity.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Search Index Health:</li>
                <p>Summarizes the number of indexed products, redirect to intelligent search. "Intelligent search will be detailed in the marketplace > search section"</p>
                <img src="../../img/fr/admin/market_place/index_health.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">


                <li>General health:</li>
                <p>Shows the average of compliant processing done for Catalogs, Suppliers, AI Search, RFQ, SEO, Translations, Ontology</p>
                <img src="../../img/fr/admin/market_place/sante_generale.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>AI Search / No results / Success rate:</li>
                <p>Statistical summary of AI search and shortcut to the "marketplace > search" section</p>

                <li>Viewed products</li>
                <p>Statistical summary of viewed products and shortcut to the "marketplace > product" section</p>


                <li>RFQ created / RFQ sent / RFQ accepted</li>
                <p>Statistical summary of requests for quotation and shortcut to the "marketplace > RFQ" section</p>

                <li>Active suppliers</li>
                <p>Statistical summary of active suppliers and shortcut to the "marketplace > suppliers" section</p>
                <img src="../../img/fr/admin/market_place/ceo_raccourci.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Average response time</li>
                <p>Measures the response time of an RFQ request and shortcut to the "marketplace > suppliers" section</p>
                
                <li>Accepted AI suggestion</li>
                <p>Shortcut to the "marketplace > IA" section</p>
                
                <li>Infrastructure</li>
                <p>List of technologies used to build the website</p>

                <img src="../../img/fr/admin/market_place/temps_reponse.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Current priority</li>
                <p>List of tasks to accomplish:</p>
                <p>-Search Index Health: the "view" button redirects to marketplace > search / the "fix" button redirects to the "product" page</p>
                <p>-Products without photo: the "view" button redirects to marketplace > product / the "fix" button redirects to the "product" page</p>
                <p>-Suppliers without certificate: the "view" button redirects to marketplace > suppliers / the "fix" button redirects to the "suppliers & companies" page</p>
                <p>-AI fallback rate: the "view" button redirects to marketplace > IA / the "fix" button redirects to the "observability" page</p>
                <p>-Search with no results: the "view" button redirects to marketplace > search / the "fix" button redirects to the "business lexicon" page</p>
                <img src="../../img/fr/admin/market_place/priorite_moment.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">
            </ul>
        

        <hr>
        <li><h4>Assistant:</h4></li>
        <p>AI assistant that offers suggestions or advice to the administrator</p>
        <h5>Page contents:</h5>
            <ul>
                
                <li>AI assistant buttons</li>
                <p>2 buttons at the very top right:</p>
                <p>-Analyze & propose: offers advice</p>
                <p>-Measure effectiveness: checks whether the AI's advice is performing well</p>
                <img src="../../img/fr/admin/market_place/btn_activation_assistant.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>PENDING:</li>
                <p>Number of suggestions or advice given by the AI</p>
                <li>ACCEPTED:</li>
                <p>Number of suggestions or advice accepted by the administrator</p>
                <li>APPLIED:</li>
                <p>Number of suggestions or advice applied</p>
                <li>REJECTED:</li>
                <p>Number of suggestions or advice rejected</p>

                <img src="../../img/fr/admin/market_place/pend_accept.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Lexicons</li>
                <p>Suggestion coming from AI searches</p>
                <img src="../../img/fr/admin/market_place/lexique.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">
                <li>Catalogs</li>
                <p>Suggestion of tasks to accomplish for the catalog</p>
                <img src="../../img/fr/admin/market_place/assistant_catalog.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Suppliers</li>
                <p>Suggestion of tasks to accomplish for the supplier</p>
                <img src="../../img/fr/admin/market_place/fournisseur_assistant.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Decision history</li>
                <img src="../../img/fr/admin/market_place/historique_decision.png" alt="img_marketplace" style="width: 70%;
                border: 2px solid black; border-radius: 8px; padding: 5px;">
            </ul>
        <h5>Using the AI assistant:</h5>
        <p> Click on the "analyze and propose" button > check one or more choices in "lexicon or catalog or supplier" > click on "accept the batch" > the suggestion will be accepted or rejected </p>
        <p> Click on the "measure effectiveness" button > shows the results</p>
            

        <hr>
        <li><h4>Operations:</h4></li>
                <h5>Contents:</h5>

                    <ul>
                        <li>Header</li>
                        <img src="../../img/fr/admin/market_place/ope_sync_ia.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">    

                        <li>Ticket statuses</li>
                        <img src="../../img/fr/admin/market_place/statut_operation.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                        <li>Ticket lists</li>
                        <img src="../../img/fr/admin/market_place/op_list_ticket.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                        <li>Workflows</li>
                        <img src="../../img/fr/admin/market_place/op_workflows.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">
                    
                    </ul>
                <h5>Usage:</h5>
                <ul>
                        <li>Click on the "synchronize from intelligence" button in "Header"</li>
                        <li>Go to "Ticket lists" > Choose the processing status > Click on one of the tickets</li>
                        <li>Choose one of the actions in "Workflow":
                            <ol>
                                <li>take charge: change status to 'in progress'</li>
                                <li>create a synonym: give another name to the ticket</li>
                                <li>create a product: redirect to the 'product' page</li>
                                <li>create a category: redirect to the 'category' page</li>
                                <li>create an ontological relation: redirect to the 'business ontology' page</li>
                                <li>Image assistant, opens another page:
                                    <ul>
                                        <li>product name</li>
                                        <li>"open catalog" button: redirect to the "product" page</li>
                                        <li>"upload" button: image import for the product</li>
                                        <li>"previous" button: opens the previous product</li>
                                        <li>"next" button: opens the next product</li>
                                        <li>"back to operation" button</li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                        
                    
                </ul>

         <hr>
        <li><h4>Experiments:</h4></li>
        <p>Experiment the vector database for the AI</p>
        <h5>Contents:</h5>
            <ul>
                <li>Baseline (30 d)</li>
                <li>New experiment</li>
                <li>Experiments</li>
                <img src="../../img/fr/admin/market_place/experiments2.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">
                <img src="../../img/fr/admin/market_place/experiments1.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">
            </ul>

        <h5>Usage:</h5>
            <ul>
                <li>Go to the "new experiment" section</li>
                <li>Fill in the 3 "inputs"</li>
                <li>Click on "create draft"</li>
                
            </ul>

        <hr>
        <li><h4>Search:</h4></li>
        <p>Statistics about search activities</p>
        <h5>Contents:</h5>
            <ul>
                <li>Header</li>
                <img src="../../img/fr/admin/market_place/market_search5.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Statistics</li>
                <img src="../../img/fr/admin/market_place/market_search4.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Search curve</li>
                <img src="../../img/fr/admin/market_place/market_search3.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Search list</li>
                <img src="../../img/fr/admin/market_place/market_search2.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Shortcuts</li>
                <img src="../../img/fr/admin/market_place/market_search1.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">
            </ul>

        <h5>Usage:</h5>
            <ul>
                <li>Click on 7d or 30d to sort the search in the header</li>
                <li>Go to "Search list" > Searches with no results > click on a search > redirect to the "business lexicon" page</li>
                <li>Shortcuts:
                    <ol>
                        <li>button list:
                            <ul>

                                <li> open the business lexicon: redirect to the "business lexicon" page</li>
                                <li> create a category: redirect to the "category" page</li>
                                <li> View catalog opportunity: redirect to the "catalog intelligence" page</li>
                            </ul>
                        </li>

                        <li>Priorities:
                            <ul>

                                <li> Search Index Health: the "view" button - redirect to "the header"; the "fix" button - redirect to the "product" page; </li>
                                <li> Searches with no results: the "view" button - redirect to "the header"; the "fix" button - redirect to the "category" page; the "create synonym" button - redirect to the "business lexicon" page </li>
                            </ul>
                        </li>
                        
                    </ol>
                </li>
                
            </ul>


        <hr>
        <li><h4>Product:</h4></li>
        <p>Statistics about activities on products</p>
        <h5>Contents:</h5>
            <ul>
                <li>Header</li>
                <img src="../../img/fr/admin/market_place/market_product5.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Statistics</li>
                <img src="../../img/fr/admin/market_place/market_product4.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Curve</li>
                <img src="../../img/fr/admin/market_place/market_product3.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Product list</li>
                <img src="../../img/fr/admin/market_place/market_product2.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">

                <li>Shortcuts</li>
                <img src="../../img/fr/admin/market_place/market_product1.png" alt="img_marketplace" style="width: 70%;
                        border: 2px solid black; border-radius: 8px; padding: 5px;">
            </ul>

        <h5>Usage:</h5>
            <ul>
                <li>Click on 7d or 30d to sort the search in the header</li>
                <li>Go to "Product list" > Most viewed (viewCount) > click on a product > redirect to the "product" page</li>
                <li>Go to "Product list" > Products without image (sample) > click on a product > redirect to the "product" page</li>
                <li>Shortcuts:
                    <ol>
                        <li>button list:
                            <ul>

                                <li> fix the photos: redirect to the "product" page</li>
                                <li> view the catalog: redirect to the "product" page</li>
                                <li> knowledge center: redirect to the "knowledge center" page</li>
                                <li> document library: redirect to the "library" page</li>
                            </ul>
                        </li>

                        <li>Priorities:
                            <ul>

                                <li> products without photo: the "view" button - redirect to "the header"; the "fix" button - redirect to the "product" page; </li>
                                <li> Average Knowledge Score Agri-food: the "view" button - redirect to "the header"; the "fix" button - redirect to the "knowledge center" page; </li>
                                <li> Documentary coverage: the "view" button - redirect to "the header"; the "fix" button - redirect to the "library" page; </li>
                            </ul>
                        </li>
                        
                    </ol>
                </li>
                
            </ul>

            <hr>
        <li><h4>Supplier:</h4></li>
        <p>Statistics about supplier activities</p>
        <h5>Contents:</h5>
            <ul>
                <li>Header</li>
                <img src="../../img/fr/admin/market_place/market_suppli5.png" alt="img_marketplace">

                <li>Statistics</li>
                <img src="../../img/fr/admin/market_place/market_suppli4.png" alt="img_marketplace" >

                <li>Curve</li>
                <img src="../../img/fr/admin/market_place/market_suppli3.png" alt="img_marketplace">

                <li>Supplier and RFQ request list</li>
                <img src="../../img/fr/admin/market_place/market_suppli2.png" alt="img_marketplace" >

                <li>Shortcuts</li>
                <img src="../../img/fr/admin/market_place/market_suppli1.png" alt="img_marketplace" >
            </ul>

        <h5>Usage:</h5>
            <ul>
                <li>Click on 7d or 30d to sort the search in the header</li>
                <li>Go to "Supplier and RFQ request list" > Won RFQs > click on an RFQ > redirect to the "RFQ request" page</li>
                <li>Go to "Supplier and RFQ request list" > Incomplete profiles > click on a supplier > redirect to the "suppliers & companies" page</li>
                <li>Shortcuts:
                    <ol>
                        <li>button list:
                            <ul>

                                <li> complete the profiles: redirect to the "suppliers & companies" page</li>
                                <li> manage certifications: redirect to the "Company certifications" page</li>
                            </ul>
                        </li>

                        <li>Priorities:
                            <ul>

                                <li> suppliers without certificate: the "view" button - redirect to "the header"; the "fix" button redirect to the "suppliers & companies" page </li>
                                <li> suppliers without logo: the "view" button - redirect to "the header"; the "fix" button redirect to the "suppliers & companies" page  </li>
                            </ul>
                        </li>
                        
                    </ol>
                </li>
                
            </ul>

        <hr>
        <li><h4>RFQ:</h4></li>
        <p>Statistics about requests for quotation (RFQ)</p>
        <h5>Contents:</h5>
            <ul>
                <li>Header</li>
                <img src="../../img/fr/admin/market_place/market_rfq5.png" alt="img_marketplace">

                <li>Statistics</li>
                <img src="../../img/fr/admin/market_place/market_rfq4.png" alt="img_marketplace" >

                <li>Curve</li>
                <img src="../../img/fr/admin/market_place/market_rfq3.png" alt="img_marketplace">

                <li>RFQ request history</li>
                <img src="../../img/fr/admin/market_place/market_rfq2.png" alt="img_marketplace" >

                <li>Shortcuts</li>
                <img src="../../img/fr/admin/market_place/market_rfq1.png" alt="img_marketplace" >
            </ul>

        <h5>Usage:</h5>
            <ul>
                <li>Click on 7d or 30d to sort the search in the header</li>
                <li>Go to "RFQ request history" > Pipeline breakdown > click on an RFQ > redirect to the "RFQ request" page</li>
                <li>Go to "RFQ request history" > Expired / cancelled > click on an RFQ > redirect to the "RFQ request" page</li>
                <li>Shortcuts:
                    <ol>
                        <li>button list:
                            <ul>

                                <li> view the RFQs: redirect to the "RFQ request" page</li>
                                <li> handle the open ones: redirect to the "RFQ request" page</li>
                            </ul>
                        </li>

                        <li>Priorities:
                            <ul>

                                <li> Open RFQs: the "view" button - redirect to "the header"; the "fix" button redirect to the "RFQ request" page </li>
                            </ul>
                        </li>
                        
                    </ol>
                </li>
                
            </ul>


            <hr>
        <li><h4>Reco:</h4></li>
        <p>Statistics about recommendations</p>
        <h5>Contents:</h5>
            <ul>
                <li>Header</li>
                <img src="../../img/fr/admin/market_place/market_reco5.png" alt="img_marketplace">

                <li>Statistics</li>
                <img src="../../img/fr/admin/market_place/market_reco4.png" alt="img_marketplace" >

                <li>Curve</li>
                <img src="../../img/fr/admin/market_place/market_reco3.png" alt="img_marketplace">

                <li>Recommendation history</li>
                <img src="../../img/fr/admin/market_place/market_reco2.png" alt="img_marketplace" >

                <li>Shortcuts</li>
                <img src="../../img/fr/admin/market_place/market_reco1.png" alt="img_marketplace" >
            </ul>

        <h5>Usage:</h5>
            <ul>
                <li>Click on 7d or 30d to sort the search in the header</li>
                <li>Go to "Recommendation history" > Strongest pairs (BI Graph) > click on a recommendation > redirect to the "product" page</li>
                
                <li>Shortcuts:
                    <ol>
                        <li>button list:
                            <ul>

                                <li> view product sheet: redirect to the "product" page</li>
                            </ul>
                        </li>
                        
                    </ol>
                </li>
                
            </ul>

        <hr>
        <li><h4>IA:</h4></li>
        <p>AI usage statistics</p>
        <h5>Contents:</h5>
            <ul>
                <li>Header</li>
                <img src="../../img/fr/admin/market_place/market_IA5.png" alt="img_marketplace">

                <li>Statistics</li>
                <img src="../../img/fr/admin/market_place/market_IA4.png" alt="img_marketplace" >

                <li>Curve</li>
                <img src="../../img/fr/admin/market_place/market_IA3.png" alt="img_marketplace">

                <li>History of searches done with the AI</li>
                <img src="../../img/fr/admin/market_place/market_IA2.png" alt="img_marketplace" >

                <li>Shortcuts</li>
                <img src="../../img/fr/admin/market_place/market_IA1.png" alt="img_marketplace" >
            </ul>

        <h5>Usage:</h5>
            <ul>
                <li>Click on 7d or 30d to sort the search in the header</li>
                <li>Go to "History of searches done with the AI" > Risks > click on an AI search > redirect to the "business lexicon" page</li>
                
                <li>Shortcuts:
                    <ol>
                        <li>button list:
                            <ul>

                                <li> document pipeline: redirect to the "document" page</li>
                                <li> library: redirect to the "library" page</li>
                                <li> simulator: redirect to the "simulator" page</li>
                                <li> library: redirect to the "library" page</li>
                                <li> AI observability: redirect to the "observability" page</li>
                            </ul>
                        </li>
                        
                        <li>Priorities:
                            <ul>

                                <li> documents pending validation: the "view" button - redirect to "the header"; the "fix" button redirect to the "documents" page </li>
                                <li> active products without Published documentation: the "view" button - redirect to "the header"; the "fix" button redirect to the "library" page </li>
                                <li> Documentary coverage: the "view" button - redirect to "the header"; the "fix" button redirect to the "library" page </li>
                                <li> fallback rate: the "view" button - redirect to "the header"; the "fix" button redirect to the "observability" page </li>
                            </ul>
                        </li>
                    </ol>

                    
                </li>
                
            </ul>

            <hr>
        <li><h4>Lexicon:</h4></li>
        <p>Dashboard for word control</p>
        <h5>Contents:</h5>
            <ul>
                <li>Header</li>
                <img src="../../img/fr/admin/market_place/market_lexique5.png" alt="img_marketplace">

                <li>Statistics</li>
                <img src="../../img/fr/admin/market_place/market_lexique4.png" alt="img_marketplace" >

                <li>Curve</li>
                <img src="../../img/fr/admin/market_place/market_lexique3.png" alt="img_marketplace">

                <li>Search history</li>
                <img src="../../img/fr/admin/market_place/market_lexique2.png" alt="img_marketplace" >

                <li>Shortcuts</li>
                <img src="../../img/fr/admin/market_place/market_lexique1.png" alt="img_marketplace" >
            </ul>

        <h5>Usage:</h5>
            <ul>
                <li>Click on 7d or 30d to sort the search in the header</li>
                <li>Go to "Search history" > To add to the lexicon > click on a search > redirect to the "business lexicon" page</li>
                <li>Go to "All searches with no results" > To add to the lexicon > click on a search > redirect to the "business lexicon" page</li>
                
                <li>Shortcuts:
                    <ol>
                        <li>button list:
                            <ul>

                                <li> create a synonym: redirect to the "business lexicon" page</li>
                                <li> fix an entry: redirect to the "business lexicon" page</li>
                            </ul>
                        </li>
                        
                        <li>Priorities:
                            <ul>

                                <li> terms missing from the lexicon: the "view" button - redirect to "the header"; the "fix" button redirect to the header; the "create a synonym" button redirect to "business lexicon" </li>
                               
                            </ul>
                        </li>
                    </ol>

                    
                </li>
                
            </ul>

            <hr>
        <li><h4>Ontology:</h4></li>
        <p>Dashboard of business relations</p>
        <h5>Contents:</h5>
            <ul>
                <li>Header</li>
                <img src="../../img/fr/admin/market_place/market_onto5.png" alt="img_marketplace">

                <li>Statistics</li>
                <img src="../../img/fr/admin/market_place/market_onto4.png" alt="img_marketplace" >

                <li>Curve</li>
                <img src="../../img/fr/admin/market_place/market_onto3.png" alt="img_marketplace">

                <li>History of used relations</li>
                <img src="../../img/fr/admin/market_place/market_onto2.png" alt="img_marketplace" >

                <li>Shortcuts</li>
                <img src="../../img/fr/admin/market_place/market_onto1.png" alt="img_marketplace" >
            </ul>

        <h5>Usage:</h5>
            <ul>
                <li>Click on 7d or 30d in the header to sort the dashboard </li>
                <li>Go to "Search history" > To add to the lexicon > click on a search > redirect to the "business lexicon" page</li>
                <li>Go to "All searches with no results" > To add to the lexicon > click on a search > redirect to the "business lexicon" page</li>
                
                <li>Shortcuts:
                    <ol>
                        <li>button list:
                            <ul>

                                <li> open the ontology editor: redirect to the "Business ontology" page</li>
                                <li> data quality: redirect to the "marketplace > data quality" page</li>
                            </ul>
                        </li>
                        
                    </ol>

                    
                </li>
                
            </ul>

            <hr>
        <li><h4>Data quality:</h4></li>
        <p>Dashboard of data processing</p>
        <h5>Contents:</h5>
            <ul>
                <li>Header</li>
                <img src="../../img/fr/admin/market_place/market_data_qual5.png" alt="img_marketplace">

                <li>Statistics</li>
                <img src="../../img/fr/admin/market_place/market_data_qual4.png" alt="img_marketplace" >

                <li>Curve</li>
                <img src="../../img/fr/admin/market_place/market_data_qual3.png" alt="img_marketplace">

                <li>Data list</li>
                <img src="../../img/fr/admin/market_place/market_data_qual2.png" alt="img_marketplace" >

                <li>Shortcuts</li>
                <img src="../../img/fr/admin/market_place/market_data_qual1.png" alt="img_marketplace" >
            </ul>

        <h5>Usage:</h5>
            <ul>
                <li>Click on 7d or 30d in the header to sort the dashboard </li>
                <li>Go to "Data list" > Healthiest domains > click on a data item > redirect to the header</li>
                
                
                <li>Shortcuts:
                    <ol>
                        <li>button list:
                            <ul>

                                <li> complete the products: redirect to the "product" page</li>
                                <li> complete the suppliers: redirect to the "Suppliers & Companies" page</li>
                                <li> complete the ontologies: redirect to the "business ontology" page</li>
                            </ul>
                        </li>
                        
                    </ol>

                    
                </li>

                <li>Priorities:
                    <ul>

                        <li> Search Index Health: the "view" button - redirect to "marketplace > search"; the "fix" button redirect to the "product" page;</li>
                        <li> products without photo: the "view" button - redirect to "product"; the "fix" button redirect to the "product" page;</li>
                        <li> suppliers without certificate: the "view" button - redirect to "marketplace > supplier"; the "fix" button redirect to the "supplier & company" page;</li>
                        <li> AI fallback rate: the "view" button - redirect to the same page; the "fix" button redirect to the "observability" page;</li>                       
                        <li> searches with no results: the "view" button - redirect to the "marketplace > search" page; the "fix" button redirect to the "business lexicon" page; the "fix" button redirect to the "business lexicon" page; the "create synonym" button redirect to the "business lexicon" page;</li>
                    </ul>
                </li>
                
            </ul>
    </ol>
    `
);