import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PessoaService {

  pessoaUrl: string;

  constructor(private http: AuthHttp) {
    this.pessoaUrl = `${environment.apiUrl}/pessoas`;

  }

  listarTodas(): Promise<any> {
    return this.http.get(`${this.pessoaUrl}`)
      .toPromise()
      .then(response => {
        return response.json().content;
      });
  }

}
