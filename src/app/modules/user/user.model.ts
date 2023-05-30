import { Schema, model, Model } from 'mongoose'
import { IUser } from './user.interface'

type UserModel = Model<IUser, object>

//creating schema
export const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

//creating model
export const User = model<IUser, UserModel>(`User`, userSchema)
