import baseUrl from './config.js';
import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = baseUrl;//baseUrl;  
export default {
  /*
  *中国省市列表*
  */
  getChianAddress() {       //省市、直辖市
    return axios.get('../static/js/chinaAdd3.json')
  },

  getSwiper() {       //省市、直辖市
    return axios.post('http://yxrh.createt.cn:8091/combile/wxInterface/informationBanner/getBannerList')
  },





  /*/mobile/peopleSave?jsonStr=
   * 详情信息回显
   * params: {string} 省份证号码
   */
  // rebackPeopleInfo (params) {
  //   return axios.post(`/?idCard=${params}&homeType=lspy_`)
  // },

  /*
   * 流动人员登记结果查询
   * params: {string}
   * jhid  交易编号
   */
  // queryUploadLdryResult (params) {
  //   return axios.get(`/`, {
  //     params: {
  //       jhid: params.jhid,
		// 		idCard: params.idCard,
  //       opentype: 1,
  //       openid: params.openid
  //     }
  //   })
  // },


  /*
   * 签注--居住证签注-入口
   * */
  // requireJZZData(params) {
  //   return axios.post(`/?jsonStr=${JSON.stringify(params)}`)
  // },

  /*
   * 签注--办理进度
   * */
  // QZprogress(rid) {
  //   return axios.post(`/?rid=${rid}`);
  // },

  /*
   * 签注--上传图片
   * */
  // submiUpPic(params) {
  //   return axios.post('/',qs.stringify({
  //     rid:params.rid,
  //     step:params.step,
  //     idCardType:params.idCardType,
  //     conditionType:params.conditionType,
  //   }))
  // },



}
//