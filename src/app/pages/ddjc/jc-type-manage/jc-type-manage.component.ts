import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd";
import {JcTypeManageService} from "./jc-type-manage.service";
import {Page} from "../../models/page.model";
import {JcTypeList, JcTypeModel} from "./jc-type.model";

@Component({
  selector: 'app-jc-type-manage',
  templateUrl: './jc-type-manage.component.html',
  styleUrls: ['./jc-type-manage.component.css']
})
export class JcTypeManageComponent implements OnInit {

  page = new Page();
  sort: string = 'sort_no';
  order: string = 'asc';

  tableDataList: JcTypeList;

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
  _total = 1;

  editData = null;
  addData = null;

  resetForm() {
    this.searchForm.reset();
  }

  search(type:string) {
    console.log(type);
    this._loading = true;
    // console.log(this.searchForm.value);
    this.jcTypeManageService.dataList(
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
      'editTypeId': data.typeId,
      'editTypeName': data.typeName,
      // 'editFtypeName': data.typePid,
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
      typeId: this.editForm.value.editTypeId,
      typeName: this.editForm.value.editTypeName,
      sortNo: this.editForm.value.editSortNo,
      remark: this.editForm.value.editRemark,
      validity: this.editForm.value.editValidity,
    };
    this.jcTypeManageService.editRow(editRow)
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
      'addTypeName': '',
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
      typeName: this.addForm.value.addTypeName,
      sortNo: this.addForm.value.addSortNo,
      remark: this.addForm.value.addRemark,
      validity: this.addForm.value.addValidity,
    };
    this.jcTypeManageService.addRow(addRow)
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
      content: '<b>'+ data.typeName +'</b>',
      onOk() {
        // console.log(data.typeId);
        that.jcTypeManageService.deleteRow(data.typeId)
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
    private jcTypeManageService: JcTypeManageService
  ) {
  }

  ngOnInit() {
    console.log("JcTypeManageComponent ngOnInit.");
    this.searchForm = this.fb.group({
      'typeName': new FormControl(),
      'ftypeName': new FormControl(),
      'remark': new FormControl()
    });

    this.editForm = this.fb.group({
      'editTypeId': new FormControl(),
      'editTypeName': new FormControl(),
      // 'editFtypeName': new FormControl(),
      'editSortNo': new FormControl(),
      'editRemark': new FormControl(),
      'editValidity': new FormControl()
    });

    this.addForm = this.fb.group({
      'addTypeName': new FormControl(),
      // 'addFtypeName': new FormControl(),
      'addSortNo': new FormControl(),
      'addRemark': new FormControl(),
      'addValidity': new FormControl()
    });

    this.search('ngOnInit');
  }

}
