import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaIntegrantesComponent } from './vista-integrantes.component';

describe('VistaIntegrantesComponent', () => {
  let component: VistaIntegrantesComponent;
  let fixture: ComponentFixture<VistaIntegrantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaIntegrantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaIntegrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
