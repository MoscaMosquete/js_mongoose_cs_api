const Local = require("../model/Local");
const Mapa = require("../model/Mapa")
class LocalController {
    async store(req, res) {
        const data = await Local.create(req.body);
        return res.json(data);
    }
    async list(req, res) {
        const data = await Local.find({});
        return res.json(data);
    }
    async delete(req, res) {
        const { localName } = req.params
        const response = await Local.deleteOne({ "name": localName })
        return res.json(response)
    }
    async update(req, res) {
        const { localId } = req.params
        const data = req.body
        const response = await Local.updateOne({ "_id": localId }, {
            $set: {
                name: data.name,
                latitude: data.latitude,
                longitude: data.longitude
            }
        })
        return res.json(response)
    }
    async addMapa(req, res) {
        const { localId } = req.params
        const data = req.body
        const response = await Local.updateOne({ "_id": localId }, {
            $push: {
                mapas: data.mapaId,
            }
        })
        const response2 = await Mapa.updateOne({ "_id": data.mapaId }, {
            $push: {
                locais: localId,
            }
        })
        return res.json([response, response2])
    }
}
module.exports = new LocalController();