<template>
  <section class="web-app-container">
    <header>
      <h1>Multiplication Table Project</h1>
      <h3>Create your own multiplication table!</h3>

      <nav>
        <router-link to="/">Home</router-link>

        <router-link :to="{ name: 'Home'} ">Go to home</router-link>

        <router-link :to="{ name: 'AboutMe'} ">About Me</router-link>

        <router-link :to="{ name: 'multiplication-table'} ">Multiplication Table</router-link>

      </nav>
    </header>

    <section class="page-content">
      <router-view/>
    </section>

    <footer>
      <p>Created by Alex 2025</p>
    </footer>
  </section>
</template>

<style scoped>
section.web-app-container {
  max-width: 80%;
  border: 1px solid black;
  margin: 0 auto;

  header {
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
  }

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

</script>
