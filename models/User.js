// Import Schema and model from Mongoose
import { Schema, model } from "mongoose";

// Define the structure and validation rules for a User document
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

// Create a User model using the schema
const User = model("User", userSchema);

// Export the model so other files can use it
export default User;