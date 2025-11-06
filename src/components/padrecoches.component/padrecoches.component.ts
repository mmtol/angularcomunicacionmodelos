import { Component } from '@angular/core';
import { Coche } from '../../models/Coche';
import { HijococheComponent } from '../hijocoche.component/hijocoche.component';

@Component(
  {
  selector: 'app-padrecoches.component',
  standalone: false,
  templateUrl: './padrecoches.component.html',
  styleUrl: './padrecoches.component.css',
})

export class PadrecochesComponent 
{
  public coches: Array<Coche>;

  constructor()
  {
    this.coches = 
    [
      new Coche("Coche", "Rosa", 0, 20, false),
      new Coche("Coche", "Azul", 0, 20, false),
      new Coche("Coche", "Verde", 0, 20, false),
      new Coche("Coche", "Amarillo", 0, 20, false),
      new Coche("Coche", "Rojo", 0, 20, false)
    ]
  }
}
