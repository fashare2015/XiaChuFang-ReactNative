import Api from './Api'

export class Home {
  static TEST = "http://api.xiachufang.com/v2/issues/list.json?webp=1&sk=AUY8DwVAQjKhaQ7pdAiKvg&size=1&_ts=1497173984&location_code=156310000000000&version=234&origin=android&api_key=09844205d1de8adc26110817477a2b70&api_sign=0555c2376fb14228c72ec2a538940e1d&timezone=Asia/Shanghai&nonce=24A8E78C-FB86-4A21-980F-4FEB7D23DBC3&"

  static getHomeIssues(timeStamp, locationCode, onSussess, onFail){
    // fetch(Home._append("http://api.xiachufang.com/v2/issues/list.json", {
    //   webp: 1,
    //   sk: 'AUY8DwVAQjKhaQ7pdAiKvg',
    //   size: 1,
    //   _ts: timeStamp,
    //   location_code: locationCode,
    //   version: 234,
    //   origin: 'android',
    //   api_key: '09844205d1de8adc26110817477a2b70',
    //   api_sign: '0555c2376fb14228c72ec2a538940e1d',
    //   timezone: 'Asia/Shanghai',
    //   nonce: '24A8E78C-FB86-4A21-980F-4FEB7D23DBC3&'
    // }))
    fetch(Home.TEST)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        onSussess(responseData.content.issues);
      }).done();
  }

  /**
   * 基于 fetch 封装的 GET请求
   * @param url
   * @returns {Promise}
   */
  static _append(url, params) {
    if (params) {
      let paramsArray = [];
      Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])));
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&');
      } else {
        url += '&' + paramsArray.join('&');
      }
    }
    return url;
  }

}



