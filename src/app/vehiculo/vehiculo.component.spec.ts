/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { VehiculoComponent } from './vehiculo.component';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './Vehiculo';
import { listaVehiculos } from './vehiculoData';


describe('BookListComponent', () => {
 let component: VehiculoComponent;
 let fixture: ComponentFixture<VehiculoComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ VehiculoComponent ],
     providers: [ VehiculoService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(VehiculoComponent);
   component = fixture.componentInstance;
   component.listVehiculos = listaVehiculos;
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tr")).childNodes.length).toEqual(component.listVehiculos.length + 1);
 });

});