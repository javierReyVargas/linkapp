import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.api;
   }


  login(email: string, password: string) {

    let objData = {
      "email": email,
      "password": password
    }

    return this.http.post(`${this.url}/login`, objData);
  }


  signup(email: string, password: string, fullName: string) {
    let objData = {
      name: fullName,
      email,
      password
    }

    return this.http.post(`${this.url}/register`, objData)
    .pipe(
      map(
        (dataResponse: any) => {
          return {
            ...dataResponse,
            id: dataResponse['id'],
            name: objData.name,
            email: objData.email,
            password: objData.password
          }
        }
      )
    )


  }
}
