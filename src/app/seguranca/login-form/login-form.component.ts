import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(private auth: AuthService,
              private errorHandler: ErrorHandlerService,
              private router: Router) { }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(erro => {
        this.errorHandler.handle(erro);
      });
  }
}
