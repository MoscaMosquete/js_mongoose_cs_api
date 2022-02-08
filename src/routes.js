const express = require("express");
const routes = express.Router();
const EnderecoController = require("./app/controller/EnderecoController");
routes.get("/", function(req, res) {
 return res.send("Servidor no ar ...");
});
routes.get("/endereco", EnderecoController.list);
routes.post("/endereco", EnderecoController.store);
module.exports = routes;