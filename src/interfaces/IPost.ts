import { IUser } from './IUser';
import { IComment } from './IComment';
import { ILike } from './ILike';

export interface IPost {
  body: String;
  userName: String;
  createdAt: Date;
  comments: [IComment];
  likes: [ILike];
  user: IUser;
}
