import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true, // Indica que o componente é standalone
  selector: 'app-main-layout',
  imports: [
    RouterModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  // Aqui podemos incluir a lógica de controle do layout, se necessário
}
