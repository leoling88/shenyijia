<template>
	<div class="swipe-wrap" :style="{'width':swinperView.width + 'px'}" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" ref="back">
		<div class="swipe-box" :style="{'width':swinperView.ulWidth + 'px','transform': 'translate3d('+swinperView.left +'px, 0, 0)','background':'#000'}">
			<div class="lists">
				<ul >
					<li v-for="(item, index) in swiperLists" :style="{'width':swinperView.width + 'px'}" ><router-link to=""><img :src="item.imageUrl" alt=""/></router-link></li> <!-- @click.stop="clickView(index)">-->
				</ul>
			</div>
		</div>
		<div class="title" v-show="swinperView.titleShow">{{swinperView.title}}</div>
		<div class="page">
			<div class="page-view">
				<span v-for="(item, index) in swiperLists" @click="clickSwinper(index)">
				</span>
			</div>
			<i :style="{'transform': 'translate3d('+swinperView.hover +'rem, 0, 0)'}"></i>
		</div>
	</div>

</template>
<script>
	let num = 0         //初始化游标
	let direction = 0        //初始滚动方向   0：向右  1：向左
	let Mdirection = ''        //初始滚动方向手势 0：向右  1：向左
	let swinperW
	let pageX 
	let page
	export default {
		name:'v-swiper',
		data () {
			return {
			}
		},
		props: {
			swiperLists: Array,
			swinperView: Object
		},
		computed: {
		},
		mounted(){
			this.swinperShow()
		    this.touch = {}
		},			
		methods: {
	        swinperShow () {

				let _this = this
				let direction = 0

				this.timer=setInterval(function(){
					swinperW = _this.swinperView.viewX         //视图偏移位置
					pageX = _this.swinperView.pageX             //游标偏移位置
					page = _this.swiperLists.length             //列表长度
					_this.swinperView.width = swinperW
					_this.swinperView.ulWidth = page * swinperW
					_this.swinperView.title = _this.swiperLists[0].title


					if(direction == 0 ) {
						if(num < (page - 1)){
							console.log(num + '--->')
							num ++
						}else {
							direction = 1
						}

					}else if( direction == 1 ){
						if (num > 0){
							console.log(num + '--->')
							num --
						}else {
							direction = 0
						}
					}
					_this.swinperView.left = '-'+num * swinperW
					_this.swinperView.hover = num * pageX					
					console.log('num=' + num + "pageX=" +pageX + 'page=' +page)
					_this.swinperView.title = _this.swiperLists[num].title							
				},5000);
				//swinper.left
	        },
	        clickSwinper (index) {
	        	direction = 0
	        	num = index
				this.swinperView.left = '-'+num * swinperW
				this.swinperView.hover = num * pageX							
				this.swinperView.title = this.swiperLists[index].title		
	        },
	        clickView(index) {
	        	//index = num
	        	alert(index)
	            //this.$emit('clickView');
	        },
		    touchStart(e) {
				const touch = e.touches[0]
				this.touch.startX = touch.pageX
				//this.touch.startY = touch.pageY
		    },
		    touchMove(e) {
				const touch = e.touches[0]
				const deltaX = touch.pageX - this.touch.startX
		      //const deltaY = touch.pageY - this.touch.startY
		      // if (Math.abs(deltaY) > Math.abs(deltaX)) {
		      //   return
		      // }
		      if (deltaX > 100) {
		      	Mdirection = 1
		      	direction = 1
		      	console.log(deltaX)
		      }else if (deltaX < -100){
		      	Mdirection = 0
		      	direction = 0
		      	console.log(deltaX)
		      }
		    },
		    touchEnd() {
				if(Mdirection == 0 ) {
					if(num < (page - 1)){
						num ++
					}
					this.swinperView.left = '-'+num * swinperW
					this.swinperView.hover = num * pageX
					Mdirection = null
				}else if( Mdirection == 1 ){
					if (num > 0){
						num --
					}
					this.swinperView.left = '-'+num * swinperW
					this.swinperView.hover = num * pageX
					Mdirection = null							
				}
				this.swinperView.title = this.swiperLists[num].title						
		    }
		},
		watch: {
            'swinperView.viewX':function(oldval, val){

            	if(oldval != val) {
					swinperW =  this.swinperView.viewX
					this.swinperView.width = swinperW
					this.swinperView.ulWidth = page * swinperW
					this.swinperView.hover = num * pageX
            	}
            },
		}
	}	
</script>
<style scoped>
.swipe-wrap{
	width:100%;
	height:200px;
	position: relative;
	overflow:hidden;
	background:#ccc;
}
.swipe-box{width:100%;position:absolute;top:0;left:0;transition: transform .38s ease-in-out,visibility .38s,-webkit-transform .38s ease-in-out;}
.swipe-box .lists li{float:left; height:10rem;}
.swipe-box .lists li img{width:100%;height:100%;}
.swipe-box .lists li:nth-child(1){background:red;}
.swipe-box .lists li:nth-child(2){background:blue;}
.swipe-box .lists li:nth-child(3){background:green;}
.swipe-box .lists li:nth-child(4){background:#000;}
.swipe-wrap .title{position:absolute;height:1.6rem;line-height:1.6rem;bottom:0;left:0; z-index:30;color:#fff;text-indent:1em;}
.swipe-wrap .page{position:absolute;bottom:.5rem;right:.5rem; }
.swipe-wrap .page span{display:block;float:left;width:.5rem;height:.5rem;margin:0 1rem 0 0;border-radius:50%;background:#fff;}
.swipe-wrap .page span:last-child{margin:0;}
.swipe-wrap .page i{ display:block; width:.6rem;height:.6rem;border-radius:50%;background:red; position:absolute;top:.05rem;left:0;transition: transform .38s ease-in-out,visibility .38s,-webkit-transform .38s ease-in-out;}
.swipe-wrap .page-view{border:1px solid #333;border-radius:3rem;padding:.05rem .01rem;background:#000;opacity:.5;overflow:hidden}
</style>v