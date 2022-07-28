export enum HttpMethodEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export enum ErrorCodeEnum {
  A100 = 'A100', // HTTP发送失败（axios内部未知 Error）
  A200 = 'A200', // HTTP无响应 (超时)
  B = 'B', // HTTP接口状态码异常(resultCode不为0)
  H400 = 'H400', // HTTP响应异常(400、401、403、404、500...)
  H401 = 'H401',
  H403 = 'H403',
  H404 = 'H404',
  H405 = 'H405',
  H408 = 'H408',
  H500 = 'H500',
  H502 = 'H502',
  H504 = 'H504',
  H505 = 'H505',
  C100 = 'C100' // 客户端内部程序错误
}

export enum ResultCodeEnum {
  SUCCESS = 0
}

export enum ContentTypeEnum {
  JSON = 'application/json;charset=UTF-8',
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8'
}

export enum ResponseTypeEnum {
  JSON = 'json',
  TEXT = 'text',
  BLOB = 'blob',
  STREAM = 'stream',
  DOCUMENT = 'document',
  ARRAY_BUFFER = 'arraybuffer'
}
