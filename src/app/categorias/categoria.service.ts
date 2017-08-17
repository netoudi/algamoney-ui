import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriaService {

  categoriaUrl: string;

  constructor(private http: AuthHttp) {
    this.categoriaUrl = `${environment.apiUrl}/categorias`;
  }

  listarTodas(): Promise<any> {
    return this.http.get(`${this.categoriaUrl}`)
      .toPromise()
      .then(response => {
        return response.json();
      });
  }

}
