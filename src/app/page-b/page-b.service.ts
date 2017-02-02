import { Injectable } from '@angular/core';

@Injectable()
export class PageBService {
  public bigArray: Array<number> = [];

  constructor() {
    for(let i=0; i < 100000000; i++) {
      this.bigArray.push(i);
    }
  }

}
