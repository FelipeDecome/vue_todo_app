<template>
  <Todos />
</template>

<script lang="ts">
import Vue from 'vue';
import Todos from '../components/Todos.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Todos,
  },
});
</script>

<style lang="sass">
</style>
