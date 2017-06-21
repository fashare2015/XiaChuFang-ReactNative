import { Api } from './Api'

/**
 * 收藏
 */
export class CollectApi {

  /**
   * 加载浏览历史
   * @param onSussess
   * @param onFail
   */
  static getHistory(onSussess, onFail){
    fetch(Api.COLLECT_HISTORY, {
      method: 'POST',
      headers: {
        'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 6.0; PRO 6 Build/MRA58K) xiachufang-android/6.0.9 Build/234',
        'X-XCF-PDID': '00000000-546b-bce7-ffff-ffffd6663b2b',
        'X-XCF-PSID': 'F4C789C9-CB44-4EDF-BDD1-D06BE1441AC1',
        'X-GrowingIO-ID': '9e2e6df5-a185-379a-bb94-5187585651e8',
        'Content-Type': 'multipart/form-data',
        'Content-Length': 1676,
        'Host': 'api.xiachufang.com',
        'Connection': 'Keep-Alive'
        // 'Accept-Encoding': 'gzip'  不要开 gzip !!!
      },

      body: CollectApi._appendFormData({
        'webp':	1,
        'sk':	'AUY8DwVAQjKhaQ7pdAiKvg',
        'query': '{"id":true,"name":true,"score":true,"author":{"name":true},"photos":{"140":true},"stats":{"n_cooked":true}}',
        '_ts':	1498066811,
        'ids':	"100567256,256950,100100644,100189262,101753065,100536629,1003776,100285676,267812,184238,101751424,100354906,100597664,48803,1080134,100417337,100562276",
        'location_code':	156310000000000,
        'version':	'234',
        'origin':	'android',
        'api_key':	'09844205d1de8adc26110817477a2b70',
        'api_sign': 'b83b78b4d468c8df4b69398474911299',
        'nonce':	'C5055104-62E2-4756-A4D3-E3A0527611E1'
      })
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        onSussess(responseData.content.recipes);
      }).done();
  }

  static _appendFormData(params){
    let formData = new FormData();
    if (params) {
      Object.keys(params).forEach(key => formData.append(key, params[key]));
    }

    return formData;
  }
}



