<script setup>
import { useRoute } from "vue-router";
import portfolioData from '@/data/portfolio.json';

const route = useRoute()
const itemData = portfolioData.filter(portfolioThing => portfolioThing.id === number(route.params.portfolioId));
</script>

<template>
<div v-if="itemData">
  <div class="top-line">
    <h1>{{ itemData.title }}</h1>
    <img :src="itemData.thumbnail">
  </div>
</div>

  <p v-else>Sorry, this project doesn't exist!</p>

</template>

<style scoped>
.top-line {
  display: flex;
  justify-content: space-between;
  border: 5px solid mediumslateblue;
}
</style>
