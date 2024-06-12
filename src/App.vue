<template>
  <nav>
    <router-link to="/signup">SignUp</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
  <router-view />
</template>

<!-- <script>

export default {
  name: 'App',
  // data() {
  //   return {
  //     private: false
  //   }
  // },
  computed: {
    isVisible( pathName ) {
      const route = this.$router.options.routes.find(route => route.name === pathName );
      console.log(route.meta.login);
      return route.meta.login
    }
  }
}



</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
