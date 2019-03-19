import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbeitgeberPageComponent } from './arbeitgeber-page.component';

describe('ArbeitgeberPageComponent', () => {
  let component: ArbeitgeberPageComponent;
  let fixture: ComponentFixture<ArbeitgeberPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbeitgeberPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbeitgeberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
