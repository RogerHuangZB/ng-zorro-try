import { Injectable } from '@angular/core';
import {isNullOrUndefined} from "util";
import {PagesService} from "../../pages.service";
import {Http, Headers, Response, RequestOptionsArgs, RequestOptions} from "@angular/http";
import {API_URL, UPLOAD_PIC_URL} from "../../pages.const";
import {Observable} from "rxjs";

@Injectable()
export class JcManageService {

  private _apiUrl: string = API_URL;
  private headers = new Headers();
  private _uploadUrl: string = API_URL + UPLOAD_PIC_URL;

  constructor(
    private http: Http,
    private pagesService: PagesService
  ){
    this.headers = this.pagesService.getHeaders();
  }

  get uploadUrl(): string {
    return this._uploadUrl;
  }

  dataList(page:number, rows:number, sort:string, order:string, searchForm:any): Promise<any> {
    let postUrl = this._apiUrl + "jc/dataGrid";
    let body = "page="+page+"&rows="+rows+"&sort="+sort+"&order="+order;

    if((!isNullOrUndefined(searchForm.jcName))&&searchForm.jcName!==''){
      body += "&jcName="+searchForm.jcName;
    }

    if((!isNullOrUndefined(searchForm.jcType))&&searchForm.jcType!==''){
      body += "&jcTypeId="+searchForm.jcType;
    }

    if((!isNullOrUndefined(searchForm.jcBrand))&&searchForm.jcBrand!==''){
      body += "&jcBrandId="+searchForm.jcBrand;
    }

    if((!isNullOrUndefined(searchForm.isSale))&&searchForm.isSale!==''){
      body += "&isSale="+searchForm.isSale;
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
    let postUrl = this._apiUrl + "jc/add";
    let body = "jcName="+row.jcName
      +"&jcTypeId="+row.jcTypeId
      +"&jcBrandId="+row.jcBrandId
      +"&origin="+row.origin
      +"&productTimeStr="+row.productTimeStr
      +"&usedMonth="+row.usedMonth
      +"&isSale="+row.isSale
      +"&price="+row.price
      +"&jcModelNo="+row.jcModelNo
      +"&feature01="+row.feature01
      +"&feature02="+row.feature02
      +"&feature03="+row.feature03
      +"&feature04="+row.feature04
      +"&feature05="+row.feature05
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
    let postUrl = this._apiUrl + "jc/delete";
    let resjson:any = null;
    let body = 'jcId=' + rowId;
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
    let postUrl = this._apiUrl + "jc/edit";
    let body = "jcId="+row.jcId
      +"&jcName="+row.jcName
      +"&jcTypeId="+row.jcTypeId
      +"&jcBrandId="+row.jcBrandId
      +"&origin="+row.origin
      +"&productTimeStr="+row.productTimeStr
      +"&usedMonth="+row.usedMonth
      +"&isSale="+row.isSale
      +"&price="+row.price
      +"&jcModelNo="+row.jcModelNo
      +"&feature01="+row.feature01
      +"&feature02="+row.feature02
      +"&feature03="+row.feature03
      +"&feature04="+row.feature04
      +"&feature05="+row.feature05
      +"&remark="+row.remark
      +"&sortNo="+row.sortNo
      +"&validity="+row.validity;

    return this.http.post(postUrl, body, {
      headers: this.headers
    }).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  deletePic(name: string) {
    let postUrl = this._apiUrl + "jcPic/delete";
    let body = "picName="+name;

    return this.http.post(postUrl, body, {
      headers: this.headers
    }).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }






  jcwPostPolicy(): Promise<any> {
    let serverUrl = 'http://101.132.41.235/jcwPostPolicyServer7070/';
    return this.http.get(serverUrl, {
      headers: this.headers
    }).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public postImage(image: File,
                   headers?: Headers | { [name: string]: any },
                   partName: string = 'image',
                   customFormData?: { [name: string]: any },
                   withCredentials?: boolean): Observable<Response> {
    let uploadUrl = this._apiUrl + 'jc/addJcPics';
    if (!uploadUrl || uploadUrl === '') {
      throw new Error('Url is not set! Please set it before doing queries');
    }

    const options: RequestOptionsArgs = new RequestOptions();

    if (withCredentials) {
      options.withCredentials = withCredentials;
    }

    if (headers) {
      options.headers = new Headers(headers);
    }


    // add custom form data
    let formData = new FormData();
    for (let key in customFormData) {
      formData.append(key, customFormData[key]);
    }
    formData.append(partName, image);
    return this.http.post(uploadUrl, formData, options);
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
