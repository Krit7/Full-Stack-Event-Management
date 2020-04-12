import login from '../components/login.vue'
import register from '../components/register.vue'
import landing from '../components/landing.vue'
import newForm from '../components/newForm.vue'

const isloggedIn=(req,res,next)=>{
    if(localStorage.getItem('jwtToken')){
        next();
        return
    }
    else{
        next('/auth/login');
    }
}


const isNotloggedIn=(req,res,next)=>{
    if(!localStorage.getItem('jwtToken')){
        next();
        return
    }
    else{
        next('/');
    }
}

export const routes = [
    {
        path :'/',
        name: 'Landing',
        component:landing
    },
    {
        path :'/newevent',
        name: 'Form',
        beforeEnter: isloggedIn,
        component:newForm,
        props: true
    },
    {
        path: '/auth/register',
        name: 'Register',
        beforeEnter: isNotloggedIn,
        component: register
    },
    {
        path: '/auth/login',
        name: 'Login',
        beforeEnter: isNotloggedIn,
        component: login
    }

]

