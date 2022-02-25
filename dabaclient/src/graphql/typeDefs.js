import {gql} from '@apollo/client';

const typeDefs = gql`
    extend type Mutation{
        isLoggedin:Boolean!,   
    }   
`;

export default typeDefs;