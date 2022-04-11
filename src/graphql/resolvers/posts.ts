import { Post as PostModel } from '../../models/post';

export const postResolver = {
  Query: {
    async getPosts() {
      try {
        const posts = await PostModel.find();

        return posts;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {},
};
