import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        userID
        username
      }
    }
  }
`;

export const POST_VEHICLE = gql`
  mutation postVehicle($vehicleData: PostVehicleInput!) {
    postVehicle(vehicleData: $vehicleData) {
      vehicleID
      make
      model
      year
      color
      miles
      price
    }
  }
`;

export const SAVE_VEHICLE = gql`
  mutation saveVehicle($vehicleData: FavoriteVehicleInput!) {
    saveVehicle(vehicleData: $vehicleData) {
      userID
      username
      email
      savedVehicles {
        vehicleID
        make
        model
        year
        color
        miles
        price
      }
    }
  }
`;

export const REMOVE_VEHICLE = gql`
  mutation removeVehicle($vehicleID: ID!) {
    removeVehicle(vehicleID: $vehicleID) {
      userID
      username
      email
      savedVehicles {
        vehicleID
        make
        model
        year
        color
        miles
        price
      }
    }
  }
`;