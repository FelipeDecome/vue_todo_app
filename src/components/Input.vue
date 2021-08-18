<template>
  <input
    type="text"
    id="input-todo"
    class="form-control"
    v-model="input"
    @keydown.enter.prevent="handleAddTask"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'Input',
  computed: {
    input: {
      get() {
        return this.$store.state.input;
      },
      set(value: string) {
        this.$store.state.input = value;
      },
    },
  },
  methods: mapActions(['handleAddTask']),
});
</script>
