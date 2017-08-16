import { Injectable } from '@angular/core';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PessoaService {

  pessoaUrl = 'http://localhost:8080/pessoas';

  constructor(private http: AuthHttp) { }

  listarTodas(): Promise<any> {
    return this.http.get(`${this.pessoaUrl}`)
      .toPromise()
      .then(response => {
        return response.json().content;
      });
  }

}
