import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Vehiculo } from './Vehiculo';


@Injectable({
    providedIn: 'root'
  })
export class VehiculoService {

    private apiUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    getVehiculos(): Observable<Vehiculo[]> {
        return this.http.get<Vehiculo[]>(this.apiUrl);
      }
}
