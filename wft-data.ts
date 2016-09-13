import {Injectable}											from '@angular/core';
import {Http, Headers, RequestOptions}	from '@angular/http';
import {Observable}											from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class WFTDataService {
	baseUrl = "http://womenfortrump.duffeytech.com:1337/";

	constructor(private http: Http) {
		this.http = http;
	}
	getEvents() {
		return this.http.get(this.baseUrl + 'event').map(res => res.json());
	}
}