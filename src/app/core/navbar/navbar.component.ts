import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { AuthService } from '../../seguranca/auth.service';
import { LogoutService } from '../../seguranca/logout.service';
import { ErrorHandlerService } from '../error-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  exibindoMenu = false;

  constructor(public auth: AuthService,
              private logoutService: LogoutService,
              private errorHandler: ErrorHandlerService,
              private router: Router) { }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
