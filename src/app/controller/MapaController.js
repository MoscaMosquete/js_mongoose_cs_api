const Mapa = require("../model/Mapa");
class MapaController {
    async store(req, res) {
        const data = await Mapa.create(req.body);
        return res.json(data);
    }
    async list(req, res) {
        const data = await Mapa.find({});
        return res.json(data);
    }
    async delete(req, res){
        const {mapaName} = req.params
        const response = await Mapa.deleteOne({ "name" : mapaName })
        return res.json(response)
    }
    async update(req, res) {
        const { mapaId } = req.params
        const data = req.body
        const response = await Mapa.updateOne({ "_id": mapaId }, {
            $set: {
                name: data.name
            }
        })
        return res.json(response)
    }
}
module.exports = new MapaController();