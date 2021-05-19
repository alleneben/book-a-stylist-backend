import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import dotenv from "dotenv";

dotenv.config();
import { DB } from  './db/db';
import { resolvers } from './resolvers/appresolvers';
import { typeDefs } from './typedefs/typedefs';



class Server {
    
    
    public start() {
        const db = new DB();
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            context: ({ req }) => {
                
                return req;
            }
        });
        
        const app = express();

        server.applyMiddleware({ app })
        
        app.listen({ port: 4000}, () => {

            console.log(`server running at http://localhost:4000${server.graphqlPath}`);
        })
        
    }

}

const server = new Server();
server.start()