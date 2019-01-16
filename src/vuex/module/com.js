import * as types from '../types'

/**
 * App通用配置
 */
const state = {
	loadingShow: false,
	alertShow:{
		show: false,
		title:'title',
		con:'',
		btn1:'',
		btn2:''
	}

}



const mutations = {
    COM_LOADING_STATUS(state, status) {
        state.loadingShow = status
    },
    COM_ALERT_STATUS(state, alertValue) {
        state.alertShow = alertShow
    },
}


export default {
    state,
    mutations
}