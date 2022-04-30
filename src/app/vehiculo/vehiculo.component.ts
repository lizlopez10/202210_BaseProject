import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './Vehiculo';
import { VehiculoService } from './vehiculo.service';
import { listaVehiculos } from './vehiculoData';
@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  listVehiculos : Array<Vehiculo> = [];
  listTotal :  Array<Vehiculo> = [];
  nuevoObjeto = {} as IDictionary;
  constructor( private vehiculoService : VehiculoService) { }

  getVehiculos(){
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.listVehiculos = vehiculos;
      this.listTotal = vehiculos;
      this.nuevoObjeto = this.groupByType();
    });
  }
  
  groupByType(){  
    var nuevoObjeto = {} as IDictionary;
    this.listVehiculos.forEach( x => {
      if( !nuevoObjeto.hasOwnProperty(x.marca)){
        nuevoObjeto[x.marca] = 0;
      }
      nuevoObjeto[x.marca] = nuevoObjeto[x.marca] + 1;
    })
    console.log(nuevoObjeto);
    return nuevoObjeto;
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
interface IDictionary {
  [index: string]: number;
}