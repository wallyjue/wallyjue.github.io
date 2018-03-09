<template>
<v-app id="app">
  <app-header></app-header>
  <v-container>
    Container
  </v-container>
  <router-view/>
</v-app>    
</template>

<script>
import Vuetify from 'vuetify'
import AppHeader from "./components/AppHeader.vue";

export default {
  name: 'App',
  components:{
    'app-header': AppHeader
  },
}
</script>

