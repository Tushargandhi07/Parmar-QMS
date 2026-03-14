const User = require('../../models/User');

const updateUserController = async (req, res) => {
    try {
        const { name, email, role,_id } = req.body;
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.name = name || user.name;
        user.email = email || user.email;
        user.role = role || user.role;
        await user.save();
        res.status(200).json({ message: 'User updated successfully' });

    } catch (error) {
        console.log('Error in update user controller', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = updateUserController;