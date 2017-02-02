import { Injectable } from '@angular/core';

@Injectable()
export class PageAService {

  constructor() { }

  public getLoadedArray() {
    let bigArray = [];
    for(let i=0; i < 100000000; i++) {
      bigArray.push(i);
    }
    return bigArray;
  }

}
