import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, getConnection, OneToMany } from "typeorm";
import { ObjectType, Field, ID } from 'type-graphql';


@Entity("users")
@ObjectType()
export class Users extends BaseEntity {

	@Field(() => ID)
	@PrimaryGeneratedColumn("increment")
	user_id: number | undefined;

	@Field(() => String)
	@Column()
	username!: string;

	@Field(() => String, { nullable: true})
	@Column()
	fullname!: string;

	@Field(() => String, { nullable: true})
	@Column()
	lastname!: string;

	@Field(() => String)
	@Column()
	email!: string;

	@Field(() => String)
	@Column()
	firstname!: string;
}


@Entity("r_providers")
@ObjectType()
export class Providers extends BaseEntity{

	@Field(() => ID)
	@PrimaryGeneratedColumn("increment")
	provider_id: number | undefined;

	@Field(() => String)
	@Column()
	user_id!: number;

	@Field(() => String)
	@Column()
	provider_name!: string;

	@Field(() => String)
	@Column()
	provider_username!: string;

	@Field(() => String)
	@Column()
	address!: string;

	@Field(() => String)
	@Column()
	latitude!: string;

	@Field(() => String)
	@Column()
	longitude!: string;

}