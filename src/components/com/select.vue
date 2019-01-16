<template>
	<div class="select-1">
		<div class="select-1-tab " @click="selectShow">
			<slot name="label">请选择</slot>
			<span class="fr icon-1"><i class="icon-arrow-right"></i></span>
			<span v-text="selectDatas.value" class="fr value cor-black" ></span>
			
		</div>
		<div class="select-bg" v-show="selectDatas.show"></div>
		<div class="select-show"  v-if="selectDatas.show">
			<div class="title">选择 <span class="fr colorBlack" @click="selectClose">关闭</span></div>
			<div class="selcet">
				<ul>
					<li v-for="item in selectDatas.lists"  @click="optionClick(item.key, item.value)" :class="{hover:selectDatas.hover == item.key}"><span class="icon"><i></i></span><span v-text="item.value"></span></li>
				</ul>
			</div>
		</div>





	</div>
</template>
<script>
	export default {
		name:'v-select',
		data () {
			return {
			}

		},
		props: {
			selectDatas:Object,
		},
		computed: {
		},
		methods: {
			optionClick (key, value) {
				this.selectDatas.hover = key
				this.selectDatas.key = key
				this.selectDatas.value = value
	            this.$emit('optionclick');
			},
			selectShow () {
	            this.$emit('selectshow');
			},
			selectClose () {
				this.selectDatas.show = false

			}

		},
	    mounted(){
	    },
	    watch:{
	    },

	}
</script>
<style scoped>

</style>