import { Component } from '@angular/core';

import { PageAService } from './page-a.service';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})
export class PageAComponent {
  public bigArray: Array<number> = [];

  constructor(private _pageAService: PageAService) {

  }

  onLoadBigArray() {
    this.bigArray = this._pageAService.getLoadedArray();
  }



}
