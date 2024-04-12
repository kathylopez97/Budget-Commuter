const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedVehicles: [vehicle]
    }
    type vehicle {
        vehicleID: ID
        username: String
        make: String
        model: String
        year: Int
        color: String
        miles: Int
        price: Int
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    input FavoriteVehicle {
        vehicleID: ID
        username: String
        make: String
        model: String
        year: Int
        color: String
        miles: Int
        price: Int
    }
    input PostVehicle {
        vehicleID: ID
        username: String
        make: String
        model: String
        year: Int
        color: String
        miles: Int
        price: Int
    }
    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveVehicle(vehicleData: FavoriteVehicle!): User
        removeVehicle(vehicleId: ID!): User
        postVehicle(vehiclePostData: PostVehicle!): vehicle
    }
`;

module.exports = typeDefs;