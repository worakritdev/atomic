import db from '$lib/database/db';
import type { EndpointOutput, RequestHandler } from '@sveltejs/kit';
import { ApolloServer, gql } from 'apollo-server-lambda';


const typeDefs = gql`
   interface MutationResponse {
  code: String!
  success: Boolean!
  message: String!
}
# A book has a title and an author
type Blog {
	id: ID!
	title: String!
	site: String!
	details: String!
	visitorcount: Int!
	likes: [User]
	author: User
}

type User {
	id: ID!
	name: String
	uuid: String!
	blogs: [Blog]
}

type Post{
    title: String
    body: String
    mediaUrls:[String]
}

input PostAndMediaInput {
	title: String
	body: String
	mediaUrls: [String]
}

type LikePostMutationResponse implements MutationResponse {
  code: String!
  success: Boolean!
  message: String!
  post: Post
  user: User
}



type Query {
	users: [User]
	blogs: [Blog]
}



`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        users: async() =>{
            return db
        }
    }    
    
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
    tracing: true
});

const graphqlHandler = apolloServer.createHandler();

// This is where the magic happens.
const handler: RequestHandler = async (args) => {
    return await new Promise<EndpointOutput>((resolve, reject) => {
        graphqlHandler(
            {
                httpMethod: args.method,
                headers: args.headers,
                path: args.path,
                body: args.rawBody as string
            } as any,
            {} as any,
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        status: result.statusCode,
                        body: result.body,
                        headers: result.headers as any
                    });
                }
            }
        ) as any;
    });
};

export const head = handler;
export const get = handler;
export const post = handler;
