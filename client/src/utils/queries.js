import { gql } from '@apollo/client';

export const GET_ME = gql`
  query GetMe {
    me {
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
`;

