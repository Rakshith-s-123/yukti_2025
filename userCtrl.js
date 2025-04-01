const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/UserModel');

const JWT_SECRET = "your_jwt_secret_key";



const createUser = async (req, res) => {
    try {
        const {name, email,mobile, password } = req.body;
        const findUser = await User.findOne({ email });
        if (findUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name,email,mobile, password: hashedPassword });
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const loginUserCtrl = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Password is incorrect' });
        }

        const token = jwt.sign({ email: user.email,mobile: user.mobile, name: user.name, address: user.addresses, id: user._id }, JWT_SECRET, { expiresIn: "1d" });
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        res.json({ message: 'Login successful', token });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const logoutUserCtrl = (req, res) => {
    localStorage.removeItem;

    res.json({ message: 'Logout successful' });
};

const getUserProfile = async (req, res) => {
    try {
        
        const user = await User.find({});          
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }else{
            res.json(user);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};



const addAddress = async (req, res) => {
    const { address } = req.body;
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const userId = decoded.id;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.addresses.push(address);
        await user.save();

        res.json({ message: 'Address added successfully', addresses: user.addresses });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
};



module.exports = { createUser, loginUserCtrl, logoutUserCtrl, addAddress, getUserProfile };
