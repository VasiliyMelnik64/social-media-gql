import { model, Schema } from 'mongoose';
import { IPost } from '../interfaces/IPost';
import { IComment } from '../interfaces/IComment';
import { ILike } from 'src/interfaces/ILike';

const commentSchema = new Schema<IComment>({
  userName: String,
  body: String,
  createdAt: Date,
});

const likeSchema = new Schema<ILike>({
  userName: String,
  createdAt: Date,
});

const postSchema = new Schema<IPost>({
  body: String,
  userName: String,
  createdAt: Date,
  comments: [commentSchema],
  likes: [likeSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export const Post = model<IPost>('Post', postSchema);
export const Comment = model<IComment>('Comment', commentSchema);
export const Like = model<ILike>('Like', likeSchema);
