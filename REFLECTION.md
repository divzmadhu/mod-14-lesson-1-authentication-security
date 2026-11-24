## Introduction

 Lesson 1: 
 **Foundations of Web Authentication & Password Security**. 
 
 The goal is to learn how to securely handle user information by creating a Mongoose User model, defining validation rules, and understanding how Mongoose checks user data against those rules. We will also learn how to hash and verify passwords using bcrypt.

 1.  User Model Validation — Passing Test
We provided valid username, email, and password values.

![Terminal output of node testUser.js showing User validation successful!](screenshots/01a-user-validation-success.png)

2. User Model Validation — Failing Test (Invalid Input)
![Terminal output of node testUser.js showing validation errors for missing username, invalid email, and short password](screenshots/01b-user-validation-failed.png)