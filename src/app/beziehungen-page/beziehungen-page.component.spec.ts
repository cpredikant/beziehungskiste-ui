import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeziehungenPageComponent } from './beziehungen-page.component';

describe('BeziehungenPageComponent', () => {
  let component: BeziehungenPageComponent;
  let fixture: ComponentFixture<BeziehungenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeziehungenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeziehungenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
