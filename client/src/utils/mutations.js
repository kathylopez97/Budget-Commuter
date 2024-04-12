import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token user {
          _id
          username
        }
      }
    }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token {
        token user {
          _id
          username
        }
      }
    }
  }
`;

export const POST_VEHICLE = gql`
  mutation postVehicle($vehiclePostData: PostVehicle!) {
    postVehicle(vehiclePostData: $vehiclePostData) {
      _id
      username
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
  mutation saveVehicle($vehicle: FavoriteVehicle!) {
    saveVehicle(vehicle: $vehicle) {
      _id
      username
      email
      savedVehicles {
        vehicleID
        username
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
  mutation removeVehicle($vehicleId: ID!) {
    removeVehicle(vehicleId: $vehicleId) {
      _id
      username
      email
      savedVehicles {
        vehicleID
        username
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
