import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {PagesService} from "../../pages.service";
import {isNullOrUndefined} from "util";
import {Observable} from "rxjs";
import {API_URL} from "../../pages.const";

@Injectable()
export class JcTypeManageService {

  private apiUrl: string = API_URL;
  private headers = new Headers();

  constructor(
    private http: Http,
    private pagesService: PagesService
  ){
    this.headers = this.pagesService.getHeaders();
  }

  dataList(page:number, rows:number, sort:string, order:string, searchForm:any): Promise<any> {
    let postUrl = this.apiUrl + "jcType/dataGrid";
    let body = "page="+page+"&rows="+rows+"&sort="+sort+"&order="+order;

    if((!isNullOrUndefined(searchForm.typeName))&&searchForm.typeName!==''){
      body += "&typeName="+searchForm.typeName;
    }

    // if((!isNullOrUndefined(searchForm.ftypeName))&&searchForm.ftypeName!==''){
    //   body += "&typePid="+searchForm.ftypeName;
    // }

    if((!isNullOrUndefined(searchForm.remark))&&searchForm.remark!==''){
      body += "&remark="+searchForm.remark;
    }

    return this.http.post(postUrl, body, {
      headers: this.headers
    }).toPromise()
      .then(this.extractData)
      .catch((error: Response) => {
        console.log(error.json());
        this.pagesService.httpErrorHandle(error.json());
        return Observable.throw(error);
      });
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
