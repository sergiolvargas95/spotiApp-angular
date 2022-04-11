import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery( query:string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA7jdOircQcFReXXrbzOPqedF_h_4i2LD4OAGGQjXS-ritqcyZgwWhAsIcOiJmTJQq-qAlYSFZSzeyAj3o'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map((data:any) => data['albums'].items));
  }

  getArtistas(termino:string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe(map((data:any) => data['artists'].items));
  }

  getArtista(id:string) {
    return this.getQuery(`artists/${id}`)
  }

  getTopTracks(id:string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((data:any) => data['tracks']));
  }
}
