import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from 'src/app/shared/models/Movie';
import { MovieCard } from 'src/app/shared/models/MovieCard';
import { environment } from 'src/environments/environment';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // not tested yet
  getPurchasedMovies(id: number): Observable<MovieCard[]> {
    return this.http.get<MovieCard[]>(`${environment.apiBaseUrl}user/${id}/purchases`)
  }

  // not tested yet
  getFavoritedMovies(id: number): Observable<MovieCard[]> {
    return this.http.get<MovieCard[]>(`${environment.apiBaseUrl}/user/${id}/favorites`)
  }
}
