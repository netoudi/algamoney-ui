import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class PessoaService {

  pessoaUrl = 'http://localhost:8080/pessoas';

  constructor(private http: Http) { }

  listarTodas(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(`${this.pessoaUrl}`, { headers })
      .toPromise()
      .then(response => {
        return response.json().content;
      });
  }

}
