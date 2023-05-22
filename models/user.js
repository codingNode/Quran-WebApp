import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'firstname is required!'],
    },
    lastname: {
        type: String,
        required: [true, 'lastname is required!'],
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, 'email is required!'],
    },
    password: {
      type: String,
      required: [true, 'password is required!'],
  },
    username: {
      type: String,
      required: [true, 'Username is required!'],
      match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
      type: String,
    }

},{timestamps: true})

const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User;