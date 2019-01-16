<template>
<div>
	<!--先择框1-->
	<v-select :selectDatas = "select1"  @selectshow="selectSex" >
		<span slot="label">选择性别</span>
	</v-select>
	<!--先择框1 end-->
	<!--先择框2-->
	<v-select2 :selectDatas = "select2"  @selectshow="selectZJ" >
		<span slot="label">选择证件类型</span>
	</v-select2>
	<!--先择框2 end-->
	<!--先择框3-->
	<v-address :selectDatas = "select3"  @selectshow="selectAdd" >
		<span slot="label">三级联动</span>
	</v-address>
	<div class="box-1">{{select3.key1}}{{select3.key2}}{{select3.key3}}   {{select3.value1}}{{select3.value2}} {{select3.value3}}</div>
	<!--先择框3 end-->

</div>



</template>
<script>
	import select from '@/components/com/select'
	import select2 from '@/components/com/select2'
	import address from '@/components/com/selectAddress'		
	import {mapState, mapGetters, mapActions} from 'vuex'
	import api from '@/https/index'	

	export default{
		name: 'selects',
		props: {
			/*下拉选择1*/
			selectDatas: Object,
			scroll: Object

		},
		data () {
			return {

				select1:{     //下拉选择1
					key:1,
					value:'男',
					show: false,
					hover: 1,
					lists:[
						{
							value:'男',
							key:'1',
						},
						{
							value:'女',
							key:'2'
						},
					]
				},
				select2:{     //下拉选择2
					key:1,
					value:'居民身份证',
					show: false,
					hover: 1,
					lists:[
						{
							value:'居民身份证',
							key:'1',
						},
						{
							value:'护照本',
							key:'2'
						},
						{
							value:'部队军人证件',
							key:'3'
						},	
						{
							value:'营业执照',
							key:'4'
						},



					],
					scrollTop:0,   //滚动条位
					startY:'',    //X轴初始位置
					endY:'',    //X轴结束位置
					hover:'',
					vernierTop:'' ,//游标位置
				},
				select3:{     //下拉选择2
					key1:'44',
					value1:'广东省',
					key2:'4401',
					value2:'广州市',
					key3:'440103',
					value3:'荔湾区',
					show: false,

					scrollTop1:'',   //滚动条位
					startY1:'',    //X轴初始位置
					endY1:'',    //X轴结束位置
					hover1:'18',
					vernierTop2:'',//游标位置
					scrollTop2:0,   //滚动条位
					startY2:'',    //X轴初始位置
					endY2:'',    //X轴结束位置
					hover2:'0',
					vernierTop3:'' ,//游标位置
					scrollTop3:0,   //滚动条位
					startY3:'',    //X轴初始位置
					endY3:'',    //X轴结束位置
					hover3:'0',
					vernierTop:'' ,//游标位置
					touchhover: '',  //触屏位置1
					lists:[],  
				},
				chinaAdd3list:[],//地址总数据				
			}
		},
		components:{
			'v-select':select,
			'v-select2':select2,
			'v-address':address
		},
	    mounted(){
	    	this.requireAdd3()
	    	


	    },	
		computed:{
		},
		methods:{

	        selectSex() {
	        	this.select1.show = true
	        },
	        selectZJ() {
	        	this.select2.show = true

	        },
	        selectAdd() {
	        	this.select3.show = true

	        },
	        requireAdd3 () {     //获取中国省市区地址表
		        api.getChianAddress({dataType: "json",}).then(res => {
		        	let data = res.data
		        	console.log('res')
		        	this.chinaAdd3list = res.data
		        	this.select3.lists.list1 = this.chinaAdd3list
		        	this.select3.lists.list2 = this.select3.lists.list1[18].children
		        	this.select3.lists.list3 = this.select3.lists.list2[0].children


		        	

		        }).catch((res) => {
		        });
	        },

		}



	}
</script>
<style >
@import "../assets/css/select.css";
.box-1{padding:.1rem;text-align:right;font-size:.8rem;color:#ccc;}

</style>