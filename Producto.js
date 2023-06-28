const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    cliente: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    servicio: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);