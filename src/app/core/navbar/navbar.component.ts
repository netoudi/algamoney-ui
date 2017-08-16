import { Component } from '@angular/core';

import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  exibindoMenu = false;

  constructor(public auth: AuthService) { }

}
