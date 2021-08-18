<template>
  <div class="container">
    <div class="row mb-4 justify-content-center">
      <form class="col-8">
        <label for="input-todo" class="form-label">Enter a new Task:</label>
        <Input />
      </form>
    </div>

    <div class="row mb-4 justify-content-center">
      <List
        :items="tasks"
        ref="list"
      >
        <template v-slot="props">
          <TaskItem
            :todoId="props.item.id"
            :task="props.item.task"
            :key="props.item.id"
            class="list-item"
          />
        </template>
      </List>
    </div>

    <div
      v-if="$refs.list && $refs.list.totalPages > 1"
      class="row justify-content-center"
    >
      <div class="btn-group col-2" role="group" aria-label="Pagination">
        <button
          type="button"
          class="btn button-green"
          v-if="$refs.list && $refs.list.page !== 1"
          @click="$refs.list.previousPage"
        >
          Previous
        </button>
        <button
          type="button"
          class="btn button-green"
          v-if="$refs.list.page !== $refs.list.totalPages"
          @click="$refs.list.nextPage"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { TTask } from '@/store';
import List from '@/components/List.vue';
import TaskItem from '@/components/TaskItem.vue';
import Input from '@/components/Input.vue';

type TComputed = {
  tasks: TTask[],
};

export default Vue.extend<unknown, unknown, TComputed>({
  name: 'Todos',
  components: {
    TaskItem,
    Input,
    List,
  },
  computed: {
    tasks: mapState(['tasks']).tasks,
  },
});
</script>

<style lang="scss">
.list {
  position: relative;
  padding-right: 0;
  margin-bottom: 0;
}

.list-item {
  transition: transform 0.4s, opacity 0.2s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
}

.list-enter-to {
  opacity: 1;
}

.list-enter,
.list-leave-to {
  transform: translateY(32px);
}

.list-leave-active {
  position: absolute;
  width: 100%;
}

.list-item.list-move {
  border-top-width: 1px;
}
</style>
