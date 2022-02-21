const mongoose = require("mongoose");
const MapaSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        locais: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Local"
            }
        ]
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Mapa",
    MapaSchema);