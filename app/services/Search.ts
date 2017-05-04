import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
 
@Injectable()
export class SearchService {
  
  constructor(private http: Http) {}
  
  search(term: string) {
    
    //Make strong typed
    let obs = this.http.get('https://api.spotify.com/v1/search?q=' + term + '&type=artist')
    .map(response => response.json().artists.items)
    return obs
  } 
}