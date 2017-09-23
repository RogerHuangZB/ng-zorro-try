import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {

  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _indeterminate = false;

  _dataSet = [];
  _bordered = true;
  _loading = false;
  _pagination = true;
  _header = true;
  _title = true;
  _footer = true;
  _size = 'small';

  constructor() {
  }

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this._dataSet.push({
        key        : i,
        name       : 'John Brown',
        age        : `${i}`,
        address    : `New York No. ${i} Lake Park`,
        // description: `My name is John Brown, I am ${i} years old, living in New York No. ${i} Lake Park.`,
        description1: `My name is `,
        description2: `John Brown, `,
        description3: `I am `,
        description4: `${i} years old, `,
        description5: `living in `,
        description6: `New York `,
        description7: `No. ${i} `,
        description8: `Lake Park.`,
        description9: ` ${i} ${i} ${i} `,
      });
    }
  }

  _displayDataChange($event) {
    this._displayData = $event;
  };

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
    this._disabledButton = !this._dataSet.some(value => value.checked);
    this._checkedNumber = this._dataSet.filter(value => value.checked).length;
  };

  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => data.checked = true);
    } else {
      this._displayData.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  };

  _operateData() {
    this._operating = true;
    setTimeout(_ => {
      this._dataSet.forEach(value => value.checked = false);
      this._refreshStatus();
      this._operating = false;
    }, 1000);
  };

}
