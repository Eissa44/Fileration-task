import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactApiService {
  constructor(private _HttpClient: HttpClient) {}

  contactAuth(userdata: object): Observable<any> {
    return this._HttpClient.post(
      `http://upskilling-egypt.com:3001/contact`,
      userdata
    );
  }
}
