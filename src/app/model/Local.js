const mongoose = require("mongoose");
const LocalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        mapas: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Mapa"
            }
        ],
        objetivos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Objetivo"
            }
        ],
        latitude:{
            type: Number,
            required: true
        },
        longitude:{
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Local",
    LocalSchema);