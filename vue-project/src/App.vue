<template>
  <section class="web-app-container">
    <header>
      <h1>Multiplication Table Project</h1>
      <h3>Create your own multiplication table!</h3>

      <navbar></navbar>

    </header>

    <section class="page-content">
      <router-view/>
    </section>

    <footer>
      <navbar></navbar>
      <p>Created by Alex 2025</p>
    </footer>
  </section>
</template>

<style scoped>
section.web-app-container {
  max-width: 80%;
  border: 1px solid black;
  margin: 0 auto;

  section.page-content {
    background-color: lightgrey;

  }

  footer {
    p {
      text-align: center;
    }
  }
}
</style>
<script setup lang="ts">

import Navbar from "@/components/Navbar.vue";
</script>
