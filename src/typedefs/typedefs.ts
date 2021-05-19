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

    input MessageInput {
        user_id: ID
        username: String
    }

    type Query {
        hello: String!
    }

    type Mutation {
        users(params: MessageInput): [User]
    }

`