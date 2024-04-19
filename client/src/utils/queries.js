import { gql } from '@apollo/client';

// export const GET_ME = gql`
//   query GetMe {
//     me {
//       _id
//       username
//       email
//       savedVehicles {
//         _id
//         user
//         make
//         model
//         year
//         color
//         miles
//         price
//       }
//     }
//   }

//     `;

export const GET_ME = gql`
  query GetMe {
    me {
      _id
      username
      email
    }
  }

    `;
export const GET_VEHICLES = gql`
    query SearchVehicles($query: String!) {
      searchVehicles(query: $query) {
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
    `;
