<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
			<div class="pa-4">Comercial Case</div>
    </v-navigation-drawer>
    <v-main>
      <v-container class="py-8 px-6" fluid>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script>
  export default {
    data: () => ({
      drawer: null,
    })
  }
</script>