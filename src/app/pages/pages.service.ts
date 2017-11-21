import {Injectable} from "@angular/core";
import {Headers, RequestOptions, Http} from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {API_URL, HEADERS} from "./pages.const";
import {isNullOrUndefined} from "util";
import {Router} from "@angular/router";
import {User} from "./sysManage/model/user_row";

@Injectable()
export class PagesService {

  redirectUrl:string;
  private loginUser:User;

  public getLoginUser():User {
    return this.loginUser;
  }

  private apiUrl:string = API_URL;
  private _headers = new Headers();

  private login_headers = new Headers({
    'Content-Type': 'application/json'
  });

  private login_options = new RequestOptions({
    headers: this.login_headers
  });

  constructor(
    private http:Http,
    private router:Router
  ) {
    this._headers = HEADERS;
  }

  login(username:string, password:string) {

    let postUrl = this.apiUrl + "login";

    let resjson:any = null;

    let body:any = {
      "username": username,
      "password": password
    };

    return this.http.post(postUrl, body, this.login_options)
      .toPromise()
      .then(response => {
        resjson = response.json();
        this.loginRes = resjson;
        this.loginUser = resjson.data.user;
        sessionStorage.setItem('_token', resjson.data.token);
        sessionStorage.setItem('_userName', resjson.data.user.name);
        sessionStorage.setItem('_userDeptName', resjson.data.user.deptName);
        this.deleteAuth();
        this._headers.append('Authorization', 'token' + resjson.data.token);
      });
  }

  public getHeaders():Headers {
    return this._headers;
  }

  /*获取token*/
  public getToken() {
    let token = sessionStorage.getItem('_token');
    return token;

  }

  private loginRes:any = null;

  // public getHeaders():Headers {
  //   let lst = sessionStorage.getItem('_token');
  //   if (isNullOrUndefined(this._headers.get("Authorization"))) {
  //     this._headers.append('Authorization', 'token' + lst);
  //   }
  //   return this._headers;
  // }

  public deleteAuth() {
    /*only for logout*/
    this._headers.delete("Authorization");
  }

  getLoginMsg():any {
    return this.loginRes;
  }

  public static checkToken():boolean {
    let lst = sessionStorage.getItem('_token');

    return (!isNullOrUndefined(lst)) && (lst.length === 32);
  }

  public httpErrorHandle(errorJson:any) {
    if (errorJson.message === "无效的token") {
      // Store the attempted URL for redirecting
      this.redirectUrl = errorJson.path;
      // Navigate to the login page with extras
      this.router.navigate(['/login']);
    } else {

    }
  }


}
