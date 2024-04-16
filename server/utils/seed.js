const mongoose = require('mongoose');
const User = require('../models/User');
const Vehicle = require('../models/Vehicle');
const { v4: uuidv4 } = require('uuid');

mongoose.connect('mongodb://localhost:27017/vehicleEcommerce-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Sample user data with explicit _id fields
const users = [
    { _id: new mongoose.Types.ObjectId(), username: 'user1', email: 'user1@example.com', password: 'password1' },
    { _id: new mongoose.Types.ObjectId(), username: 'user2', email: 'user2@example.com', password: 'password2' },
];

const seed = async () => {
    try {
        await User.deleteMany();
        await Vehicle.deleteMany();

        // Create users and store the result in createdUsers
        const createdUsers = await User.create(users);

        // Sample vehicle data with explicit _id fields and valid user references
        const vehicles = [
            {
                _id: new mongoose.Types.ObjectId(),
                user: createdUsers[0]._id, // Use the _id of the first created user
                vehicleID: uuidv4(),
                make: 'Toyota',
                model: 'Camry',
                year: 2020,
                color: 'Red',
                miles: 10000,
                price: 25000
            },
            {
                _id: new mongoose.Types.ObjectId(),
                user: createdUsers[1]._id, // Use the _id of the second created user
                vehicleID: uuidv4(),
                make: 'Honda',
                model: 'Accord',
                year: 2018,
                color: 'Blue',
                miles: 15000,
                price: 20000
            },
        ];

        // Create vehicles using the sample data
        const createdVehicles = await Vehicle.create(vehicles);

        console.log('Sample data seeded successfully:', createdUsers, createdVehicles);
    } catch (error) {
        console.error('Error seeding sample data:', error);
    } finally {
        mongoose.disconnect();
    }
};

seed();


