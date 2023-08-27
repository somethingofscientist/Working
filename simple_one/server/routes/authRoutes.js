const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser } = require('../controllers/authController');
const app = express();

// middleware
router.get('/', test)
router.post('/register', registerUser)


module.exports = router;