<template>
  <li class="todo-item list-group-item d-flex justify-content-between">
    <span>{{ task }}</span>
    <button class="btn btn-sm btn-danger" @click="handleRemoveTask(todoId)">
      Remover
    </button>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'TaskItem',
  props: {
    todoId: String,
    task: String,
  },
  methods: mapActions(['handleRemoveTask']),
});
</script>
