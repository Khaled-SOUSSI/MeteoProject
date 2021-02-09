import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

let urlForecast: string = "https://api.meteo-concept.com/api/forecast/daily/0?token=";
let urlEphemeride: string = "https://api.meteo-concept.com/api/ephemeride/0?token=";
let apiKey: string = "a3480405b59c6bef227444a83e219b689f50189ac3e946d9d2289eed2cda06d3";
@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }
  
  getForecastInfos(codeInsee: string) {
    return this.http.get(urlForecast+apiKey+"&insee="+codeInsee)
  }
  getEphemerideInfos(codeInsee: string) {
    return this.http.get(urlEphemeride+apiKey+"&insee="+codeInsee)
  }
}
