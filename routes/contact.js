const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');
const Contact = require('../models/Contact');

const auth = require('../middleware/auth');

//@route        GET api/contacts
//@description  GET all users contacts
//@access       PRIVATE 

router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

//@route        POST api/contacts
//@description  Add new contact
//@access       Private

router.post('/', [auth, [
    check('name', 'Name is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;
    try {
        const newContact = new Contact({
            name, email, phone, type, user: req.user.id
        });

        const contact = await newContact.save();
        res.json(contact);

    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

//@route        PUT api/contacts/:id
//@description  Update contact
//@access       Private

router.put('/:id', auth, async (req, res) => {
    const { name, email, phone, type } = req.body;
    //build a contact object

    const contactFields = {};
    if (name) contactFields.name = name;
    if (name) contactFields.email = email;
    if (name) contactFields.phone = phone;
    if (name) contactFields.type = type;

    try {
        let contact = await Contact.findById(req.params.id);

        if (!contact) return res.status(404).json({ msg: 'Contact not found' });

        //make sure user owns contact
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not Authorized' });
        }
        contact = await Contact.findByIdAndUpdate(req.params.id,
            { $set: contactFields },
            { new: true });

    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

})

//@route        DELETE api/contacts/:id
//@description  Delete contact
//@access       Private

router.delete('/:id', auth, async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id);

        if (!contact) return res.status(404).json({ msg: 'Contact not found' });

        //make sure user owns contact
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not Authorized' });
        }
        await Contact.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Contact Removed' });

    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})



module.exports = router;