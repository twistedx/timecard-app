const cl = m => console.log(m);

const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');


module.exports = router => {
    router.get('/', (req,res) => {
        console.log('admin page start');
        res.send("admin page");
        // res.sendFile(path.join(__dirname, '../client/public', 'admin.html'))
    });
}