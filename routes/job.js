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
    const id = req.user.id;
    const jid = req.params.jid;
    console.log(`this is the user id from req.user.id:
    ${id}`);
    try {
        const jobs = await Job.find({ user: id }).sort({ date: -1 });
        res.json(jobs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})


//@route        GET api/jobs/jid
//@description  GET one job from the user
//@access       PRIVATE 

router.get('/:jid', auth, async (req, res) => {
    const id = req.user.id;
    const jid = req.params.jid;
    console.log(`this is the user id from req.user.id:
    ${id}`);
    console.log(`this is the job id from req.params.jid:
    ${jid}`);
    try {
        const jobs = await Job.find({ user: id, _id: jid });
        console.log(jobs);
        res.json(jobs);
    } catch (err) {
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

    } catch (err) {
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
        let j = await Job.findByIdAndUpdate(job, jobFields, { new: true });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

})

//@route        DELETE api/job/:id
//@description  Delete job
//@access       Private

router.delete('/:id', auth, async (req, res) => {
    try {
        console.log('Delete Job Request Recieved');

        let job = await Job.findById(req.params.id);

        if (!job) return res.status(404).json({ msg: 'Job not found' });

        //make sure user owns job
        if (job.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not Authorized' });
        }
        await Job.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Job Removed' });
        console.log('Job Removed');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})



module.exports = router;