// Import bcrypt to hash and compare passwords
import bcrypt from "bcrypt";

// Define a sample password
const password = "password123";

// Define the number of salt rounds for bcrypt
const saltRounds = 10;

// Hash the password using bcrypt
const hashedPassword = await bcrypt.hash(password, saltRounds);

// Display the hashed password
console.log("Hashed password:", hashedPassword);

// Compare the original password with the stored hash
const isCorrect = await bcrypt.compare(password, hashedPassword);

// Display the comparison result
console.log("Correct password:", isCorrect);

// Compare an incorrect password with the stored hash
const isIncorrect = await bcrypt.compare("wrongpassword", hashedPassword);

// Display the comparison result
console.log("Incorrect password:", isIncorrect);