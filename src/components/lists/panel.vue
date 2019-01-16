<template>
	<div class="lists-1" v-bind:class="{'style-1':datas.otype === '1','style-2':datas.otype === '3'}">
		<span class="title"><h2 v-text="datas.name"></h2></span>
		<span class="img"><img :src="_item" alt="" v-for="_item in datas.img"></span>
		<span class="text" v-text="datas.title"></span>
	</div>

</template>
<script>
	import {mapGetters, mapActions} from 'vuex'

	export default{
		props:{
			datas: Object
		},
		data () {
			return {}
		},
		computed:{

		}

	}

</script>
<style scoped>
.lists-1 {position: relative;border-bottom:1px solid #ccc;padding:.5rem;}
.lists-1.style-1 {height:4rem;}
.lists-1.style-1 .img{position: absolute;top:.5rem;left:.5rem;width:4rem;height:4rem;}
.lists-1.style-1 .img img{width:100%;height:100%;}
.lists-1.style-1 .title{display:block;height:2.5rem;padding-top:.5rem;padding-left:4.5rem;font-size:.7rem;color:#000;overflow:hidden;}
.lists-1.style-1 .title h2{width:100%;}
.lists-1.style-1 .text{display:block;padding-left:4.5rem;font-size:.6rem;color:#ccc;}
.lists-1.style-2 {}
.lists-1.style-2 .img{display: block;min-height:4rem;margin:.5rem 0 .3rem;text-align:center;}
.lists-1.style-2 .img img{width:33%;height:100%;margin-right:.5%;}
.lists-1.style-2 .img img:last-child{margin:0;}
.lists-1.style-2 .title{display:block;width:100%;font-size:.7rem;color:#000;}
.lists-1.style-2 .title h2{}
.lists-1.style-2 .text{display:block;font-size:.6rem;color:#ccc;}
</style>