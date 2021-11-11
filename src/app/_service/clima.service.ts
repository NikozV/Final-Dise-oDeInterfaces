import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {


  key='b3290ab41061431163617beb68d3b208';
  //url= 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';


  constructor(private http: HttpClient){ }

  obtenerClima(ciudad: string): Observable<any> {
    return this.http.get(`api.openweathermap.org/data/2.5/weather?q=${ciudad}&mode=json&units=metric&appid=${this.key}`);
  }
}
