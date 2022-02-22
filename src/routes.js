const express = require("express");
const routes = express.Router();
const EnderecoController = require("./app/controller/EnderecoController");
const JogadorController = require("./app/controller/JogadorController");
const PatenteController = require("./app/controller/PatenteController");
const ArtefatoController = require("./app/controller/ArtefatoController");
const CompraController = require("./app/controller/ArtefatoController");
const LocalController = require("./app/controller/LocalController");
const MapaController = require("./app/controller/MapaController");

routes.get("/", function (req, res) {
    return res.send("Servidor no ar ...");
})

routes.get("/jogador", JogadorController.list);
routes.get("/endereco", EnderecoController.list);
routes.post("/endereco", EnderecoController.store);
routes.post("/jogador", JogadorController.store);
routes.get("/patente", PatenteController.list);
routes.post("/patente", PatenteController.store);
routes.get("/artefato", ArtefatoController.list);
routes.post("/artefato", ArtefatoController.store);
routes.get("/compra", CompraController.list);
routes.post("/compra", CompraController.store);
routes.get("/local", LocalController.list);
routes.post("/local", LocalController.store);
routes.delete("/local/:localName", LocalController.delete);
routes.put("/local/:localId", LocalController.update);
routes.put("/localmapa/:localId", LocalController.addMapa);
routes.get("/mapa", MapaController.list);
routes.post("/mapa", MapaController.store);
routes.delete("/mapa/:mapaName", MapaController.delete);
routes.put("/mapa/:mapaId", MapaController.update);



module.exports = routes;