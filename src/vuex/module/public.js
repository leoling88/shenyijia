import { getTest } from '../../https/axios.js'
const state = {
	lists_data:[
		{
			name:'记一次凉凉的小米面试',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			otype:'1'

		},
		{
			name:'托马斯底薪加盟掘金虽不甘心,但这却是他重新证明自己的最好机会',
			title: '小李说体育',
			img:['https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1269329551,2664789443&fm=173&app=25&f=JPEG?w=218&h=146&s=A9505795C78254E2086521DC0300C0B2','https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=89775878,3966491195&fm=173&app=25&f=JPEG?w=218&h=146&s=6281994542C839430E38988103007091','https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1783121282,3259846909&fm=173&app=25&f=JPEG?w=218&h=146&s=6786D30C7C9D06DC109927B203007082'],
			otype:'3'

		},
		{
			name:'昔日恋情遭同是饰演小燕子的女星插足，今混得风生水起成大富豪！',
			title: '娱乐8公子',
			img:['https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2763641915,1369240630&fm=173&app=25&f=JPEG?w=400&h=300&s=6280D70948AA609C9A2081FD03005023','https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4242342016,2246539952&fm=173&app=25&f=JPEG?w=549&h=437&s=FFA838631CFB659E840858830300E0C0','https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4007333831,1431007671&fm=173&app=25&f=JPEG?w=440&h=381&s=B2E1D8017A0B1A55469930AF0300A000'],
			otype:'3'

		},
		{
			name:'男子躲厕所拿镜子偷窥女租客 竟连小伙子也不放过',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			otype:'1'

		},	
		{
			name:'男子躲厕所拿镜子偷窥女租客 竟连小伙子也不放过',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			otype:'1'

		},
		{
			name:'记一次凉凉的小米面试',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			otype:'1'

		},	
		{
			name:'记一次凉凉的小米面试',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			otype:'1'

		},	
		{
			name:'男子躲厕所拿镜子偷窥女租客 竟连小伙子也不放过',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			otype:'1'

		},
		{
			name:'记一次凉凉的小米面试',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			otype:'1'

		},	
		{
			name:'记一次凉凉的小米面试',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			otype:'1'

		},
		{
			name:'托马斯底薪加盟掘金虽不甘心,但这却是他重新证明自己的最好机会',
			title: '小李说体育',
			img:['https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1269329551,2664789443&fm=173&app=25&f=JPEG?w=218&h=146&s=A9505795C78254E2086521DC0300C0B2','https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=89775878,3966491195&fm=173&app=25&f=JPEG?w=218&h=146&s=6281994542C839430E38988103007091','https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1783121282,3259846909&fm=173&app=25&f=JPEG?w=218&h=146&s=6786D30C7C9D06DC109927B203007082'],
			otype:'3'

		},
		{
			name:'昔日恋情遭同是饰演小燕子的女星插足，今混得风生水起成大富豪！',
			title: '娱乐8公子',
			img:['https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2763641915,1369240630&fm=173&app=25&f=JPEG?w=400&h=300&s=6280D70948AA609C9A2081FD03005023','https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4242342016,2246539952&fm=173&app=25&f=JPEG?w=549&h=437&s=FFA838631CFB659E840858830300E0C0','https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4007333831,1431007671&fm=173&app=25&f=JPEG?w=440&h=381&s=B2E1D8017A0B1A55469930AF0300A000'],
			otype:'3'

		},
		{
			name:'男子躲厕所拿镜子偷窥女租客 竟连小伙子也不放过',
			title: '掘金',
			img:['https://user-gold-cdn.xitu.io/2017/11/20/15fd79563b28dd6e?w=650&h=910&f=png&s=253799'],
			otype:'1'

		}
	],
	transition_show:{
		pngBg: false,
		loading: false,
		promputup: false,
		promputover: false,
	},
	scroll_param:{
      pageX:0,
      pageY:0,
      pageHeight:'',
      bodyHeight:'',
      scrollTop:0,
      aspect: 0,  //2向上，1向下
      loadMore: true,
      pageNum:'0'
 		
	},
	
	
}
//getters 抛出数据
const getters = {
	//导航菜单
	transitionshow:state => state.transition_show,
	scrollparam:state => state.scroll_param,
	listsdata:state => state.lists_data

}
const actions = {

	onTouchStart({commit}, e) {
		commit('touchStart',e)
	},
	onTouchMove({commit}, e) {
		commit('touchMove', e)
	},
	onTouchEnd({commit}, e) {
		commit('touchEnd', e)
	}

}

let scrooll_h = 0
const mutations = {


    touchStart(state, e){ //触摸事件
        //state.scroll_param.pageX = e.targetTouches[0].pageX
        state.scroll_param.pageY = e.targetTouches[0].pageY
        state.scroll_param.pageHeight = e.currentTarget.offsetHeight
        state.scroll_param.bodyHeight = document.documentElement.clientHeight;
        //console.log(state.scroll_param.pageHeight)
        //console.log("X:" + state.scroll_param.pageX +"||" +"Y:" + state.scroll_param.pageY)
    },
    touchMove(state, e){
    	//console.log(e.targetTouches[0].pageX +"<=====>"+state.scroll_param.pageX)
    	if(e.targetTouches[0].pageY > state.scroll_param.pageY ) {     //向下滑动
    		state.scroll_param.aspect = 1
    		scrooll_h = ( e.targetTouches[0].pageY - state.scroll_param.pageY ) * 1
    	}else if( e.targetTouches[0].pageY < state.scroll_param.pageY ){  //向上滑动
    		state.scroll_param.aspect = 2
    		scrooll_h =  (state.scroll_param.pageY - e.targetTouches[0].pageY) * 1
    	}
    },
    touchEnd(state, e){
    	
    	if( state.scroll_param.aspect === 2 && ( state.scroll_param.bodyHeight + Math.abs(state.scroll_param.scrollTop) ) <= state.scroll_param.pageHeight){
    		console.log("向上")
			state.scroll_param.scrollTop -= scrooll_h

			if( state.scroll_param.bodyHeight + Math.abs(state.scroll_param.scrollTop) >= state.scroll_param.pageHeight){   //回弹效果
				if( state.scroll_param.loadMore ){
					state.transition_show.loading = true
						getTest({
						  url: 'static/goods.json',
						   method: 'get',
						  // data: JSON.stringify({
						  // })
						})
						.then(res => {
							console.log(state.lists_data)
							state.lists_data = res.data.listshot

							setTimeout(() => {
								state.scroll_param.scrollTop = state.scroll_param.bodyHeight - state.scroll_param.pageHeight
								state.scroll_param.scrollTop = state.scroll_param.scrollTop - 60  
							}, 300);

						  // if (res.data.code === '0000') {
				  	
						  // }
						});



					
					
				}
				               

               //state.transition_show.loading = false
			}
			
    	}else if( state.scroll_param.aspect === 1  && state.scroll_param.scrollTop <= 0) {
    		state.scroll_param.scrollTop += scrooll_h
    		if( state.scroll_param.scrollTop >= 0) {
               setTimeout(() => {
					state.scroll_param.scrollTop = 0
                }, 300);    			
    		}

    		console.log("向下")

    	}
    		
		console.log(state.scroll_param.scrollTop)
		state.scroll_param.aspect = 0
    }



}
export default{
	state,
	getters,
	actions,
	mutations,
}
