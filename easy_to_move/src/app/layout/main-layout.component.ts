import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router, RouterModule } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) { }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}
