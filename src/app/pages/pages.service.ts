import {Injectable} from "@angular/core";
import {Headers, RequestOptions, Http} from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {API_URL, HEADERS} from "./pages.const";
import {isNullOrUndefined} from "util";

@Injectable()
export class PagesService {

  private apiUrl:string = API_URL;
  private _headers = new Headers();

  constructor(
    private http:Http
  ) {
    this._headers = HEADERS;
  }

  public getHeaders():Headers {
    return this._headers;
  }

  public httpErrorHandle(errorJson:any) {
    // if (errorJson.message === "无效的token") {
    //   // Store the attempted URL for redirecting
    //   this.redirectUrl = errorJson.path;
    //   // Navigate to the login page with extras
    //   this.router.navigate(['/login']);
    // } else {
    //
    // }
  }


}
