const mongoose = require('mongoose');
const User = require('../models/User');
const Vehicle = require('../models/Vehicle');

mongoose.connect('mongodb://localhost:27017/vehicleEcommerce-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seed = async () => {
    try {
        await User.deleteMany();
        await Vehicle.deleteMany();

        // Sample user data
        const users = [
            {username: 'user1', email: 'user1@example.com', password: 'password1' },
            {username: 'user2', email: 'user2@example.com', password: 'password2' },
        ];

        // Create users
        const createdUsers = await User.create(users);
        console.log(createdUsers);
        // Sample vehicle data
        const vehicles = [
            {
                user: createdUsers[0]._id,
                make: 'Toyota',
                model: 'Camry',
                year: 2020,
                color: 'Red',
                miles: 10000,
                price: 25000
            },
            {
                user: createdUsers[1]._id,
                make: 'Honda',
                model: 'Accord',
                year: 2018,
                color: 'Blue',
                miles: 15000,
                price: 20000
            },
        ];
        console.log(vehicles);
        // for (let i = 0; i < vehicles.length; i++) {
        //     const { _id } = await Vehicle.create(vehicles[i]);
        //     // const user = await User.findOneAndUpdate(
        //     //     { username: createdUsers.username[i] },
        //     //     {
        //     //         $addToSet: {
        //     //             vehicles: _id,
        //     //         },
        //     //     }
        //     // );
        // }

        // Create vehicles
        const createdVehicles = await Vehicle.create(vehicles);
        console.log(createdVehicles);
        console.log('Sample data seeded successfully:', createdUsers, createdVehicles);
    } catch (error) {
        console.error('Error seeding sample data:', error);
    } finally {
        mongoose.disconnect();
    }
};

seed();