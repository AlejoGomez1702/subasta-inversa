import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubastasAbiertasComponent } from './subastas-abiertas.component';

describe('SubastasAbiertasComponent', () => {
  let component: SubastasAbiertasComponent;
  let fixture: ComponentFixture<SubastasAbiertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubastasAbiertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubastasAbiertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
