import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieCard } from '../../shared/models/moviecard';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  // HttpClient to make the API call, comes from HttpClientModule

  // HomeComponent is going to call this method
  getTopGrossingMovies() : Observable<MovieCard[]> {
    // call the API Url using HttpClient class
    return this.http.get<MovieCard[]>( `${environment.apiBaseUrl}movies/top-grossing` );
  }

}
