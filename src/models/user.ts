import { model, Schema } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const userSchema = new Schema<IUser>({
  userName: String,
  password: String,
  email: String,
  createdAt: Date,
});

export const User = model<IUser>('User', userSchema);
