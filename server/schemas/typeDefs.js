const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Vehicle {
        _id: ID
        user: ID!
        make: String
        model: String
        year: Int
        color: String
        miles: Int
        price: Int
    }

    type User {
        _id: ID!
        username: String
        email: String
        password: String
        savedVehicles: [Vehicle]
        postedVehicles: [Vehicle]
    }

    type Auth {
        token: ID!
        user: User
    }
    

    type Query {
        me: User
        searchVehicles(query: String!): [Vehicle]
    }

    input FavoriteVehicle {
        _id: ID!
        user: ID!
        make: String
        model: String
        year: Int
        color: String
        miles: Int
        price: Int
    }

    input PostVehicle {
        _id: ID!
        user: ID!
        make: String!
        model: String!
        year: Int!
        color: String!
        miles: Int!
        price: Int!
    }

    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveVehicle(vehicleData: FavoriteVehicle!): User
        removeVehicle(vehicleId: ID!): User
        postVehicle(vehiclePostData: PostVehicle!): Vehicle
    }
`;

module.exports = typeDefs;