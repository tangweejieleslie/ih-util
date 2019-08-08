<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
        <h1>hello</h1>
        {{ enemies }}
    </v-layout>
  </v-container>
</template>

<script>
import enemies from '../data/Enemies.json'
export default {
  data: () => ({
    enemies : enemies
  }),
  methods: {

  }
};
</script>
