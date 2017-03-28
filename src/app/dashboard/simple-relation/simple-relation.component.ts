import { Component, OnInit, Input } from '@angular/core';
import { DashboardComponent } from './../dashboard.component';

@Component({
  selector: 'app-simple-relation',
  templateUrl: './simple-relation.component.html',
  styleUrls: ['./simple-relation.component.scss']
})
export class SimpleRelationComponent implements OnInit {
  @Input() answer:any;
  @Input() parent:DashboardComponent;

  constructor() { }

  ngOnInit() {
  }

}
