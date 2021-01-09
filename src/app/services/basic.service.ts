import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICodeItem } from './config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  apiUrl = `http://localhost:3000/`;

  constructor(
    private http: HttpClient
  ) { }

  get(table: string): Observable<any[]> {
    let url = `${this.apiUrl}${table}`;
    
    return this.http.get<any[]>(url);
  }

  getCodes(): Observable<ICodeItem[]>{
    return this.get("codes");
  }
}
