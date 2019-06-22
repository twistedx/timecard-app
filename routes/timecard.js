const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Timecard = require('../models/Timecard');

const auth = require('../middleware/auth');

//@route        GET api/timecard
//@description  GET all users timecard
//@access       PRIVATE 

router.get('/:job', auth, async (req, res) => {
    try {
        const timecard = await Timecard.find({ job: req.params.job }).sort({ date: -1 });
        res.json(timecard);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

//@route        POST api/timecard
//@description  Add new Timecard
//@access       Private

router.post('/:job', auth, async (req, res) => {
    console.log("timecard active");
    const { date, clockIn } = req.body; //job comes from frontend -- needs to be implimented
    const job = req.params.job;
    try {
        const newTimecard = new Timecard({
            job, date, clockIn
        });

        const tc = await newTimecard.save();
        res.json(tc);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

//@route        PUT api/timecard/:id
//@description  Update Timecard
//@access       Private

router.put('/:id', auth, async (req, res) => {
    const { clockOut, lunchIn, lunchOut, breakIn, breakOut } = req.body;
    const id = { _id: req.params.id} ;
    //build a Timecard object

    const TimecardFields = {};
    if (clockOut) TimecardFields.clockOut = clockOut;
    if (lunchIn) TimecardFields.lunchIn = lunchIn;
    if (lunchOut) TimecardFields.lunchOut = lunchOut;
    if (breakIn) TimecardFields.breakIn = breakIn;
    if (breakOut) TimecardFields.breakOut = breakOut;

    try {
        let tc = await Timecard.findById(id);

        console.log(tc);

        if (!tc) return res.status(404).json({ msg: 'Timecard not found' });

        let newtc = await Timecard.findOneAndUpdate(id,
            { $set: TimecardFields },
            { new: true });
            res.json(newtc);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

})

//@route        DELETE api/timecard/:id
//@description  Delete Timecard
//@access       Private

router.delete('/:id', auth, async (req, res) => {
    try {
        let tc = await Timecard.findById(req.params.id);

        if (!tc) return res.status(404).json({ msg: 'Timecard not found' });

        await Timecard.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Timecard Removed' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})



module.exports = router;