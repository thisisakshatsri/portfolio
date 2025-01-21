import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private baseUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  getTopTracks(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.spotifyToken}`
    });

    return this.http.get(
      `${this.baseUrl}/me/top/tracks?time_range=long_term&limit=5`,
      { headers }
    );
  }
}