import { Injectable } from '@angular/core';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriaService {

  categoriaUrl = 'http://localhost:8080/categorias';

  constructor(private http: AuthHttp) { }

  listarTodas(): Promise<any> {
    return this.http.get(`${this.categoriaUrl}`)
      .toPromise()
      .then(response => {
        return response.json();
      });
  }

}
