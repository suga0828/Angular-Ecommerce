import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://placekitten.com/'

  getImage(w, h): Observable<any> {
  	let completeUrl = `{$this.baseUrl}/w/h`;
  	console.log(completeUrl)
		return this.http.get<any>(completeUrl)
			.pipe()
  }
  
}
