import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/Movie';
import { MovieCard } from 'src/app/shared/models/MovieCard';
import { environment } from 'src/environments/environment';
import { MovieDetailsComponent } from 'src/app/public/movie-details/movie-details.component';

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

  getMovieDetails(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiBaseUrl}movies/${id}`);
  }

  getMoviesOfGenre(id: number): Observable<Object> {
    var pagedResults =  this.http.get<Object>(`${environment.apiBaseUrl}movies/genre/${id}`);
    console.log(pagedResults);
    return pagedResults;
  }

}
