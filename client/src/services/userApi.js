import Api from './api'

export default {
    login(login, errors, router, localStorage) {
        Api().post('/auth/login/', login)
            .then(res => {
                if (res.data.success) {
                    alert("Login Succesful");
                    localStorage.setItem("jwtToken", res.data.token);
                    Api().defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
                    router.push({
                        name: "Landing"
                    });
                    errors = [];
                } else {
                    errors.push(res.data)
                }
            })
            .catch(e => {
                errors.push(e)
            });
    },
    register(register, errors, router) {
        Api().post('/auth/register/', register)
            .then(res => {
                if (res.data.success) {
                    alert("Registered successfully");
                    router.push({
                        name: "Login"
                    });
                    errors = [];
                } else {

                    errors.push(res.data)
                }
            })
            .catch(e => {
                errors.push(e)
            })
    }
}