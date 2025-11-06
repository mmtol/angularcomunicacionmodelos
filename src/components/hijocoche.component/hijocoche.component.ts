import { Component } from '@angular/core';
import { Coche } from '../../models/Coche';

@Component(
  {
  selector: 'app-hijocoche',
  standalone: false,
  templateUrl: './hijocoche.component.html',
  styleUrl: './hijocoche.component.css',
})

export class HijococheComponent 
{
  public coche:Coche;
  public mensaje:string;

  constructor()
  {
    this.coche = new Coche("Coche", "Rosa", 300, 20, false);
    this.mensaje = "";
  }

  comprobarEstado(): boolean
  {
    let estado:boolean;

    if (!this.coche.estado)
    {
      this.mensaje = "El coche esta apagado";
      this.coche.velocidad = 0;
      estado = false;
    }
    else
    {
      this.mensaje = "El coche esta encendido";
      estado = true;
    }

    return estado;
  }

  encenderCoche(): void
  {
    this.coche.estado = !this.coche.estado;
    this.comprobarEstado();
  }

  acelerarCoche(): void
  {
    if (!this.comprobarEstado())
    {
      alert("Pero si estoy apagado");
    }
    else
    {
      this.coche.velocidad += this.coche.aceleracion;
    }
  }
}
