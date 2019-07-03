const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth');


//@route        POST api/users
//@description  Register  a user
//@access       PUBLIC 
router.post('/', [
    check('name', 'Please add a name').not().isEmpty(),
    check('email', 'Please include an email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const { name, email, title, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' })
        }
        user = new User({
            name,
            email,
            title,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 3600
        }, (err, token) => {
            if (err) throw err;
            res.json({ token })
        });
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


//@route        GET api/users
//@description  View User Profile
//@access       PRIVATE
router.get('/', auth, async (req, res) => {
    try {
        const profile = await User.find({ _id: req.user.id }).sort({ date: -1 });
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})



//@route        PUT api/user/:id
//@description  Update Profile
//@access       Private

router.put('/', auth, async (req, res) => {
    const { name, email, password } = req.body;
    const uid = req.user.id;

    console.log(`
    user put body: 
    name: ${name}
    email: ${email}
    password: ${password}
    userId: ${uid}`);

    //build a job object

    const proFields = {};
    if (name) proFields.name = name;
    if (email) proFields.email = email;
    if (password) proFields.password = password;

    console.log(`
    this is the proField obj that i built:
    ${JSON.stringify(proFields)}`);

    try {
        let pro = await User.findById(uid);

        if (!pro) return res.status(404).json({ msg: 'profile not found' });

        //make sure user owns job
        if (uid.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not Authorized' });
        }
        p = await User.findByIdAndUpdate(uid, proFields, { new: true });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

})

module.exports = router;