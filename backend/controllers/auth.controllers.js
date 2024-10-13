import { User } from "../models/user.models.js";

export const entry = async (req, res) => {
  try {
    const {email, name} = req.body;
    const user = await User.create({email, name});
    res.status(201).json(user);
  } catch (error) {
    console.log("Error creating user", error.message);
    res.status(500).json({message: "Something went wrong"});
  }
}

export const getEntry = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    console.log("Error getting user", error.message);
    res.status(500).json({message: "Something went wrong"});
  }
}