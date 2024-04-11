const { Schema, model } = require('mongoose');

const vehicleSchema = new schema({
    _id: Schema.Types.ObjectId,
    make: String,
    model: String,
    year: Number,
    price: Number,
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Vehicle = model('Vehicle', vehicleSchema);

module.exports = Vehicle;