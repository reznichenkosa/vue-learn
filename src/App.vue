<template>
  <div class="app">
      <nav-bar />
      <main>
          <router-view></router-view>
      </main>
  </div>
</template>

<script>
import NavBar from './components/UI/NavBar.vue'
export default {
  components: { NavBar },

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    color: darkslategray;
    overflow-y: scroll;
}

.container {
    max-width: 900px;
    padding: 0px 30px;
    margin: 0 auto;
}

.title {
    margin-top: 20px;
}

.title-dialog {
    margin-top: 10px;
}

.center {
    text-align: center;
}

.preloader {
    margin-top: 20px;
}

main {
    padding: 30px 0;
}
</style>