const mongoose = require('mongoose');
const moment = require('moment');

const TimecardSchema = mongoose.Schema({

    job: {
        type: String
    },
    date: {
        type: String,
        default: moment().utc().format()
    },
    clockIn: {
        type: String,
        default: moment().utc().format()
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