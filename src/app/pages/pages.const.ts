import {Headers} from '@angular/http';
import {environment} from '../../environments/environment';

export const HEADERS = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  'Content-Type': 'application/x-www-form-urlencoded'
});

let API_URL= '';

if(environment.production){
  //生产模式
  API_URL = '/';
}else{
  //开发模式
  API_URL = 'http://127.0.0.1:9090/';
}

export const UPLOAD_PIC_URL = 'jc/uploadJcPic';

export {
  API_URL as API_URL
};
