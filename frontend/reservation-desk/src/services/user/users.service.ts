import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private requestUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  // getConfig() {
  //   return this.http.get<JSON>(this.requestUrl);
  // }

}

