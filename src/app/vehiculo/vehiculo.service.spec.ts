/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehiculoService } from './vehiculo.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { environment } from '../../environments/environment';
import { VehiculoComponent } from './vehiculo.component';
describe('Service: Vehiculo', () => {
  let service : VehiculoService;
  let httpController: HttpTestingController;
	let url = environment.baseUrl;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiculoService],
      declarations: [VehiculoComponent]
    });
    service = TestBed.inject(VehiculoService);
	  httpController = TestBed.inject(HttpTestingController);
  });

  it('should ...', inject([VehiculoService], (service: VehiculoService) => {
    expect(service).toBeTruthy();
  }));

  it('should call getAllArtist and return an array of Artist', () => {			
    service.getVehiculos().subscribe(vehiculos => {
      vehiculos = vehiculos.sort((a, b) => a.id < b.id ? -1 : 1);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: url,
    });
  });
});
