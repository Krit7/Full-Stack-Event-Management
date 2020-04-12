const mongoose= require('mongoose')
const Event=require('./models/event')

mongoose.connect("mongodb://localhost/events", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Connected')
}).catch(err => {
    console.error('Database starting error:', err.stack);
});

const events=[
    {
        title: 'Event 1',
        description: 'Any',
        by: 'HubX',
        place: 'Delhi'
    },
    {
        title: 'Event 2',
        description: 'Nothing',
        by: 'Anonymous',
        place: 'Noida'
    },
    {
        title: 'Event 3',
        description: 'None',
        by: 'Someone',
        place: 'Gurugram'
    }
]
// Event.remove({},(err,success)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Successfully Removed Previous")
//     }
// });

Event.create(events,(err,events)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Successfully Added New")
    }
})

