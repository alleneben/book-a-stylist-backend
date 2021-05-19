import { gql } from 'apollo-server-express'


export const typeDefs = gql`
    type User {
        user_id: ID
        username: String
        fullname: String
        lastname: String
        email: String
	    firstname: String
    }

    type Provider {
        user_id: ID
        provider_id: ID
        provider_username: String
        fullname: String
        lastname: String
        email: String
	    firstname: String
    }
    

    input Params {
        user_id: ID
        username: String
    }

    type Query {
        hello: String!
        users(params: Params): [User]
        providers(params: Params): [Provider]
    }

    type Mutation {
        users(params: Params): [User]
    }

`