<template>
  <div class="about">
    <CompositionAPI />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CompositionAPI from "@/components/CompositionAPI.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Abount",
  components: {
    CompositionAPI
  }
});
</script>
