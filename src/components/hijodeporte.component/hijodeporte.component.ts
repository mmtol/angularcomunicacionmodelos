import { Component, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component(
  {
  selector: 'app-hijodeporte',
  standalone: false,
  templateUrl: './hijodeporte.component.html',
  styleUrl: './hijodeporte.component.css',
})
export class HijodeporteComponent 
{
  @Input() sport!:string;
  @Output() seleccionarFav:EventEmitter<any> = new EventEmitter();

  constructor()
  {

  }

  //necesitamos un metodo para que cada hijo haga click y llamamos al padre
  seleccionarFavHijo(): void
  {
    //dentro de emit() enviaremos los params necesarios
    this.seleccionarFav.emit(this.sport);
  }
}
