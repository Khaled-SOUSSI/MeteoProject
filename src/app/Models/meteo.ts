import { Time } from "@angular/common";

export class Meteo {
    ville: string;
    max_temp: number;
    min_temp: number;
    date: Date;
    sunrise: Time;
    sunset: Time;
}
