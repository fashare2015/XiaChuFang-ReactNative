/**
 * Created by jinliangshan on 17/6/22.
 */
export class Utils {
  static _appendFormData(params){
    let formData = new FormData();
    if (params) {
      Object.keys(params).forEach(key => formData.append(key, params[key]));
    }

    return formData;
  }
}
