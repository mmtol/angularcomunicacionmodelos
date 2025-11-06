import { Component } from '@angular/core';

@Component(
  {
  selector: 'app-padredeportes',
  standalone: false,
  templateUrl: './padredeportes.component.html',
  styleUrl: './padredeportes.component.css',
})
export class PadredeportesComponent 
{
  public deportes: Array<string>;
  public mensaje:string;

  constructor()
  {
    this.mensaje = "";
    this.deportes = ["Pin pon", "Tenis", "Ballet", "Baloncesto", "Futbol"];
  }

  //necesitamos un metodo que reciba event que va a ser tipado (any)
  seleccionarFav(event:any): void
  {
    console.log("llamando al padre" + event);
    this.mensaje = "Su deporte favorito es " + event;
  }
}
