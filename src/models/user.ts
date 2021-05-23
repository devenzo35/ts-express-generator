import { Schema, model } from "mongoose";

const User = new Schema({
  name: {
    type: String,
    required: [true, "User is mandatory"],
  },
  email: {
    type: String,
    required: [true, "email is mandatory"],
  },
  password: {
    type: String,
    required: [true, "password is mandatory"],
  },
});

export = model("User", User);
