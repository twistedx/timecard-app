const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');
const Job = require('../models/Job');

const auth = require('../middleware/auth');

//@route        GET api/jobs
//@description  GET all users jobs
//@access       PRIVATE 

router.get('/', auth, async (req, res) => {
    try {
        const jobs = await Job.find({ user: req.user.id }).sort({ date: -1 });
        res.json(jobs);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

//@route        POST api/jobs
//@description  Add new job
//@access       Private

router.post('/', [auth, [
    check('name', 'Name is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, role, jobType, description } = req.body;
    try {
        const newJob = new Job({
            name, role, jobType, description, user: req.user.id
        });

        const job = await newJob.save();
        res.json(job);

    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

//@route        PUT api/jobs/:id
//@description  Update job
//@access       Private

router.put('/:id', auth, async (req, res) => {
    const { name, role, jobType, description } = req.body;
    //build a job object

    const jobFields = {};
    if (name) jobFields.name = name;
    if (name) jobFields.email = role;
    if (name) jobFields.jobType = jobType;
    if (name) jobFields.description = description;

    try {
        let job = await Job.findById(req.params.id);

        if (!job) return res.status(404).json({ msg: 'job not found' });

        //make sure user owns job
        if (job.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not Authorized' });
        }
        job = await Job.findByIdAndUpdate(req.params.id,
            { $set: jobFields },
            { new: true });

    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

})

//@route        DELETE api/jobs/:id
//@description  Delete job
//@access       Private

router.delete('/:id', auth, async (req, res) => {
    try {
        let job = await Job.findById(req.params.id);

        if (!job) return res.status(404).json({ msg: 'Job not found' });

        //make sure user owns job
        if (job.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not Authorized' });
        }
        await Job.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Job Removed' });

    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})



module.exports = router;