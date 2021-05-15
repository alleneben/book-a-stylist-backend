import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import dotenv from "dotenv";

dotenv.config();
import { DB } from  './db/db';
import { AppResolver } from './resolvers/appresolver';



class Server {

    constructor(){

    }

    public async start() {
        const db = new DB();
        const schema = await buildSchema({resolvers: [AppResolver]});
        const server = new ApolloServer({schema});
        await server.listen(4000);
    
        console.log("server running at port 4000");
        
    }

}

const server = new Server();
server.start()