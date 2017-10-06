import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd";
import {JcBrandManageService} from "./jc-brand-manage.service";
import {JcBrandList} from "../models/jc-brand.model";

@Component({
  selector: 'app-jc-brand-manage',
  templateUrl: './jc-brand-manage.component.html',
  styleUrls: ['./jc-brand-manage.component.css']
})
export class JcBrandManageComponent implements OnInit {

  sort: string = 'sort_no';
  order: string = 'asc';

  tableDataList: JcBrandList;

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
  _fixHeader = true;
  _size = 'small';

  _current = 1;
  _pageSize = 10;
  _total = 0;

  editData = null;
  addData = null;

  resetForm() {
    this.searchForm.reset();
    this.search('resetForm');
  }

  search(type:string) {
    // console.log(type);
    this._loading = true;
    // console.log(this.searchForm.value);
    this.jcBrandManageService.dataList(
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

  isEditVisible = false;
  isEditConfirmLoading = false;

  isAddVisible = false;
  isAddConfirmLoading = false;

  showEditModal = (data) => {
    // console.log(data);
    this.editForm.reset();
    this.editForm.setValue({
      'editBrandId': data.brandId,
      'editBrandName': data.brandName,
      'editBrandShortcut': data.brandShortcut,
      'editBrandUrl': data.brandUrl,
      'editBrandLogo': data.brandLogo,
      'editSortNo': data.sortNo,
      'editRemark': data.remark,
      'editValidity': data.validity
    });
    this.isEditVisible = true;
  };

  editOk = (e) => {
    this.isEditConfirmLoading = true;
    // console.log(e);
    // console.log(this.editForm.value);
    let editRow = {
      brandId: this.editForm.value.editBrandId,
      brandName: this.editForm.value.editBrandName,
      brandShortcut: this.editForm.value.editBrandShortcut,
      brandUrl: this.editForm.value.editBrandUrl,
      brandLogo: this.editForm.value.editBrandLogo,
      sortNo: this.editForm.value.editSortNo,
      remark: this.editForm.value.editRemark,
      validity: this.editForm.value.editValidity
    };
    this.jcBrandManageService.editRow(editRow)
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
    this.editData = null;
    this.isEditVisible = false;
  };

  showAddModal = () =>{
    this.addForm.reset();
    this.addForm.setValue({
      'addBrandName': '',
      'addBrandShortcut': '',
      'addBrandUrl': '',
      'addBrandLogo': '',
      'addSortNo': 1,
      'addRemark': '',
      'addValidity': 0
    });
    this.isAddVisible = true;
  };

  addOk = (e) => {
    this.isAddConfirmLoading = true;
    // console.log(e);
    // console.log(this.addForm.value);
    let addRow = {
      brandName: this.addForm.value.addBrandName,
      brandShortcut: this.addForm.value.addBrandShortcut,
      brandUrl: this.addForm.value.addBrandUrl,
      brandLogo: this.addForm.value.addBrandLogo,
      sortNo: this.addForm.value.addSortNo,
      remark: this.addForm.value.addRemark,
      validity: this.addForm.value.addValidity,
    };
    this.jcBrandManageService.addRow(addRow)
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
    this.addData = null;
    this.isAddVisible = false;
  };

  showDeleteConfirm = (data) => {
    let that = this;
    that.confirmServ.confirm({
      title  : '您是否确认要删除该数据？',
      content: '<b>'+ data.brandName +'</b>',
      onOk() {
        that.jcBrandManageService.deleteRow(data.brandId)
          .then((res:any) => {
            // console.log(res);
            that.search('delete');
          });
      },
      onCancel() {
      }
    });
  };

  constructor(
    private fb: FormBuilder,
    private confirmServ: NzModalService,
    private jcBrandManageService: JcBrandManageService
  ) {
  }

  ngOnInit() {
    console.log("JcBrandManageComponent ngOnInit.");
    this.searchForm = this.fb.group({
      'brandName': new FormControl(),
      'brandShortcut': new FormControl(),
      'remark': new FormControl()
    });

    this.editForm = this.fb.group({
      'editBrandId': new FormControl(),
      'editBrandName': new FormControl(),
      'editBrandShortcut': new FormControl(),
      'editBrandUrl': new FormControl(),
      'editBrandLogo': new FormControl(),
      'editSortNo': new FormControl(),
      'editRemark': new FormControl(),
      'editValidity': new FormControl()
    });

    this.addForm = this.fb.group({
      'addBrandName': new FormControl(),
      'addBrandShortcut': new FormControl(),
      'addBrandUrl': new FormControl(),
      'addBrandLogo': new FormControl(),
      'addSortNo': new FormControl(),
      'addRemark': new FormControl(),
      'addValidity': new FormControl()
    });

    this.search('ngOnInit');
  }

}
