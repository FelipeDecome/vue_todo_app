import guid from '@/utils/guid';
import Vue from 'vue';
import Vuex from 'vuex';
import config from '@/config/localStorage';

Vue.use(Vuex);

export type TTask = {
  id: string;
  task: string;
};

type TStoreState = {
  tasks: TTask[];
  input: string;
};

export default new Vuex.Store<TStoreState>({
  state: {
    tasks: [],
    input: '',
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks = payload || [];
    },
    addTask(state, payload: string) {
      state.tasks.push({
        id: guid(),
        task: payload,
      });
    },
    removeTask(state, payload: string) {
      const index = state.tasks.findIndex((task) => task.id === payload);
      state.tasks.splice(index, 1);
    },
  },
  getters: {
    tasksQuantity(state) {
      return state.tasks.length;
    },
  },
  actions: {
    handleAddTask({ commit, dispatch, state }) {
      if (state.input) {
        commit('addTask', state.input);
        dispatch('persistTasks');
      }
    },
    handleRemoveTask({ commit, dispatch }, payload: string) {
      commit('removeTask', payload);
      dispatch('persistTasks');
    },
    syncTasks({ commit }) {
      commit('setTasks', JSON.parse(localStorage.getItem(config.paths.TASKS) || ''));
    },
    persistTasks({ state }) {
      localStorage.setItem(config.paths.TASKS, JSON.stringify(state.tasks));
    },
  },
  modules: {
  },
});
