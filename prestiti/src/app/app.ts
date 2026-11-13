import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShedaDispositivo } from './sheda-dispositivo/sheda-dispositivo';


@Component({
  imports: [RouterOutlet , ShedaDispositivo ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('prestiti');
}
