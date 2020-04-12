import Api from './api'

export default {
    getEvents(){
        return Api().get('/')
    },
    createEvent(event){
        return Api().post('/newevent',{
            event:event
        })
    }
}

