import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("TaskUsers", userSchema);

export default User;