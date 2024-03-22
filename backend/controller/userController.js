const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// @desc   Regsiter user
// @route  POST /api/v1/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, image, state, country, role } = req.body;
    if (!name || !email || !password || !state || !country) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const availableUser = await User.findOne({ where: { email } });
    if (availableUser) {
        res.status(400);
        throw new Error("User already registered");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        image,
        state,
        country,
        role
    });
    if (user) {
        res.status(201).json({ _id: user.user_id, email: user.email });
    } else {
        res.status(400);
        throw new Error("User data is inavalid");
    }
})

// @desc   Regsiter user
// @route  POST /api/v1/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
        const accessToken = jwt.sign(
            {
                user: {
                    email: user.email,
                    id: user.user_id,
                    role: user.role
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "30d" }
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Invalid Credentials!");
    }
})

// @desc   Update user details
// @route  PUT /api/v1/users/update
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const { name, image, state, country } = req.body;
    const userId = req.user.id;

    const user = await User.findByPk(userId);
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    if (name) user.name = name;
    if (image) user.image = image;
    if (state) user.state = state;
    if (country) user.country = country;

    await user.save();

    res.status(200).json({
        message: 'User details updated successfully'
    });
});


module.exports = { registerUser, loginUser, updateUser }