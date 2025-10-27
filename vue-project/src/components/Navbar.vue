<script setup lang="ts">

</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>

    <router-link :to="{ name: 'Home'} ">Go to home</router-link>

    <router-link :to="{ name: 'AboutMe'} ">About Me</router-link>

    <router-link :to="{ name: 'MultiplicationTable'} ">Multiplication Table</router-link>
  </nav>
</template>

<style scoped>
  nav{
    display: flex;
    gap: 15px;
    justify-content: center;
    /* code here would apply to content of nav/links */

    a{
      text-decoration: none;

      &.router-link-active {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }

</style>
