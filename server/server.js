import express, { urlencoded } from "express";
import { json } from "body-parser";

import { hash, compare } from "bcrypt";
import { default as connectDB } from "../config/dbConf";
import path from "path";
import config from "../config/config";
import User from "./models/user.model";
import template from "../template";
const app = express();
app.use(json());

connectDB();
app.use(json());
app.use(urlencoded({ extended: true }));
const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("/", (req, res) => {
  res.status(200).send(template());
});

// Define the User model

// Sync the model with the database

// Endpoint to register a new user
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already taken" });
    }
    const hashedPassword = await hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error registering user", details: error.message });
  }
});

// Endpoint to log in
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, username: user.username },
    });
  } catch (error) {
    res.status(500).json({ error: "Error logging in", details: error.message });
  }
});
// Start the server

app.listen(config.port, config.host, () => {
  console.log(`Server is running on port ${config.port}`);
});
