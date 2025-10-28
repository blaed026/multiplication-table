<script setup lang="ts">

import MyButton from "@/components/MyButton.vue";
</script>

<template>
  <nav>
    <MyButton link-text="Home" route-name="Home"/>
    <MyButton link-text="About me" route-name="AboutMe"/>
    <MyButton link-text="Multiplication Table" route-name="MultiplicationTable"/>
    </nav>
</template>

<style scoped>
  nav{
    display: flex;
    gap: 15px;
    justify-content: center;

    a{
      text-decoration: none;

      &.router-link-active {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }

</style>
