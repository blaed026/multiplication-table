<script setup lang="ts"> // for Javascript //

import {ref} from 'vue';

let name = ref(null)
let rows = ref(12)
let cols = ref(12)

console.log( 'How many rows do I have?', rows.value)
</script>

<template> <!-- Html Mark up would go here -->
  <h1>My multiplication table will live here!</h1>

  <div class="inputs">

    <label for="name">
      <span>Whats your name:</span>
      <input id="name" v-model="name"/>
    </label>

    <label for="rows">
      <span>Rows</span>
      <input type="number" id="rows" v-model.number="rows"/>
    </label>

    <label for="cols">
      <span>Cols</span>
      <input type="number" id="cols" v-model.number="cols"/>
    </label>

    <p v-if="name"> Hi there {{name}}, lets build our table:</p>
    <p v-else>Hi there!</p>

    <p>You want {{rows}} rows</p>
    <p>You want {{cols}} cols</p>

    <table>
      <tr v-for="row in rows" :key="row">
        <td v-for="col in cols" :key="col">
          x
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped> /* CSS code would go here, JUST THIS DOC */
div.inputs {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    padding: 10px;
    border: 1px solid red;
    display: flex;
    gap: 15px;
  }
}
</style>


