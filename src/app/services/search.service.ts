import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = '/api';
  // Change this to be the common URL among services

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // Return empty result - may not be great in the future
      return of(result as T);
    };
  }

  post<T> (controller: string, data: any): Observable<T> {
    console.log('Posting');
    return this.http.post<T>(`${this.baseUrl}/${controller}`, data)
    .pipe(this.handleError());
  }

  get<T> (url: string): Observable<T> {
    console.log('Getting -', url);
    return this.http.get<T>(`${url}`)
    .pipe(this.handleError());
  }
}
