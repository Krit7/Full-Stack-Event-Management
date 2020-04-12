<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container fluid>
        <b-navbar-brand>
          <router-link to="/" class="link">Events</router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-show="!isLoggedIn">
              <router-link to="/auth/login" class="link">Login</router-link>
            </b-nav-item>

            <b-nav-item v-show="!isLoggedIn">
              <router-link to="/auth/register" class="link">Register</router-link>
            </b-nav-item>
            <b-nav-item v-show="isLoggedIn" @click="onLogout">
              Log Out
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },computed:{
        isLoggedIn: function(){
            return localStorage.getItem('jwtToken')
        }
    },methods:{
        onLogout(){
            localStorage.removeItem('jwtToken')
            this.$router.push({
                name : "Login"
            })
        }
    }
}
</script>


<style scoped>
.link{
    color: white;
    text-decoration: none;
}
</style>