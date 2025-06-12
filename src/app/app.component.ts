import { Component } from '@angular/core';
import { FirstGraphComponent } from './first-graph/first-graph.component';

@Component({
  selector: 'app-root',
  imports: [FirstGraphComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'best_deepseek';
}
