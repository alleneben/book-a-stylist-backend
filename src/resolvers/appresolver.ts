import { Resolver, Query } from 'type-graphql';
import { Users, Providers } from '../models/models';


@Resolver()
export class AppResolver {
    @Query(() => [Users!])
    users() {
        return Users.find();
    }


    // @Query(() => [Providers])
    // providers() {
    //     return Providers.find();
    // }
}