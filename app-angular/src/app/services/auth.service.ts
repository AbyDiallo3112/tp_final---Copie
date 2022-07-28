import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email:string,password:string){
    return this.http.post(environment.api+'/auth/login',{email,password},optionRequete);
  }
  inscription(user:User){
    return this.http.post(environment.api+'/auth/inscription',user);
  }


}
