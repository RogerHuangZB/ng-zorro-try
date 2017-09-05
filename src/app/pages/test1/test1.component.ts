import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test1-component, [test1-component], [component="test1"]',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
