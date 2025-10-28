<script setup>
const props = defineProps({
  linkText: {
    type: String,
    required: true,
    default: 'My Button'
  },
  routeName: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: false,
    default: 'secondary'
  }
})
</script>

<template>
<router-link
  :to="{ name: props.routeName}"
  :class="props.theme"
>
  {{ props.linkText}}
</router-link>

</template>

<style scoped>
a {
  border: 1px solid mediumslateblue;
  padding: 5px;
  background-color: mediumslateblue;
  color: mediumslateblue;
  border-radius: 4px;

  &:hover {
    background-color: mediumslateblue;
    color: lemonchiffon;
  }

  &.primary {
    font-size: 150%;
    padding: 20px;
  }
}
</style>
