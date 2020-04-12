<template>
  <section>
    <nav-bar></nav-bar>
    <b-row>
      <b-col md="1"></b-col>
      <b-col md="10">
        <h1>Upcoming Events:-</h1>
        <b-list-group>
          <b-list-group-item v-for="(event,id) in events" :key="id">
            <p>
              <strong>Name:-</strong>
              {{event.title}}
            </p>
            <p>
              <strong>Description:-</strong>
              {{event.description}}
            </p>
            <p>
              <strong>Hosted By:-</strong>
              {{event.by}}
            </p>
            <p>
              <strong>Location:-</strong>
              {{event.place}}
            </p>
          </b-list-group-item>
        </b-list-group>
        <div>
          <router-link :to="{name:'Form', params :{notloggedIn}}">
            <b-button variant="primary" @click="checkLoggedIn">Create New Event</b-button>
          </router-link>
        </div>
      </b-col>
      <b-col md="1"></b-col>
    </b-row>
  </section>
</template>

<script>
import eventApi from "../services/eventsApi";
import navBar from "./navbar";
export default {
  data() {
    return {
      events: [],
      notloggedIn: ""
    };
  },
  methods: {
    async getEvents() {
      const res = await eventApi.getEvents();
      this.events = res.data;
    },
    checkLoggedIn() {
      if (!localStorage.getItem("jwtToken")) {
        this.notloggedIn="You Need To Login First To Add New Events";
      }
    }
  },
  components: {
    navBar: navBar
  },
  mounted() {
    this.getEvents();
  }
};
</script>

<style  scoped>
</style>