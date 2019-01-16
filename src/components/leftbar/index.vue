<template>
	<div class="leftbar" v-bind:style="{'transform': 'translate3d('+leftbaron.xValueL +'px, 0, 0)'}"> <!-- animation-left-in-->
		<div class="title">公众受理平台</div>
		<div>
			<ul class="ul-1 li-item">
				<li v-for="(item,index) in panellist" >
					<p class="t"  v-bind:class="{ active: item.isShow }"  @click="clickMenu(index)" ><strong v-text="item.name"></strong><i class="demoSpan1"></i></p>
					<ol class="ul-2" v-show="item.isShow">
						<li v-for="oitem in item.content" @click="goLink">
							<strong v-text="oitem.o_name"></strong>
						</li>
					</ol>

				</li>
			</ul>
		</div>

	</div>


</template>
<script>
	import {mapGetters, mapActions} from 'vuex';
	export default{
		name: 'leftbar',
		props: {
			panellist: Array
		},

		data(){
			return{
			}

		},
		created() {
		 },		
		computed:{
			...mapGetters(['menulist','leftbaron','transitionshow'])
		},
		methods:{
			...mapActions(['clickMenu']),
			goLink(){
				this.transitionshow.pngBg = false
				this.$router.push({path: 'lists'})

			}


		}
	}
</script>
<style scoped>
.leftbar{position:absolute;top:0;left:0;width:10rem;height:100%;color:#fff;background:#444;    transition: transform .38s ease-in-out,visibility .38s,-webkit-transform .38s ease-in-out;z-index:2001;}
.leftbar .title{height:2.5rem; padding:0 .5rem;font-size:.8rem;color:#fff;line-height:2.5rem;background:#333;}

.ul-1>li{border-bottom:1px solid #555;}
.ul-1 .t {position: relative;padding:.5rem .5rem .5rem 1rem; cursor:pointer;}
.ul-1 .t i{position:absolute;top:.7rem;right:.5rem;}
.ul-2>li{margin:0 1rem;padding:.5rem .5rem .5rem 1rem;border-bottom:1px dotted #555;}
.ul-2>li:last-child,.ul-1>li:last-child{border:none;}
.ul-2>li a{color:#fff;}

.demoSpan1{    transform-origin:center center;
    transform: rotate(0deg); 
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transition: transform 0.2s; 
    -moz-transition: -moz-transform 0.2s; 
    -moz-transition: -moz-transform 0.2s; 
    -o-transition: -o-transform 0.2s; 
    -ms-transition: -ms-transform 0.2s; }
.demoSpan1:before{content:''; height:.4rem; width:.6em; display:block; border:1px solid #888; border-right-width:0; border-top-width:0; transform:rotate(-135deg);-webkit-transform:rotate(-135deg);-moz-transform:rotate(-135deg);-o-transform:rotate(-135deg);-ms-transform:rotate(-135deg); }
.active{background:#666}
.active .demoSpan1{
    transform-origin:center center; 
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transition: transform 0.2s; 
    -moz-transition: -moz-transform 0.2s; 
    -moz-transition: -moz-transform 0.2s; 
    -o-transition: -o-transform 0.2s; 
    -ms-transition: -ms-transform 0.2s; 
}

</style>