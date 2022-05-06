<script lang="ts">
import { defineComponent } from 'vue';
import DatatableVue3 from '@/datatable-vue3.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    DatatableVue3
  },
  data() {
	return {
		columns: [
			{
				label: "Character name",
				field: "charName",
				numeric: false,
				html: false
			},
			{
				label: "First appearance",
				field: "firstAppearance",
				numeric: false,
				html: false
			},
			{
				label: "Created by",
				field: "createdBy",
				numeric: false,
				html: false
			},
			{
				label: "Voiced by",
				field: "voicedBy",
				numeric: false,
				html: false
			}
		],
		rows: [
			{
				charName: "Abu",
				firstAppearance: "Alladin (1992)",
				createdBy: "Joe Grant",
				voicedBy: "Frank Welker"
			},
			{
				charName: "Magic Carpet",
				firstAppearance: "Alladin (1992)",
				createdBy: "Randy Cartwright",
				voicedBy: "N/A"
			},
			{
				charName: "The Sultan",
				firstAppearance: "Alladin (1992)",
				createdBy: "Navid Negahban",
				voicedBy: "Douglas Seale"
			}
		],
	}
}
});
</script>

<template>
  <div id="app">
    <datatable-vue3 title="mi primera tabla" :columns="columns" :rows="rows" />
  </div>
</template>
