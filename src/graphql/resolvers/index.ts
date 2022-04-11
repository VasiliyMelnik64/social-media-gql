import { postResolver } from './posts';

const resolvers = {
  Query: {
    ...postResolver.Query,
  },
};

export default resolvers;
