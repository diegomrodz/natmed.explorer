import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRelationComponent } from './simple-relation.component';

describe('SimpleRelationComponent', () => {
  let component: SimpleRelationComponent;
  let fixture: ComponentFixture<SimpleRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
