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
        _id: ID
        username: String
        make: String
        model: String
        year: Int
        color: String
        miles: Int
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    input favoriteVehicle {
        username: String
        make: String
        model: String
        year: Int
        color: String
        miles: Int
    }
    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveVehicle(vehicleData: favoriteVehicle!): User
        removeVehicle(vehicleId: ID!): User
    }
`;

module.exports = typeDefs;