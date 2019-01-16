<template>
<div class="scroll-wrap">
	<div class="scroll-wrap-box" v-bind:style="{'transform': 'translate3d( 0,'+scrollparam.scrollTop+'px, 0)'}" @touchstart="onTouchStart($event)"  @touchmove="onTouchMove($event)"  @touchend="onTouchEnd($event)" ref="viewHeight">
		<v-listhot :panellist="listsdata"></v-listhot>
<!-- 		<v-listhot :panellist="listshot2"></v-listhot>
 -->	</div>

</div>


</template>
<script>

import {mapGetters, mapActions} from 'vuex'

import listhot from  '@/components/lists/panellist1.vue'
export default {

	data() {
		return {

		}
	},
	created:function() {

		document.body.addEventListener('touchmove' , function(e){
		    e.preventDefault();
		})		
	},
	components: {
	  'v-listhot': listhot
	},
	computed:{
		...mapGetters(['listsdata','scrollparam'])
	},
	methods:{
		...mapActions(['onTouchStart','onTouchMove','onTouchEnd'])
	}
}

</script>
<style>
@import '../../static/style/style.css';
</style>