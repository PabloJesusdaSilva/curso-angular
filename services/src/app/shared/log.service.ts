import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  consoleLog(msg: string): void {
    console.log(msg);
  }

  constructor() {}
}
