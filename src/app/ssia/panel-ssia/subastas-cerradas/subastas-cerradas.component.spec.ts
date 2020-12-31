import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubastasCerradasComponent } from './subastas-cerradas.component';

describe('SubastasCerradasComponent', () => {
  let component: SubastasCerradasComponent;
  let fixture: ComponentFixture<SubastasCerradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubastasCerradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubastasCerradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
