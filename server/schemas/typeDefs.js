const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type vehicle {
        _id: ID
        name: String
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
        name: String
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