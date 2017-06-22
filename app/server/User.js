import { Api } from './Api'
import { Utils } from './Utils'

/**
 * 用户
 */
export class UsertApi {

  /**
   * 登录
   * @param onSussess
   * @param onFail
   */
  static login(onSussess, onFail){
    fetch(Api.USER_LOGIN, {
      method: 'POST',
      headers: {
        'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 6.0; PRO 6 Build/MRA58K) xiachufang-android/6.0.9 Build/234',
        'X-XCF-PDID': '00000000-546b-bce7-ffff-ffffd6663b2b',
        'X-XCF-PSID': 'F4C789C9-CB44-4EDF-BDD1-D06BE1441AC1',
        'X-GrowingIO-ID': '9e2e6df5-a185-379a-bb94-5187585651e8',
        'Content-Type': 'multipart/form-data',
        'Content-Length': 1541,
        'Host': 'api.xiachufang.com',
        'Connection': 'Keep-Alive'
        // 'Accept-Encoding': 'gzip'  不要开 gzip !!!
      },

      body: Utils._appendFormData({
        'webp':	1,
        'password':	'qwe13579',
        'country_code': 86,
        'pic_size': 160,
        '_ts':	1498106907,
        'location_code':	156310000000000,
        'version':	'234',
        'mail': '18818276018',
        'origin':	'android',
        'api_key':	'09844205d1de8adc26110817477a2b70',
        'api_sign': 'a6636472c5b39904d80650ab0ab2b57c',
        'nonce':	'FDD7B3AF-0B57-49A8-B189-05425AF82881'
      })
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        onSussess(responseData);
      }).done();
  }
}



