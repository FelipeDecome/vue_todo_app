<template>
  <div class="container">
    <div class="row mb-4 justify-content-center">
      <form class="col-8">
        <label for="input-todo" class="form-label">Enter a new Task:</label>
        <input
          type="text"
          id="input-todo"
          class="form-control"
          @keydown.prevent.enter="handleAddTask"
        />
      </form>
    </div>

    <div class="row justify-content-center">
      <ul v-if="todos.length" class="list-group col-6">
        <template v-for="todo in todos">
          <TodoItem
            :key="todo.id"
            :todoId="todo.id"
            :task="todo.task"
            @remove-task="handleRemoveTask"
          />
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import guid from '../utils/guid';
import TodoItem from './TodoItem.vue';

type TTodo = {
  id: string;
  task: string;
};

type TData = {
  todos: TTodo[];
};

export default Vue.extend({
  name: 'Todos',
  components: {
    TodoItem,
  },
  data(): TData {
    return {
      todos: [
        { id: guid(), task: 'Basics of View' },
        { id: guid(), task: 'Rendering lists in View' },
        { id: guid(), task: 'Components in View' },
      ],
    };
  },
  methods: {
    handleAddTask(e: KeyboardEvent) {
      const target = e.target as HTMLInputElement;
      if (target.value) {
        this.todos.push({
          id: guid(),
          task: target.value,
        });
      }
    },
    handleRemoveTask(id: string) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      this.todos.splice(index, 1);
    },
  },
});
</script>
