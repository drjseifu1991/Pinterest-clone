<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import TopNav from './components/TopNav.vue';
  import CardItem from './components/CardItem.vue';
  export default {
    name: 'App',
    components: {
      TopNav, CardItem
    },
    data() {
      image: './assets/profile.jpg'
    }
  }
</script>

<template>
  <top-nav/>
  <div class="px-20 ">
    <div class="w-1/5">
      <card-item v-bind:src="image" class="w-full h-full"/>
    </div>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
