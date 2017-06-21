import { Api } from './Api'

/**
 * 首页
 */
export class HomeApi {

  /**
   * 加载首页列表（今日）
   * @param onSussess
   * @param onFail
   */
  static getHomeIssues(onSussess, onFail){
    fetch(Api.HOME_ISSUES)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        onSussess(responseData.content.issues);
      }).done();
  }

  /**
   * 加载广告
   * @param onSussess
   * @param onFail
   */
  static getAd(onSussess, onFail){
    fetch(Api.HOME_AD)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        onSussess([responseData.content.homepage_banner_ad1]);
      }).done();
  }

  /**
   * 加载其余的 header：{烘焙，问答， 排行， 分类}，三餐
   * @param onSussess
   * @param onFail
   */
  static getHeaders(onSussess, onFail){
    fetch(Api.HOME_HEADERS)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        onSussess(responseData.content);
      }).done();
  }

  /**
   * GET请求 拼参
   * @param url
   * @param params
   */
  static _append(url, params) {
    if (params) {
      let paramsArray = [];
      Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&');
      } else {
        url += '&' + paramsArray.join('&');
      }
    }
    console.log(url);
    return url;
  }

}



