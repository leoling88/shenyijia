<template>
	<div class="nav-warp">
		<nav class="nav-1">
			<div class="logo"></div>
			<div class="lis-1">
				<ul>
					<li>首页</li>
					<li>产品</li>
					<li>案例</li>
					<li>服务</li>
					<li>新闻</li>
					<li>关于我们</li>
				</ul>
			</div>
			<div class="lis-2">
				<span>1</span>
				<span>2</span>
				<span>3</span>
			</div>			
		</nav>


	</div>
</template>
<script>
	export default {
		name:'v-nav',
		data () {
			return {
			}

		},
		props: {
		},
		computed: {
		},
		methods: {
	
		},
	    mounted(){
	    },
	    watch:{

	    },

	}
</script>
<style scoped>
.nav-warp{width:100%;max-width:60rem;margin:0 auto;position: relative;}
.nav-1{width:100%;position: absolute;top:1rem;left:0;}
.logo{float:left;width:6.3rem;height:2.2rem;border:1px solid  #000;}
.lis-1{float:left;padding-left:3rem;}
.lis-1 li{float:left;padding:.5rem 1rem;font-size:.8rem;}
.lis-2{float:right;}
.lis-2 span{display:inline-table;height:.2.2rem;border:1px solid #ccc;}
</style>