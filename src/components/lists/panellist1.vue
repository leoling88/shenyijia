<template>
	<div>
		<panel v-for="(item,index) in panellist" :datas="item"></panel>
	</div>

</template>
<script>
import {mapGetters} from 'vuex'
import panel from "@/components/lists/panel.vue"
export default {
	props: {
		panellist: Array
	},
	components: {
		panel
	},
	data() {
		return {
		}
	},
	computed:{
	}
}
</script>
