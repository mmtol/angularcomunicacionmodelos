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
      new Coche("Coche 1", "Rosa", 300, 20, false),
      new Coche("Coche 2", "Azul", 300, 20, false),
      new Coche("Coche 3", "Verde", 300, 20, false),
      new Coche("Coche 4", "Amarillo", 300, 20, false),
      new Coche("Coche 5", "Rojo", 300, 20, false)
    ]
  }
}
