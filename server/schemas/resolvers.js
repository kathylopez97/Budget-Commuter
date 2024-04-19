const { AuthenticationError } = require('apollo-server-express');
const { User, Vehicle } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        searchVehicles: async (_, { query }) => {
            try {
                const results = await Vehicle.find({
                    $or: [
                        { make: { $regex: query, $options: 'i' } },
                        { model: { $regex: query, $options: 'i' } },
                    ],
                })
                return results;
            } catch (error) {
                throw new Error('Failed to search vehicles');
            }
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }, context) => {
            console.log('add User called');
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        loginUser: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect email or password');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect email or password');
            }
            const token = signToken(user);
            return { token, user };
        },
        saveVehicle: async (parent, { vehicleData }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }

            const { _id } = vehicleData;

            const user = await User.findOne({ _id: context.user._id });
            if (user.savedVehicles.some(vehicle => vehicle._id === _id)) {
                throw new Error('Vehicle is already saved');
            }

            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedVehicles: vehicleData } },
                { new: true, runValidators: true }
            );

            return updatedUser;
        },
        removeVehicle: async (parent, { vehicleId }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            return User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedVehicles: { vehicleId } } },
                { new: true }
            );
        },
        postVehicle: async (parent, args, context) => {
            console.log(context);
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const vehicle = await Vehicle.create({ ...args, user: context.user._id});
            return vehicle;
        },
    },
};

module.exports = resolvers;