import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Meteo } from '../app/Models/meteo';
import {MeteoService} from "../app/Service/meteo.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'MeteoApp';
  meteoInfos: Meteo = new Meteo();
  constructor(private meteoService: MeteoService) { }
  subcrip = new Subscription();
  ngOnInit()
  {
    this.subcrip = this.meteoService.getEphemerideInfos("").subscribe(data => { });
  }
  ngOnDestroy() {
    this.subcrip.unsubscribe();
  }
}
