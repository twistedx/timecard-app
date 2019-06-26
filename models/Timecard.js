const mongoose = require('mongoose');

const TimecardSchema = mongoose.Schema({

    job: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    clockIn: {
        type: Date,
        default: Date.now
    },
    clockOut: {
        type: Date
    },
    breakIn: {
        type: Date
    },
    breakOut: {
        type: Date
    },
    lunchIn: {
        type: Date
    },
    lunchOut: {
        type: Date
    },
    comments: {
        type: String
    }

})

module.exports = mongoose.model('timecard', TimecardSchema)