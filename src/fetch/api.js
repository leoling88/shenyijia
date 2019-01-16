import axios from 'axios'


const state = {

    travelsList: [],

}

export function fetch(url, params) {
	return new Promise((resolve, reject) =>  {
		axios.get(url, params)
		.then(response => {
			console.log('Api--ok');
			resolve(response.data)
		})
	})
	.catch((error) => {
		console.log(error)
		reject(error)
	})
}

export default {
	/*获取新闻首页列表 */
	NewsHot(params) {
		alert();
		console.log('进入api.js')
		return fetch('static/goods.json')
	}
}