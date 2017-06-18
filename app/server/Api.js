/**
 * Created by apple on 17-6-11.
 */
export class Api {
  static _BASE_URL = "http://api.xiachufang.com/";

  //
  // HEADERS = {
  //   'Content-Type': "text/plain"
  // };
  //
  // GET = {
  //   method: 'GET',
  //   headers: HEADERS,
  // };

  // 首页列表
  static HOME_ISSUES = Api._BASE_URL + "v2/issues/list.json?webp=1&sk=AUY8DwVAQjKhaQ7pdAiKvg&size=1&_ts=1497173984&location_code=156310000000000&version=234&origin=android&api_key=09844205d1de8adc26110817477a2b70&api_sign=0555c2376fb14228c72ec2a538940e1d&timezone=Asia/Shanghai&nonce=24A8E78C-FB86-4A21-980F-4FEB7D23DBC3&";
  // 首页广告
  static HOME_AD = Api._BASE_URL + "v2/ad/lookup.json?webp=1&sk=AUY8DwVAQjKhaQ7pdAiKvg&slot_names=homepage_banner_ad1%2Chomepage_banner_ad2&_ts=1497781950&location_code=156310000000000&version=234&origin=android&supported_types=1&api_key=09844205d1de8adc26110817477a2b70&api_sign=f185e9bc8e4ed86b0fcc8df184fac305&nonce=6FF37270-F70E-4630-9934-8845B03A8366&";
  // 首页其余的 header：{烘焙，问答， 排行， 分类}，三餐
  static HOME_HEADERS = Api._BASE_URL + "v2/init_page_v5.json?webp=1&sk=AUY8DwVAQjKhaQ7pdAiKvg&_ts=1497794937&location_code=156310000000000&version=234&origin=android&api_key=09844205d1de8adc26110817477a2b70&api_sign=7eabc62a10983493136f22a6f6adeab4&timezone=Asia%2FShanghai&nonce=BCB4A2C4-9407-41AB-8276-547DEDEC09DB&";

}