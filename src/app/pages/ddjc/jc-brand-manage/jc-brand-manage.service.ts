import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {PagesService} from "../../pages.service";
import {isNullOrUndefined} from "util";
import {Observable} from "rxjs";
import {API_URL} from "../../pages.const";

@Injectable()
export class JcBrandManageService {

  private apiUrl: string = API_URL;
  private headers = new Headers();

  constructor(
    private http: Http,
    private pagesService: PagesService
  ){
    this.headers = this.pagesService.getHeaders();
  }

  dataList(page:number, rows:number,
           sort:string, order:string, searchForm:any): Promise<any> {
    let postUrl = this.apiUrl + "jcBrand/dataGrid";
    let body = "page="+page+"&rows="+rows+"&sort="+sort+"&order="+order;

    if((!isNullOrUndefined(searchForm.brandName))&&searchForm.brandName!==''){
      body += "&brandName="+searchForm.brandName;
    }

    if((!isNullOrUndefined(searchForm.brandShortcut))&&searchForm.brandShortcut!==''){
      body += "&brandShortcut="+searchForm.brandShortcut;
    }

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
  /*新增*/
  addRow(row:any):Promise<any>{
    let postUrl = this.apiUrl + "jcBrand/add";
    let body = "brandName="+row.brandName
      +"&brandShortcut="+row.brandShortcut
      +"&brandUrl="+row.brandUrl
      +"&brandLogo="+row.brandLogo
      +"&remark="+row.remark
      +"&sortNo="+row.sortNo
      +"&validity="+row.validity;

    return this.http.post(postUrl, body, {
      headers: this.headers
    }).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  /*删除*/
  deleteRow(rowId: number):Promise<any>{
    let postUrl = this.apiUrl + "jcBrand/delete";
    let resjson:any = null;
    let body = 'brandId=' + rowId;
    return this.http.post(postUrl, body, {
      headers: this.headers
    }).toPromise()
      .then(response => {
        resjson = response.json();
        return resjson;
      });
  }

  /*编辑*/
  editRow(row:any): Promise<any> {
    let postUrl = this.apiUrl + "jcBrand/edit";
    let body = "brandId="+row.brandId
      +"&brandName="+row.brandName
      +"&brandShortcut="+row.brandShortcut
      +"&brandUrl="+row.brandUrl
      +"&brandLogo="+row.brandLogo
      +"&remark="+row.remark
      +"&sortNo="+row.sortNo
      +"&validity="+row.validity;

    return this.http.post(postUrl, body, {
      headers: this.headers
    }).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
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
