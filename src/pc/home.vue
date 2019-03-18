<template>
	<div>
		<v-nav></v-nav>
	</div>
</template>
<script>
import nan from '@/components/com/nav-pc'		
import {mapState, mapGetters, mapActions} from 'vuex'
import https from '@/https/index'

export default{
	name: 'home',
	data () {
		return {
		}
	},
	components:{
		'v-nav':nan
	},
	mounted(){
	 },	
	computed:{
	    ...mapGetters(['leftbaron','menulist'])	
	},
	methods:{
	}
}
</script>
<style scoped>
.home{padding:5rem 0;font-size:2rem; text-align:center;color:#666;}

</style>