import User from "../model/User.js";

export const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
    if (!users || users.length === 0) {
        return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email, and password are required" });
    }

    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }

    // if user already exists
    if (existingUser) {
        return res.status(400).json({ message: "User Already Exists! Login Instead" });
    }

    // creating a new user
    const user = new User({
        name,
        email,
        password,
    });

    // save the user
    try {
        await user.save();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }

    return res.status(201).json({ user });
};
