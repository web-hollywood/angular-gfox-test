import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PunkService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getRandomBeers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/beers/random`);
  }

  getRandomNonAlcoholicBeers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/beers/random?abv_lt=15`);
  }

  getBeersByName(keyword): Observable<any> {
    const params = new HttpParams().set('beer_name', keyword);

    return this.http.get(`${this.apiUrl}/beers`, {params: params});
  }

  getBeersByDescription(keyword): Observable<any> {
    const params = new HttpParams().set('beer_name', keyword);

    return this.http.get(`${this.apiUrl}/beers`, {params: params});
  }
}
