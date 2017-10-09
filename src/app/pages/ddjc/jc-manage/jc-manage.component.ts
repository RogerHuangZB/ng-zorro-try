import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd";
import {JcList} from "../models/jc.model";
import {JcManageService} from "./jc-manage.service";
import {JcTypeManageService} from "../jc-type-manage/jc-type-manage.service";
import {JcBrandManageService} from "../jc-brand-manage/jc-brand-manage.service";

@Component({
  selector: 'app-jc-manage',
  templateUrl: './jc-manage.component.html',
  styleUrls: ['./jc-manage.component.css']
})
export class JcManageComponent implements OnInit {

  sort: string = 'jid';
  order: string = 'desc';

  tableDataList: JcList;

  searchForm: FormGroup;
  editForm: FormGroup;
  addForm: FormGroup;

  _dataSet = [];
  _bordered = true;
  _loading = false;
  _pagination = true;
  _header = true;
  _title = false;
  _footer = false;
  _fixHeader = false;
  _size = 'small';

  _current = 1;
  _pageSize = 10;
  _total = 0;

  jcTypes = [];
  jcBrands = [];

  resetForm() {
    this.searchForm.reset();
    this.search('resetForm');
  }

  search(type:string) {
    console.log(type);
    this._loading = true;
    this.jcManageService.dataList(
      this._current,
      this._pageSize,
      this.sort,
      this.order,
      this.searchForm.value
    ).then((res)=>{
      this._loading = false;
      this.tableDataList = res;
      this._total = this.tableDataList.total;
      this._dataSet = this.tableDataList.rows;
    });
  }

  isInfoModalVisible = false;
  isInfoModalConfirmLoading = false;

  isEditVisible = false;
  isEditConfirmLoading = false;

  isAddVisible = false;
  isAddConfirmLoading = false;

  isPicModalVisible = false;
  isPicModalConfirmLoading = false;

  showInfoModal = (data) => {
    console.log(data);

    this.isInfoModalVisible = true;
  };

  showEditModal = (data) => {
    // console.log(data);
    this.editForm.reset();
    this.editForm.setValue({
      'editJcId':        data.jcId,
      'editJcName':      data.jcName,
      'editJcType':      data.jcTypeId,
      'editJcBrand':     data.jcBrandId,
      'editJcModelNo':   data.jcModelNo,
      'editOrigin':      data.origin,
      'editProductTime': new Date(data.productTime),
      'editUsedMonth':   data.usedMonth,
      'editIsSale':      data.isSale,
      'editPrice':       data.price,
      'editFeature01':   data.feature01,
      'editFeature02':   data.feature02,
      'editFeature03':   data.feature03,
      'editFeature04':   data.feature04,
      'editFeature05':   data.feature05,
      'editRemark':      data.remark,
      'editValidity':    data.validity
    });
    this.isEditVisible = true;
  };

  editOk = (e) => {
    this.isEditConfirmLoading = true;
    let editRow = {
      jcId:             this.editForm.value.editJcId,
      jcName:           this.editForm.value.editJcName,
      jcTypeId:         this.editForm.value.editJcType,
      jcBrandId:        this.editForm.value.editJcBrand,
      jcModelNo:        this.editForm.value.editJcModelNo,
      origin:           this.editForm.value.editOrigin,
      productTimeStr:   this.editForm.value.editProductTime.toLocaleDateString(),
      usedMonth:        this.editForm.value.editUsedMonth,
      isSale:           this.editForm.value.editIsSale,
      price:            this.editForm.value.editPrice,
      feature01:        this.editForm.value.editFeature01,
      feature02:        this.editForm.value.editFeature02,
      feature03:        this.editForm.value.editFeature03,
      feature04:        this.editForm.value.editFeature04,
      feature05:        this.editForm.value.editFeature05,
      remark:           this.editForm.value.editRemark,
      validity:         this.editForm.value.editValidity
    };
    this.jcManageService.editRow(editRow)
      .then((res:any) => {
        this.isEditConfirmLoading = false;
        // console.log(res);
        if(res.code === 'ok'){
          this.isEditVisible = false;
          this.search('editOk');
        }
      });
  };

  editCancel = (e) => {
    this.isEditVisible = false;
  };

  showAddModal = () =>{
    this.addForm.reset();
    this.addForm.setValue({
      'addJcName': '',
      'addJcType': null,
      'addJcBrand': null,
      'addJcModelNo': '',
      'addOrigin': '',
      'addProductTime': new Date(),
      'addUsedMonth': 0,
      'addIsSale': 0,
      'addPrice': 0,
      'addFeature01': '',
      'addFeature02': '',
      'addFeature03': '',
      'addFeature04': '',
      'addFeature05': '',
      'addRemark': '',
      'addValidity': 0
    });
    this.isAddVisible = true;
  };

  addOk = (e) => {
    this.isAddConfirmLoading = true;
    let addRow = {
      jcName:           this.addForm.value.addJcName,
      jcTypeId:         this.addForm.value.addJcType,
      jcBrandId:        this.addForm.value.addJcBrand,
      jcModelNo:        this.addForm.value.addJcModelNo,
      origin:           this.addForm.value.addOrigin,
      productTimeStr:   this.addForm.value.addProductTime.toLocaleDateString(),
      usedMonth:        this.addForm.value.addUsedMonth,
      isSale:           this.addForm.value.addIsSale,
      price:            this.addForm.value.addPrice,
      feature01:        this.addForm.value.addFeature01,
      feature02:        this.addForm.value.addFeature02,
      feature03:        this.addForm.value.addFeature03,
      feature04:        this.addForm.value.addFeature04,
      feature05:        this.addForm.value.addFeature05,
      remark:           this.addForm.value.addRemark,
      validity:         this.addForm.value.addValidity
    };
    this.jcManageService.addRow(addRow)
      .then((res:any) => {
        // console.log(res);
        this.isAddConfirmLoading = false;
        if(res.code === 'ok'){
          this.isAddVisible = false;
          this.search('addOk');
        }
      });
  };

  addCancel = (e) => {
    this.isAddVisible = false;
  };

  showDeleteConfirm = (data) => {
    let that = this;
    that.confirmServ.confirm({
      title  : '您是否确认要删除该数据？',
      content: '<b>'+ data.jcName +'</b>',
      onOk() {
        that.jcManageService.deleteRow(data.jcId)
          .then((res:any) => {
            that.search('delete');
          });
      },
      onCancel() {
      }
    });
  };

  showPicModal = (data) => {
    this.isPicModalVisible = true;
  };

  constructor(
    private fb: FormBuilder,
    private confirmServ: NzModalService,
    private jcManageService: JcManageService,
    private jcTypeManageService: JcTypeManageService,
    private jcBrandManageService: JcBrandManageService
  ) {
    this.jcTypeManageService.dataAll().then((res:any) => {
      this.jcTypes = res;
    });
    this.jcBrandManageService.dataAll().then((res:any) => {
      this.jcBrands = res;
    });
  }

  ngOnInit() {
    console.log("JcTypeManageComponent ngOnInit.");
    this.searchForm = this.fb.group({
      'jcName': new FormControl(),
      'jcType': new FormControl(),
      'remark': new FormControl()
    });

    this.addForm = this.fb.group({
      'addJcName': new FormControl(),
      'addJcType': new FormControl(),
      'addJcBrand': new FormControl(),
      'addJcModelNo': new FormControl(),
      'addOrigin': new FormControl(),
      'addProductTime': new FormControl(),
      'addUsedMonth': new FormControl(),
      'addIsSale': new FormControl(),
      'addPrice': new FormControl(),
      'addFeature01': new FormControl(),
      'addFeature02': new FormControl(),
      'addFeature03': new FormControl(),
      'addFeature04': new FormControl(),
      'addFeature05': new FormControl(),
      'addRemark': new FormControl(),
      'addValidity': new FormControl()
    });

    this.editForm = this.fb.group({
      'editJcId': new FormControl(),
      'editJcName': new FormControl(),
      'editJcType': new FormControl(),
      'editJcBrand': new FormControl(),
      'editJcModelNo': new FormControl(),
      'editOrigin': new FormControl(),
      'editProductTime': new FormControl(),
      'editUsedMonth': new FormControl(),
      'editIsSale': new FormControl(),
      'editPrice': new FormControl(),
      'editFeature01': new FormControl(),
      'editFeature02': new FormControl(),
      'editFeature03': new FormControl(),
      'editFeature04': new FormControl(),
      'editFeature05': new FormControl(),
      'editRemark': new FormControl(),
      'editValidity': new FormControl()
    });

    this.search('ngOnInit');
  }

}
