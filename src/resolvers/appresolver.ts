import { Resolver, Query,Arg, FieldResolver, Root } from 'type-graphql';
import { Users, Providers } from '../models/models';


@Resolver()
export class AppResolver {
    @Query(() => [Users])
    users() {
        return Users.find({});
    }


    @Query(() => [Providers])
    providers(params: object) {
        return Providers.find(params);
    }
}

