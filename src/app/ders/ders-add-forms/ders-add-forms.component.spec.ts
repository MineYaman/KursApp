import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DersAddFormsComponent } from './ders-add-forms.component';

describe('DersAddFormsComponent', () => {
  let component: DersAddFormsComponent;
  let fixture: ComponentFixture<DersAddFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DersAddFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DersAddFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
