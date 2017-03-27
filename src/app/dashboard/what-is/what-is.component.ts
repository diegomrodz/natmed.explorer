import { Component, Input, OnInit } from '@angular/core';

import { DashboardComponent } from './../dashboard.component';

@Component({
  selector: 'app-what-is',
  templateUrl: './what-is.component.html',
  styleUrls: ['./what-is.component.scss']
})
export class WhatIsComponent implements OnInit {
  @Input() answer:any;
  @Input() parent:DashboardComponent;

  constructor() { }

  ngOnInit() {
  }

}
