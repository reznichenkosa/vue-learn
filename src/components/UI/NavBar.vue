<template>
  <header class="navbar">
    <div class="container">
      <div class="wrapper">
        <h2 class="logo" @click="$router.push('/')" >Vue</h2>
        <div>
          <custom-btn @click="$router.push('/posts')" class="me-10">Posts</custom-btn>
          <custom-btn @click="$router.push('/about')" >About</custom-btn>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CustomBtn from "./CustomBtn.vue";
export default {
  components: { CustomBtn },
};
</script>

<style>
.navbar {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}

.wrapper {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.me-10 {
  margin-right: 10px;
}
.logo {
  cursor: pointer;
}
</style>