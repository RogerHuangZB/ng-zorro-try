import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'app-jc-type-manage',
  templateUrl: './jc-type-manage.component.html',
  styleUrls: ['./jc-type-manage.component.css']
})
export class JcTypeManageComponent implements OnInit {

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

  editData = null;
  addData = null;

  resetForm() {
    this.searchForm.reset();
  }

  search() {
    console.log(this.searchForm.value);
  }

  isEditVisible = false;
  isEditConfirmLoading = false;

  isAddVisible = false;
  isAddConfirmLoading = false;

  showEditModal = (data) => {
    // console.log(data);
    this.editForm.reset();
    this.editForm.setValue({
      'editTypeName': data.tname,
      'editFtypeName': data.ftname,
      'editSortNo': data.sort_no,
      'editRemark': data.remark,
      'editValidity': data.validity
    });
    this.isEditVisible = true;
  };

  editOk = (e) => {
    this.isEditConfirmLoading = true;
    console.log(this.editForm.value);
    setTimeout(() => {
      this.isEditVisible = false;
      this.isEditConfirmLoading = false;
    }, 3000);
  };

  editCancel = (e) => {
    this.editData = null;
    this.isEditVisible = false;
  };

  showAddModal = () =>{
    this.isAddVisible = true;
  };

  addOk = (e) => {
    this.isAddConfirmLoading = true;
    console.log(this.addData);
    setTimeout(() => {
      this.isAddVisible = false;
      this.isAddConfirmLoading = false;
    }, 3000);
  };

  addCancel = (e) => {
    this.addData = null;
    this.isAddVisible = false;
  };

  showDeleteConfirm = (data) => {
    this.confirmServ.confirm({
      title  : '您是否确认要删除这项内容',
      content: '<b>一些解释</b>',
      onOk() {
        console.log('确定');
      },
      onCancel() {
      }
    });
  };

  constructor(
    private fb: FormBuilder,
    private confirmServ: NzModalService
  ) {
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      'typeName': new FormControl(),
      'ftypeName': new FormControl(),
      'remark': new FormControl()
    });

    this.editForm = this.fb.group({
      'editTypeName': new FormControl(),
      'editFtypeName': new FormControl(),
      'editSortNo': new FormControl(),
      'editRemark': new FormControl(),
      'editValidity': new FormControl()
    });

    this.addForm = this.fb.group({
      'addTypeName': new FormControl(),
      'addFtypeName': new FormControl(),
      'addSortNo': new FormControl(),
      'addRemark': new FormControl(),
      'addValidity': new FormControl()
    });

    for (let i = 1; i <= 20; i++) {
      this._dataSet.push({
        tid        : i,
        tname       : 'John Brown',
        tpid        : `${i}2`,
        ftname       : 'John Brown',
        remark    : `New York No. ${i} Lake Park`,
        sort_no : i,
        validity : i
      });
    }
  }

}
