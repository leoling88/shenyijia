                                                        <template>
<div>
<!-- 	<v-leftbar :panellist="menulist" ></v-leftbar>
-->	<div class="content-box" v-bind:style="{'transform': 'translate3d('+leftbaron.xValueR +'px, 0, 0)'}">
		<!--轮播-->
			<v-swiper :swiperLists = "imgLists" :swinperView="swinper"></v-swiper>
		<!--轮播 end-->
		<!--先择框-->
		<v-select :selectDatas = "select1"  @optionclick="optionClick" @selectshow="selectShow" ></v-select>
		<!--先择框 end-->



		<div class="home" >

		


	哥是首页
		</div>



	</div>
		

	<!--弹框-->
	<v-alert v-model="alertVal.show" type="confirm" title="我是标题" content="我是内容" @cancel="clickCancel"  @confirm="clickConfirm">
		<span slot='title' v-text="alertVal.title"></span>
		<span slot='content' v-html="alertVal.content"></span>
		<span slot='butA' v-text="alertVal.butA"></span>
		<span slot='butB' v-text="alertVal.butB"></span>
	</v-alert>
	<!--弹框end-->



</div>



</template>
<script>
	import leftbar from '@/components/leftbar'
	import alerts from '@/components/com/alert'	
	import swipers from '@/components/com/swiper'
	import select from '@/components/com/select'		
	import {mapState, mapGetters, mapActions} from 'vuex'
  import https from '@/https/index'

	export default{
		name: 'home',
		props: {

			panellist: Array,

			/*swipers*/
			swiperLists: Array,
			swinperView: Object,
			/*下拉选择1*/
			selectDatas: Object,

		},
		data () {
			return {
				timer: null,
				totalTime:2,
				alertVal:{      //提示框
					show: false,
					title: '重要提示',
					content:'<p>您确认要进行此操作吗?？</p>',
					butA: '确认',
					butB: '取消'
				},
				swinper:{     //轮播
					left:0,
					width:'',
					ulWidth:'',
					length:'',
					page:'',
					title:'',
					titleShow: false,
					about:'',
					aboutShow: true,
					hover:'',
					viewX: document.body.clientWidth,
					pageX:'1.5',

				},
				imgLists:[],
				loadups:{     //加载状态
					loading: false,
					promputup: false,
					promputover: false,
				},
				select1:{     //下拉选择1
					key:'',
					value:'',
					show: false,
					lists:[
						{
							value:'11111',
							key:'1'
						},
						{
							value:'2222',
							key:'2'
						},
						{
							value:'333333',
							key:'3'
						},
						{
							value:'444444',
							key:'4'
						},
						{
							value:'55555555',
							key:'5'
						},
						{
							value:'6666666',
							key:'6'
						},
						{
							value:'77777777',
							key:'7'
						},
						{
							value:'8888888888888',
							key:'8'
						},
						{
							value:'999999999999999',
							key:'9'
						},
						{
							value:'AAAAAAAAA',
							key:'10'
						},
						{
							value:'BBBBBBBBB',
							key:'11'
						},
						{
							value:'CCCCCCCCCCCC',
							key:'12'
						}

					]

				},



			}
		},
		components:{
			'v-leftbar': leftbar,
			'v-alert': alerts,
			'v-swiper':swipers,
			'v-select':select

		},
	    mounted(){
	    	this.requireSwiperDatas()
	    	const _this = this
		    window.onresize = function temp() {
		    	alert('dd')
		    	_this.loadups.loading = true
		    	_this.swinper.viewX = document.body.clientWidth
		    	console.log('父组件发生变化===>' + _this.swinper.viewX)
		    };


	    },	
		computed:{
	
		    ...mapGetters(['leftbaron','menulist'])	


		},
		methods:{

	        requireSwiperDatas () {    
		        https.getSwiper().then(res => {
		        	let _data = res.data
		        	this.imgLists = _data.data
		        	alert(_data.data[0].imageUrl)

		        	

		        }).catch((res) => {
		        });
	        },


			cc() {
				this.alertVal.show = true
				 // this.$store.commit('COM_LOADING_STATUS', true);
				 // let clock = window.setInterval(() => {
				 //  this.totalTime--
				 //  if (this.totalTime < 0) {     //当倒计时小于0时清除定时器
				 //    window.clearInterval(clock)
					// this.$store.commit('COM_LOADING_STATUS', false);

				 //    }
				 // },1000)
			},
			clickSelect () {
				alert(index)
			},
			bannerLink () {
				alert(index)
			},
	        openAlert(index){
	        	
	            this.alertVal.show = true;
	            console.log(this.alertVal.show)
	        },
	        clickCancel(){
	            console.log('点击了取消');
	        },
	        clickConfirm(){
	            console.log('点击了确定');
	        },
	        optionClick() {},
	        selectShow() {
	        	this.select1.show = true
	        }

		}



	}
</script>
<style scoped>
.home{padding:5rem 0;font-size:2rem; text-align:center;color:#666;}

</style>