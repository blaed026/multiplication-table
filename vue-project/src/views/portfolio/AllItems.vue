<script setup>
import portfolioData from '@/data/portfolio.json'
</script>

<template>
<h1>My Portfolio</h1>

  <div class="container">

    <div class="preview-card" v-for="portfolioItem in portfolioData" :key="portfolioItem.id">
      <p>{{ portfolioItem.item_title}}</p>
      <img :src="portfolioItem.thumbnail" alt="thumbanil"/>
    </div>

  </div>

</template>

<style scoped>
.container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  .preview-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid mediumslateblue;
    padding: 10px;

  }
}

</style>
