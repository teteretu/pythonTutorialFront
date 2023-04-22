import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'http://localhost:5000/';

    constructor(private http: HttpClient) { }

    public getHello(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}
