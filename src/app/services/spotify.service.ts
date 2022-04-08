import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDrPAakgDwBSCFqj-eGCU1-xX7la2oPZ6ysL1ooIoSD_id4sj4RB5xETwSPrL4KeHm3SWgLanM94XePEFk'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
