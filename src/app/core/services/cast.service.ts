import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cast } from 'src/app/shared/models/Cast';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient) { }

  getCastDetails(id: number): Observable<Cast> {
    // not tested yet
    return this.http.get<Cast>(`${environment.apiBaseUrl}cast/${id}`);
  }
}
