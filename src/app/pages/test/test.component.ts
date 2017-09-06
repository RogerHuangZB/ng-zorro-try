import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-component, [test-component], [component="test"]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("TestComponent ngOnInit.");
  }

}
