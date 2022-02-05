import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Genre } from 'src/app/shared/models/Genre';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  getAllGenres(): Observable<Genre[]> {
    // not tested yet
    var allGenres = this.http.get<Genre[]>(`${environment.apiBaseUrl}Genres`);
    // console.log(allGenres);
    
    return allGenres;
  }
}
