<template>
    <div class="load-box">
    	<div class="load-in" v-show="loadupShow.loading"><img :src="loadImg" alt="">努力加载中...</div>
    	<div class="load-in" v-show="loadupShow.promputup">向上滑动加载更多</div>
    	<div class="load-in" v-show="loadupShow.promputover">没有更多数据</div>
    </div>

</template>
<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'loadup',
	    props: {
	      loadupShow: Object
	    },
		data () {
			return {
				loadImg: '../../static/img/spinning-circles.svg'
			}
		},

		computed: {
		},
		methods: {
			
		}
	}
</script>
<style scoped>
.load-box{width:100%;text-align:center;position: fixed;bottom:30%;z-index:1001;}
.load-in{display:inline-table;padding:.1rem .2rem; border-radius:.25rem;background:#999;color:#fff;}
.load-in img{float:left;width:.8rem;margin-right:.2rem;}
</style>