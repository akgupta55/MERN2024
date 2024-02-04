const User = require("../model/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to day 1st of coding 15 days challenges");
  } catch (error) {
    console.log(error);
  }
};

// USER REGISTRATION LOGIC

// 1. get register data: Retrieve user data (username,email,password).
// 2. Check email existence
// 3. Hash password
// 4. create user
// 5. save to DB
// 6. Respond

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const userCreated = await User.create({ username, email, phone, password });

    res.status(200).json({ msg: userCreated });
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

module.exports = { home, register };
