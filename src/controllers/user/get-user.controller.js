
const getUserController = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({
            name: user.name,
            email: user.email,
            role: user.role
        });
    } catch (error) {
        console.log('Error in get user controller', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = getUserController;