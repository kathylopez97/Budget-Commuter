// Import schema and model from mongoose
const { Schema, model } = require('mongoose');
// Import vehicle data when creating a post
const vehicleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    miles: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Vehicle = model('Vehicle', vehicleSchema);
module.exports = Vehicle;
