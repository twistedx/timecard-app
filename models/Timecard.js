const mongoose = require('mongoose');
const moment = require('moment');

const TimecardSchema = mongoose.Schema({

    job: {
        type: String
    },
    date: {
        type: String,
        require: true
    },
    clockIn: {
        type: String,
        require: true
    },
    clockOut: {
        type: String
    },
    breakIn: {
        type: String
    },
    breakOut: {
        type: String
    },
    lunchIn: {
        type: String
    },
    lunchOut: {
        type: String
    },
    comments: {
        type: String
    }

})

module.exports = mongoose.model('timecard', TimecardSchema)