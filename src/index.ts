require('dotenv/config');
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import { typeDefs, resolvers } from './graphql';

const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.PORT || 3332;

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => server.listen({ port }))
  .then(({ url }: { url: string }) => console.log(`🚀 Server ready at ${url}`))
  .catch(console.log);
