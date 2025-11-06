import { Component } from '@angular/core';
import { Input } from '@angular/core';
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
  @Input() car!:Coche;
  public mensaje:string;

  constructor()
  {
    this.mensaje = "";
  }

  comprobarEstado(): boolean
  {
    let estado:boolean;

    if (!this.car.estado)
    {
      this.mensaje = "El coche esta apagado";
      this.car.velocidad = 0;
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
    this.car.estado = !this.car.estado;
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
      this.car.velocidad += this.car.aceleracion;
    }
  }
}
