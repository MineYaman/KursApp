import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgretmenComponent } from './ogretmen.component';

describe('OgretmenComponent', () => {
  let component: OgretmenComponent;
  let fixture: ComponentFixture<OgretmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgretmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgretmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
