import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-jc-type-manage',
  templateUrl: './jc-type-manage.component.html',
  styleUrls: ['./jc-type-manage.component.css']
})
export class JcTypeManageComponent implements OnInit {

  validateForm: FormGroup;
  // controlArray = [];

  _dataSet = [];
  _bordered = true;
  _loading = false;
  _pagination = true;
  _header = true;
  _title = false;
  _footer = true;
  _fixHeader = true;
  _size = 'small';

  resetForm() {
    this.validateForm.reset();
  }

  search() {
    console.log(this.validateForm.value);
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      'typeName': new FormControl(),
      'ftypeName': new FormControl(),
      'remark': new FormControl()
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
