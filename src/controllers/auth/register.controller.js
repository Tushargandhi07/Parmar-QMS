const User = require('../../models/User');
const bcrypt = require('bcrypt');

const registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name: username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log('Error in register controller', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
module.exports = registerController;