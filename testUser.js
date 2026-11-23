// Import the User model
import User from "./models/User.js";

// // Create a user with valid information
// const user = new User({
//   username: "studentA",
//   email: "studentA@example.com",
//   password: "password123",
// });

// Create a user with invalid information
const user = new User({
  username: "",
  email: "studentexample.com",
  password: "12345",
});

// Check whether the user data satisfies the schema
try {
  await user.validate();
  console.log("User validation successful!");
} catch (error) {
  console.log("Validation failed:", error.message);
}