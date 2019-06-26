import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFarmaceuticoComponent } from './lista-farmaceutico.component';

describe('ListaFarmaceuticoComponent', () => {
  let component: ListaFarmaceuticoComponent;
  let fixture: ComponentFixture<ListaFarmaceuticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFarmaceuticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFarmaceuticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
