<template>
  <section>
    <nav-bar></nav-bar>
    <b-row>
      <b-col md="2"></b-col>
      <b-col md="8">
        <div>
          <b-row>
            <b-col md="2"></b-col>
            <b-col md="8">
              <div class="form-div">
                <h1>New Event</h1>
                <div v-if="errors && errors.length">
                  <div v-for="(error,i) of errors" :key="i">
                    <b-alert show>{{error}}</b-alert>
                  </div>
                </div>
                <b-form>
                  <div class="input-div">
                    <b-form-group id="title" label="Title:" label-for="title" description>
                      <b-form-input
                        id="title"
                        v-model="title"
                        type="text"
                        required
                        placeholder="Title"
                      ></b-form-input>
                    </b-form-group>
                  </div>

                  <div class="input-div">
                    <label for="description">Description:</label>
                    <b-form-textarea
                      id="description"
                      v-model="description"
                      type="text"
                      required
                      placeholder="Description"
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </div>

                  <div class="input-div">
                    <b-form-group id="by" label="Organized By:" label-for="by" description>
                      <b-form-input
                        id="by"
                        v-model="by"
                        type="text"
                        required
                        placeholder="Organized By:"
                      ></b-form-input>
                    </b-form-group>
                  </div>

                  <div class="input-div">
                    <b-form-group id="place" label="Location:" label-for="place" description>
                      <b-form-input
                        id="place"
                        v-model="place"
                        type="text"
                        required
                        placeholder="Location"
                      ></b-form-input>
                    </b-form-group>
                  </div>

                  <b-button type="submit" variant="primary" @click="onSubmit">Submit</b-button>
                  <router-link to="/">
                    <b-button type="cancel" variant="danger">Cancel</b-button>
                  </router-link>
                </b-form>
              </div>
            </b-col>
            <b-col md="2"></b-col>
          </b-row>
        </div>
      </b-col>
      <b-col md="2"></b-col>
    </b-row>
  </section>
</template>

<script>
import eventsApi from "../services/eventsApi";
import navBar from "./navbar";
export default {
  data() {
    return {
      title: "",
      description: "",
      by: "",
      place: "",
      errors: []
    };
  },
  methods: {
    onSubmit() {
      if (!this.title || !this.description || !this.by || !this.place) {
        this.errors.push("Complete The Form Details");
      } else {
        this.errors = [];
        const event = {
          title: this.title,
          description: this.description,
          by: this.by,
          place: this.place
        };
        eventsApi.createEvent(event);
        this.$router.push({
          name: "Landing"
        });
      }
    }
  },
  components: {
    navBar: navBar
  }
};
</script>

<style scoped>
</style>