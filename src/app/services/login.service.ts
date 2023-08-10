import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = '172.16.0.147:2001/'
const APICEP = 'http://viacep.com.br/ws/'
const APIBanco = 'https://brasilapi.com.br/api/banks/v1'

interface Login {
  email: string;
  senha: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }



  registration(body: any) {
    return this.http.post(`${API}registerAuth`, {body})
  }

  acessLogin(body: Login ) {
    return this.http.post(`${API}login`, {body})
  }

  returnCep(cep: string) {
    return this.http.get(`${APICEP}${cep}/json/`)
  }

  returnBanco() {
    return this.http.get(`${APIBanco}`)
  }
 }
