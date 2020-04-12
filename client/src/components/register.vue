<template>
  <section>
    <nav-bar></nav-bar>
    <b-row class="justify-content-md-center">
      <b-col cols="6">
        <h2>Please Register</h2>
        <div v-if="errors && errors.length">
          <div v-for="(error,i) of errors" :key="i">
            <b-alert show>{{error.msg}}</b-alert>
          </div>
        </div>
        <b-form @submit="onSubmit">
          <b-form-group horizontal :label-cols="4" breakpoint="md" label="Enter Username">
            <b-form-input id="username" v-model.trim="register.username"></b-form-input>
          </b-form-group>
          <b-form-group horizontal :label-cols="4" breakpoint="md" label="Enter Password">
            <b-form-input type="password" id="password" v-model.trim="register.password"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Register</b-button>
          <b-button type="button" variant="success" @click="$router.go(-1)">Cancel</b-button>
        </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import navBar from "./navbar";
import userApi from "../services/userApi";

export default {
  name: "Register",
  data() {
    return {
      register: {},
      errors: []
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      userApi.register(this.register, this.errors, this.$router);
    }
  },
  components: {
    navBar: navBar
  }
};
</script>