<template>
	<div class="select-1">
		<div class="select-1-tab " @click="selectShow">
			<slot name="label">请选择</slot>
			<span class="fr icon-1"><i class="icon-arrow-right"></i></span>
			<span v-text="selectDatas.value" class="fr value cor-black" ></span>
			
		</div>
		<div class="select-bg" v-show="selectDatas.show"></div>
		<div class="select-show2"  v-if="selectDatas.show">
			<div class="title">选择 <span class="fr colorBlack" @click="selectClose">关闭</span></div>
			<div class="con"  @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" >
				<div class="bgup"></div>
				<div class="bgdown"></div>
				<div class="selcet">
					<div class="selcet-hover" ref="vernier" ><i></i></div>
					<ul  :style="{'transform': 'translate3d(0,'+selectDatas.scrollTop +'px, 0)',}" ref="selcetHieght" >
						<li v-for="(item, index) in selectDatas.lists"  :class="{hover:selectDatas.hover == index}"><span v-text="item.value" ></span></li>
					</ul>
				</div>
			</div>

		</div>





	</div>
</template>
<script>
	let vernierTop   //游标位置
	let _height   //列表内容 高度
	let _page     //列表条数
	let _pageHeight     //列表行高
	export default {
		name:'v-select',
		data () {
			return {
			}

		},
		props: {
			selectDatas:Object,
			scroll:Object
		},
		computed: {
		},
		methods: {

			selectShow () {
	            this.$emit('selectshow');
				
			},
			selectClose () {
				this.selectDatas.show = false

			},
		    touchStart(e) {
		    	_page = this.selectDatas.lists.length  //列表数
		    	_height = this.$refs.selcetHieght.offsetHeight	   //列表内容高度
		    	_pageHeight = _height/_page
				const touch = e.touches[0]
				this.selectDatas.startY = touch.pageY

		    },
		    touchMove(e) {
				const touch = e.touches[0]
				this.selectDatas.endY = touch.pageY

		    },
		    touchEnd() {
				const dist = Math.abs(this.selectDatas.endY - this.selectDatas.startY)/_pageHeight
				if(this.selectDatas.endY > this.selectDatas.startY){
					console.log('向下')
					this.selectDatas.scrollTop += Math.round(dist) * _pageHeight
				}else{
					console.log('向上')
					this.selectDatas.scrollTop -= Math.round(dist) * _pageHeight
				}

    			if(this.selectDatas.scrollTop > 0)      //归零
    				this.selectDatas.scrollTop = 0
    			if(this.selectDatas.scrollTop < -(_height - _pageHeight) ){     //归末
    				this.selectDatas.scrollTop = -(_height - _pageHeight) 
    			}
				const _dist =  Math.abs(Math.round(this.selectDatas.scrollTop/_pageHeight))

    			this.selectDatas.hover =  _dist     //选中定位
    			console.log(_dist)
    			this.selectDatas.value = this.selectDatas.lists[_dist].value  //选中赋值
    			this.selectDatas.key = this.selectDatas.lists[_dist].key  //选中赋值
		    },

		},

	    mounted(){

	    },
	    watch:{
	    },

	}
</script>
<style scoped>

</style>