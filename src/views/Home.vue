<template>
  <div class="container">
    <div class="row justify-content-center pb-4">
      <div class="col-6">
        <h1 class="mb-4">Welcome,</h1>
        <h4 v-if="!tasksQuantity">Start creating your tasks!</h4>
        <h4 v-else>
          You have <span class="text-green">{{ tasksQuantity }} tasks</span> to
          complete!
        </h4>
      </div>
    </div>

    <div class="row justify-content-center pb-5">
      <div class="col-6">
        <p class="col-10 px-4 text">
          Lorem ipsum dolor sit amet,
          <span class="text-highlight">consectetur adipiscing elit</span>.
          Pellentesque facilisis eros id dignissim molestie. Curabitur nec dui
          ac mauris lobortis rutrum bibendum pulvinar nulla. Proin commodo eros
          ipsum, cursus dapibus orci ullamcorper vel. Etiam vitae vestibulum
          nisi. Vivamus gravida dignissim ante non semper. In mollis nec risus
          non facilisis.
          <span class="text-highlight"
            >Phasellus scelerisque ex non urna lacinia</span
          >, quis facilisis nisi faucibus. Quisque eget erat ac nibh convallis
          sodales ut a nisl.
        </p>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-6">
        <router-link class="btn btn-lg button-green px-5" to="/Tasks" exact>
          Open Your Tasks
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Home',
  computed: mapGetters(['tasksQuantity']),
});
</script>

<style lang="scss">
.button-green {
  color: #fff;
  background-color: #3aa346;
  border-color: #3aa346;

  &:hover {
    color: #fff;
    background-color: #1e8c45;
    border-color: #1e8c45;
  }
}

.btn-group .btn {
  flex: 1;
}

.text-green {
  color: #1e8c45;
}

.text {
  text-align: justify;
}

.text-highlight {
  background: #c1ff1c;
}
</style>
