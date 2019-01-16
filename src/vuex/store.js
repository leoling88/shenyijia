
import Vue from 'vue'
import Vuex from 'vuex'
import topbar from './module/public'
import com from './module/com'
import mine from './module/mine'
import lists from './module/lists'
import leftbar from './module/leftbar'
import axios from 'axios'

Vue.use(Vuex);
export default new Vuex.Store({

	modules:{
		topbar,
		mine,
		lists,
		leftbar,
		com

	}
	//strict: process.env.NODE_ENV !== 'production'
})