import mongoose, { model, Schema, Model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar: string;
  date: string;
}
// const UserSchema: Schema = new Schema({
//   email: { type: String, required: true },
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
// });

export const User: Model<IUser> = model(
  "user",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      // the profile avatar
      type: String,
    },
    date: {
      type: Date,
      default: new Date().toISOString(),
    },
  })
);

// import { model, Schema, Model, Document } from "mongoose";

// interface IUser extends Document {
//   email: string;
//   firstName: string;
//   lastName: string;
// }

// const UserSchema: Schema = new Schema({
//   email: { type: String, required: true },
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
// });

// const User: Model<IUser> = model("User", UserSchema);
