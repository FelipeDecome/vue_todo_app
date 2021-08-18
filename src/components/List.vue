<template>
  <div class="row mb-4 justify-content-center">
    <transition-group
      name="list"
      class="list-group col-6 list"
      tag="ul"
      v-if="items.length"
    >
      <slot
        v-for="item in displayedTasks"
        :item="item"
      />
    </transition-group>

    <p v-else class="text-center text-green">
      You don't have any tasks yet. Start by adding a new task!
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

type TProps = {
  items: unknown[];
  perPage: number;
};

type TData = {
  page: number;
};

type TView = {
  item: unknown;
};

type TComputed = {
  views: TView[];
  totalPages: number;
  displayedTasks: unknown[];
};

type TKeyHandlers = 'handleArrowRight' | 'handleArrowLeft';

type TMethods = {
  handleWindowInput: (e: KeyboardEvent) => void;
  previousPage: () => void;
  nextPage: () => void;
} & Record<TKeyHandlers, () => void>;

export default Vue.extend<TData, TMethods, TComputed, TProps>({
  name: 'List',
  props: {
    items: {
      type: Array,
      required: true,
    },
    perPage: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  created() {
    const page = Number(
      new URLSearchParams(window.location.search).get('page'),
    );

    if (page && typeof page === 'number' && !Number.isNaN(page)) { this.page = page; }
  },
  mounted() {
    window.addEventListener('keydown', this.handleWindowInput);
  },
  destroyed() {
    window.removeEventListener('keydown', this.handleWindowInput);
  },
  watch: {
    totalPages(value, oldValue) {
      if (value !== oldValue) {
        if (this.page > value) this.page = this.totalPages || 1;
        if (this.page < value) this.page = this.totalPages || 1;
      }
    },
  },
  computed: {
    views() {
      return this.items.map((item) => ({ item }));
    },
    totalPages() {
      return Math.ceil(this.items.length / this.perPage);
    },
    displayedTasks() {
      const { page, perPage } = this;

      const to = page * perPage;
      const from = to - perPage;

      return this.items.slice(from, to);
    },
  },
  methods: {
    handleWindowInput(e) {
      const handler = this[`handle${e.key}` as TKeyHandlers];

      if (typeof handler === 'function') handler();
    },
    handleArrowRight() {
      this.nextPage();
    },
    handleArrowLeft() {
      this.previousPage();
    },
    previousPage() {
      if (this.page > 1) this.page -= 1;
    },
    nextPage() {
      if (this.page < this.totalPages) this.page += 1;
    },
  },
});
</script>

<style>
</style>
