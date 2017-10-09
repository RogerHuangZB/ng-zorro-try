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

  dataAll(): Promise<any>{
    let postUrl = this.apiUrl + "jcType/dataAll";
    let body = '';
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
  /*新增*/
  addRow(row:any):Promise<any>{
    let postUrl = this.apiUrl + "jcType/add";
    let body = "typeName="+row.typeName
      // +"&typePid="+row.typePid
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
    let postUrl = this.apiUrl + "jcType/delete";
    let resjson:any = null;
    let body = 'typeId=' + rowId;
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
    let postUrl = this.apiUrl + "jcType/edit";
    let body = "typeId="+row.typeId
      +"&typeName="+row.typeName
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
