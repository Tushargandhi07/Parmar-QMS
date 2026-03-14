const express = require('express');
const router = express.Router();
const authRoutes = require('../controllers/auth');  
const userRoutes = require('../controllers/user');  

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

module.exports = router;