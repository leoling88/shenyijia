<template>
	<div class="select-1">
		<div class="select-1-tab " @click="selectShow">
			<slot name="label">请选择</slot>
			<span class="fr icon-1" ><i class="icon-arrow-right" ></i></span>
			<span v-text="selectDatas.value1 + selectDatas.value2 + selectDatas.value3" class="fr value cor-black" ></span>
		</div>
		<div class="select-bg" v-show="selectDatas.show"></div>
		<div class="select-show3" :class="{'show':selectDatas.show}">
			<div class="title">选择 <span class="fr colorBlack" @click="selectClose">关闭</span></div>
			<div class="con">
				<div class="bgup"></div>
				<div class="bgdown"></div>
				<div class="selcetbox left0"  @touchstart="touchStart($event, 1)" @touchmove="touchMove" @touchend="touchEnd">   <!--//滑动区1-->
				</div>
				<div class="selcetbox left33"  @touchstart="touchStart($event, 2)" @touchmove="touchMove" @touchend="touchEnd">   <!--//滑动区2-->
				</div>
				<div class="selcetbox left66"  @touchstart="touchStart($event, 3)" @touchmove="touchMove" @touchend="touchEnd">   <!--//滑动区3-->
				</div>
				<div class="selcet">
					<div class="selcet-hover" ref="vernier" ><i ></i></div>
					<ul  :style="{'transform': 'translate3d(0,'+selectDatas.scrollTop1 +'px, 0)'}" ref="selcetHieght1" class="left0" >
						<li v-for="(item, index) in selectDatas.lists.list1"  :class="{hover:selectDatas.hover == index}"><span v-text="item.name" class="value" ></span></li>
					</ul>						
					<ul  :style="{'transform': 'translate3d(0,'+selectDatas.scrollTop2 +'px, 0)',}" ref="selcetHieght2"  class="left33" >
						<li v-for="(item, index) in selectDatas.lists.list2"   :class="{hover:selectDatas.hover == index}"><span v-text="item.name" class="value"></span></li>
					</ul>						
					<ul  :style="{'transform': 'translate3d(0,'+selectDatas.scrollTop3 +'px, 0)',}" ref="selcetHieght3"  class="left66">
						<li v-for="(item, index) in selectDatas.lists.list3"  :class="{hover:selectDatas.hover == index}"><span v-text="item.name" class="value"></span></li>
					</ul>						
				</div>
			</div>

		</div>





	</div>
</template>
<script>
	let vernierTop   //游标位置
	let _height1   //列表内容 高度
	let _page1     //列表条数
	let _pageHeight1     //列表行高
	let _height2   //列表内容 高度
	let _page2     //列表条数
	let _pageHeight2     //列表行高
	let _height3   //列表内容 高度
	let _page3     //列表条数
	let _pageHeight3     //列表行高
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

		    touchStart(e, index) {
		    	const touch = e.touches[0]
		    	this.selectDatas.touchhover = index
		    	if(index == 1) {
			    	_page1 = this.selectDatas.lists.list1.length  //列表数
			    	_height1 = this.$refs.selcetHieght1.offsetHeight	   //列表内容高度	
			    	_pageHeight1 = _height1/_page1
		    	}else if(index == 2) {
			    	_page2 = this.selectDatas.lists.list2.length  //列表数
			    	_height2 = this.$refs.selcetHieght2.offsetHeight	   //列表内容高度
			    	_pageHeight2 = _height2/_page2	
		    	}else if(index == 3) {
			    	_page3 = this.selectDatas.lists.list3.length  //列表数
			    	_height3 = this.$refs.selcetHieght3.offsetHeight	   //列表内容高度	
			    	_pageHeight3 = _height3/_page3
		    	}
			    this.selectDatas.startY = touch.pageY		    		
		    	

		    },
		    touchMove(e) {
				const touch = e.touches[0]
				this.selectDatas.endY = touch.pageY

		    },
		    touchEnd() {
		    	let dist =  Math.abs(this.selectDatas.endY - this.selectDatas.startY)
		    	let _dist
					if(this.selectDatas.touchhover == 1){    //选择省份直辖市
						dist = dist/_pageHeight1
						if(this.selectDatas.endY > this.selectDatas.startY && this.selectDatas.scrollTop1 < 0){
							console.log('向下滑')
							this.selectDatas.scrollTop1 += Math.round(dist) * _pageHeight1
							if(this.selectDatas.scrollTop1 > 0 ){
								this.selectDatas.scrollTop1 = 0
							}
						}else if(this.selectDatas.endY < this.selectDatas.startY && this.selectDatas.scrollTop1 > -(_height1 - _pageHeight1)){
							console.log('向上滑')
							this.selectDatas.scrollTop1 -= Math.round(dist) * _pageHeight1
							if(this.selectDatas.scrollTop1 < -(_height1 - _pageHeight1)){
								this.selectDatas.scrollTop1 = -(_height1 - _pageHeight1)
							}

						}
						_dist =  Math.abs(Math.round(this.selectDatas.scrollTop1/_pageHeight1))

						console.log('hover1位置===>' +_dist )   //当前hover位置
		    			this.selectDatas.hover1 =  _dist     //选中定位
		    			this.selectDatas.value1 = this.selectDatas.lists.list1[_dist].name  //选中赋值
		    			this.selectDatas.key1 = this.selectDatas.lists.list1[_dist].code  //选中赋值
		    			this.selectDatas.value2 = this.selectDatas.lists.list1[_dist].children[0].name  //选中赋值
		    			this.selectDatas.key2 = this.selectDatas.lists.list1[_dist].children[0].code  //
		    			this.selectDatas.value3 = this.selectDatas.lists.list1[_dist].children[0].children[0].name  //选中赋值
		    			this.selectDatas.key3 = this.selectDatas.lists.list1[_dist].children[0].children[0].code  //		    			

		    			this.getaddressSQ(_dist, '0') 

					}
					else if(this.selectDatas.touchhover == 2){ //选择/区
						dist = dist/_pageHeight2
						if(this.selectDatas.endY > this.selectDatas.startY && this.selectDatas.scrollTop2 < 0){
							console.log('向下滑')
							this.selectDatas.scrollTop2 += Math.round(dist) * _pageHeight2
							if(this.selectDatas.scrollTop2 > 0 ){
								this.selectDatas.scrollTop2 = 0
							}
						}else if(this.selectDatas.endY < this.selectDatas.startY && this.selectDatas.scrollTop2 > -(_height2 - _pageHeight2)){
							console.log('向上滑')
							this.selectDatas.scrollTop2 -= Math.round(dist) * _pageHeight2
							if(this.selectDatas.scrollTop2 < -(_height2 - _pageHeight2)){
								this.selectDatas.scrollTop2 = -(_height2 - _pageHeight2)
							}

						}
						_dist =  Math.abs(Math.round(this.selectDatas.scrollTop2/_pageHeight2))	
						console.log('hover2位置===>' +_dist )   //当前hover位置
		    			this.selectDatas.hover2 =  _dist     //选中定位

		    			this.selectDatas.value2 = this.selectDatas.lists.list2[_dist].name  //选中赋值
		    			this.selectDatas.key2 = this.selectDatas.lists.list2[_dist].code  //选中赋值		
		    			this.selectDatas.value3 = this.selectDatas.lists.list2[_dist].children[0].name  //选中赋值
		    			this.selectDatas.key3 = this.selectDatas.lists.list2[_dist].children[0].code  //

		    			this.getaddressQX(_dist) 				
					}
					else if(this.selectDatas.touchhover == 3){ //选择街镇
						dist = dist/_pageHeight3
						if(this.selectDatas.endY > this.selectDatas.startY && this.selectDatas.scrollTop3 < 0){
							console.log('向下滑')
							this.selectDatas.scrollTop3 += Math.round(dist) * _pageHeight3
							if(this.selectDatas.scrollTop3 > 0 ){
								this.selectDatas.scrollTop3 = 0
							}
						}else if(this.selectDatas.endY < this.selectDatas.startY && this.selectDatas.scrollTop3 > -(_height3 - _pageHeight3)){
							console.log('向上滑')
							this.selectDatas.scrollTop3 -= Math.round(dist) * _pageHeight3
							if(this.selectDatas.scrollTop3 < -(_height3 - _pageHeight3)){
								this.selectDatas.scrollTop3 = -(_height3 - _pageHeight3)
							}

						}
						_dist =  Math.abs(Math.round(this.selectDatas.scrollTop3/_pageHeight3))	
		    			this.selectDatas.hover3 =  _dist     //选中定位
		    			this.selectDatas.value3 = this.selectDatas.lists.list3[_dist].name  //选中赋值
		    			this.selectDatas.key3 = this.selectDatas.lists.list3[_dist].code  //选中赋值						
					}

		    },
	        getaddressSQ(code1, code2) { //获取城市
	        	this.selectDatas.lists.list2 = this.selectDatas.lists.list1[code1].children
	        	this.getaddressQX(code2)
	        	this.selectDatas.scrollTop2 = 0   //初始化位置
	        },
	        getaddressQX(code) { //获取区县
	        	this.selectDatas.lists.list3 = this.selectDatas.lists.list2[code].children
	        	this.selectDatas.scrollTop3 = 0   //初始化位置
	        },

		},
	    mounted(){		        	
        	this.selectDatas.scrollTop1 = -(this.selectDatas.hover1 * this.$refs.vernier.offsetHeight + 5)    //默认位置
        	this.getaddressSQ(18, 0)
	    },
	    watch:{



		'selectDatas': {
		    handler(newName, oldName) {
		      console.log(this.selectDatas)
		    },
		    immediate: true,
		    deep: true
		}


		},

	}
</script>
<style scoped>
</style>