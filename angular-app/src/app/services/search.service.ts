import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = '/api';
  // Change this to be the common URL among services

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T> (err) {
    // TODO: send the error to remote logging infrastructure
    console.error('ERROR: ', err);

    // Return empty result - we should be throwing an error here
    return of({} as T);
  }

  post<T> (url: string, data: any): Observable<T> {
    return this.http.post<T>(`${url}`, data)
    .pipe(
      catchError(err => {
        return this.handleError<T>(err);
      })
    );
  }

  get<T> (url: string): Observable<T> {
    return this.http.get<T>(`${url}`)
    .pipe(
      catchError(err => {
        return this.handleError<T>(err);
      })
    );
  }
}
