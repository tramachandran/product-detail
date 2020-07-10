import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatService {

  constructor(private _http: HttpClient) { }
  getBatsURL = "https://my-json-server.typicode.com/tramachandran/product-detail/bats";

  getBats(): Observable<any> {
    return this._http.get(this.getBatsURL);
  }

  getBatDetails(id: string): Observable<any> {
    let url = `${this.getBatsURL}/${id}`;
    return this._http.get(url);
  }

}
