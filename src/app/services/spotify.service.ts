import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAk3FUp-iMgF1h5DfQps5403cn2QVM71UgO7UTtcs3cZzp5kIGz6oyYt6SOJj4drtdVTBFDnQxgYs3actY'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(map((data:any) => data['albums'].items));
  }

  getArtista(termino:string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAk3FUp-iMgF1h5DfQps5403cn2QVM71UgO7UTtcs3cZzp5kIGz6oyYt6SOJj4drtdVTBFDnQxgYs3actY'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
    .pipe(map((data:any) => data['artists'].items));
  }
}
