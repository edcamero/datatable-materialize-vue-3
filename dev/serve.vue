<script lang="ts">
import { defineComponent } from 'vue';
import DatatableVue3 from '@/datatable-vue3.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    DatatableVue3
  }
});
</script>

<template>
  <div id="app">
    <datatable-vue3 />
  </div>
</template>
