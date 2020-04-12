<template>
  <section>
    <nav-bar></nav-bar>
    <b-row class="justify-content-md-center">
      <b-col cols="6">
        <h2>Login</h2>
        <div v-if="errors && errors.length">
          <div v-for="(error,i) of errors" :key="i">
            <b-alert show>{{error.msg}}</b-alert>
          </div>
        </div>
        <b-form @submit="onSubmit">
          <b-form-group horizontal :label-cols="4" breakpoint="md" label="Enter Username">
            <b-form-input id="username" v-model.trim="login.username"></b-form-input>
          </b-form-group>
          <b-form-group horizontal :label-cols="4" breakpoint="md" label="Enter Password">
            <b-form-input type="password" id="password" v-model.trim="login.password"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Login</b-button>
          <b-button type="button" variant="success" @click.stop="register()">Register</b-button>
        </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import navBar from "./navbar";
import userApi from "../services/userApi";

export default {
  name: "Login",
  data() {
    return {
      login: {},
      errors: []
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      userApi.login(this.login, this.errors, this.$router, localStorage);
    },
    register() {
      this.$router.push({
        name: "Register"
      });
    },
    checkErrors(){
      if(this.$route.params!=''){
        const err={
          success:'false',
          msg: 'You Need To Login First To Add New Events'
        }
        this.errors.push(err)
      }
    }
  },mounted(){
    this.checkErrors()
  },
  components: {
    navBar: navBar
  }
};
</script>