<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Idle Heroes</span>
        <span class="font-weight-light">Utility</span>
      </v-toolbar-title>

    </v-app-bar>

    <v-content>
      <LoadJson/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import LoadJson from './components/LoadJson';

export default {
  name: 'App',
  components: {
    HelloWorld,
    LoadJson
  },
  data: () => ({
    //
  }),
};
</script>
