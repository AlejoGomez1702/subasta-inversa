import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSsiaComponent } from './panel-ssia.component';

describe('PanelSsiaComponent', () => {
  let component: PanelSsiaComponent;
  let fixture: ComponentFixture<PanelSsiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSsiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
