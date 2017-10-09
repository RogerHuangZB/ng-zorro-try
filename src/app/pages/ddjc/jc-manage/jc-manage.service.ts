import { Injectable } from '@angular/core';
import {isNullOrUndefined} from "util";
import {PagesService} from "../../pages.service";
import {Http, Headers, Response} from "@angular/http";
import {API_URL} from "../../pages.const";
import {Observable} from "rxjs";

@Injectable()
export class JcManageService {

  private apiUrl: string = API_URL;
  private headers = new Headers();

  constructor(
    private http: Http,
    private pagesService: PagesService
  ){
    this.headers = this.pagesService.getHeaders();
  }

  dataList(page:number, rows:number, sort:string, order:string, searchForm:any): Promise<any> {
    let postUrl = this.apiUrl + "jc/dataGrid";
    let body = "page="+page+"&rows="+rows+"&sort="+sort+"&order="+order;

    if((!isNullOrUndefined(searchForm.jcName))&&searchForm.jcName!==''){
      body += "&jcName="+searchForm.jcName;
    }

    if((!isNullOrUndefined(searchForm.jcTypeId))&&searchForm.jcTypeId!==''){
      body += "&jcTypeId="+searchForm.jcTypeId;
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
    let postUrl = this.apiUrl + "jc/add";
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
    let postUrl = this.apiUrl + "jc/delete";
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
    let postUrl = this.apiUrl + "jc/edit";
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
