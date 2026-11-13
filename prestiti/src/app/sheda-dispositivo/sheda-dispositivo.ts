import { Component } from '@angular/core';
import { IDispositivo } from '../dati/modello/i-dispositivo'

@Component({
  imports: [],
  selector: 'app-sheda-dispositivo',
  styleUrl: './sheda-dispositivo.css',
  templateUrl: './sheda-dispositivo.html',
})
export class ShedaDispositivo {
  dispositivo: IDispositivo = {
    id: 2,
    inventario: 'INV-0102',
    tipo: 'notebook',
    marca: 'Lenovo',
    modello: 'ThinkPad L14',
    anno: 2023,
    stato: 'in prestito'
  };
}
