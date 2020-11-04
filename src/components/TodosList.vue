<template>
  <h2>TO DO</h2>
</template>

<script lang="ts">
import Vue, { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      newTask: "",
      todos: [
        { title: "task1", completed: true },
        { title: "task2", cpmpleted: false }
      ]
    });

    return state;
  }
};
</script>
