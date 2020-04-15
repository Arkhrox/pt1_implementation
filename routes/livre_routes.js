module.exports = app => {
  const livre = require("../controllers/livre_controller");
  // Nouveau Livre
  app.post("/livres", livre.create);

  // prendre 1 livre
  app.post("/livres/prendre/:livresID/:idEchange", livre.prendreLivre);

  //vérifier 1 livre
  app.post("/livres/verifier/:livresID/:idEmploye", livre.verifierLivre);

  //enregistrer 1 livre
  app.post("/livres/enregistrer/:livresID/:idEnregistre", livre.enregistrerLivre);

  // Liste des Auteurs
  app.get("/livres", livre.findAll);

  // Livre par ID
  app.get("/livres/:livresID", livre.findOne);

  // Del livre par ID
  app.delete("/livres/:livresID", livre.delete);

  // Livre recommandations auteur + genre match
  app.get("/livres/recommandations/listeBOTH/:idPersonne", livre.findRecommandationBOTH);

  // Livre recommandations auteur match
  app.get("/livres/recommandations/listeAUTEURS/:idPersonne", livre.findRecommandationAUTEURS);

  // Livre recommandations genre match
  app.get("/livres/recommandations/listeGENRES/:idPersonne", livre.findRecommandationGENRES);
};