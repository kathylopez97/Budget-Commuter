import {gql} from '@apollo/client';

export const GET_ME = gql`
{
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
        }
    }
}
`;

