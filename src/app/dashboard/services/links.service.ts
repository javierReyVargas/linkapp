import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.api;
  }


  createLink(url: string, name: string) {
    let objData = {
      url,
      name
    }

    return this.http.post(`${this.url}/links`, objData);
  }

  deleteLink(id: string) {
    return this.http.delete(`${this.url}/links/${id}`)
  }

  loadLinks() {
    return this.http.get(`${this.url}/links`);
  }
}
