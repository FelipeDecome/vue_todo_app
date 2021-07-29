<template>
  <li class="list-group-item d-flex justify-content-between">
    <span>{{ task }}</span>
    <button class="btn btn-sm btn-danger" @click="$emit('remove-task', todoId)">
      Remover
    </button>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoItem',
  props: {
    todoId: String,
    task: String,
  },
});
</script>
