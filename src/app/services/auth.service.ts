import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient, public router:Router) { }

  user: any;

  login(email: string, password: string) {
    console.log("requete post /api/login " + email + ' , ' + password);
    return this.http.post('http://localhost:8080/api/login', {email, password}).subscribe(
      (data : any) => {
        if (data.error) {
          console.error(data.error);
          return;
        }
        else {
          this.user = data;
          this.router.navigate(["/home"])
        }
      }
    )
  }

  register(username: string, password: string) {
    return this.http.post('http://localhost:8080/api/register', {username, password}).subscribe(
      (data : any) => {
        if (data.error) {
          console.error(data.error);
          return;
        }
        else {
          this.user = data;
        }
      }
    )
  }

  logout() {
    return this.http.post('http://localhost:8080/api/logout', {})
  }
}
