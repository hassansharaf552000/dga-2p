import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DgaSidebarComponent } from './components/shared/dga-sidebar/dga-sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DgaSidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dga-system');
}
