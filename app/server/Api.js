/**
 * Created by apple on 17-6-11.
 */
export class Api{
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

  static HOME_ISSUES = Api._BASE_URL + "v2/issues/list.json";
}