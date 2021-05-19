import { IResolvers } from 'graphql-tools';
import { Users, Providers } from '../models/models';

export const resolvers: IResolvers = {

    Query: {
        hello: () => "hellmooo"
    },

    Mutation: {
        users: async (_, { params }) => {
            const v = JSON.parse(JSON.stringify(params));
            
            const data = await Users.find(v)
            
            return data
        }
    }


}

