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
        _id
        username
      }
    }
  }
`;

export const POST_VEHICLE = gql`
mutation postVehicle($vehicleData: PostVehicle!) {
  postVehicle(vehiclePostData: $vehicleData) {
    _id
    user
    color
    make
    miles
    model
    price
    year
  }
}
`;

export const SAVE_VEHICLE = gql`
  mutation saveVehicle($vehicleData: FavoriteVehicleInput!) {
    saveVehicle(vehicleData: $vehicleData) {
      _id
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

export const UPDATE_VEHICLE = gql`
mutation UpdateVehicle($vehicleId: ID!, $updatedData: UpdateVehicle!) {
  updateVehicle(vehicleId: $vehicleId, updatedData: $updatedData) {
    _id
    user
    make
    model
    year
    color
    miles
    price
  }
}
`

export const DELETE_VEHICLE = gql`
  mutation removeVehicle($vehicleID: ID!) {
    removeVehicle(vehicleID: $vehicleID) {
      _id
      username
      email
      savedVehicles {
        _id
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