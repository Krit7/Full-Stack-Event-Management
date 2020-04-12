const Event = require('../models/event')
const getToken = require('../config/authCheck')
getEvents = (req, res) => {
    Event.find({}, (err, events) => {
        if (err) {
            console.log(err)
        } else {
            res.send(events)
        }
    });
}

addEvent = (req, res) => {
    const event = req.body.event
    const token = getToken(req.headers)
    // console.log(token)
    if (token) {
        Event.create(event, (err, event) => {
            if (err) {
                console.log(err)
            } else {}
        });
    } else {
        res.status(403).send({
            success: false,
            msg: 'Unauthorized.'
        });
    }

}

module.exports = {
    getEvents,
    addEvent
}