import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxuxMatToolbarComponent } from './ngxux-mat-toolbar.component';

describe('NgxuxMatToolbarComponent', () => {
  let component: NgxuxMatToolbarComponent;
  let fixture: ComponentFixture<NgxuxMatToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxuxMatToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxuxMatToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
