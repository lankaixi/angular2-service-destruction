import { Component, OnInit } from '@angular/core';

import { PageBService } from './page-b.service';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent implements OnInit {
  public bigArrayLength: number;

  constructor(private _pageBService: PageBService) {  }

  ngOnInit() {
    this.bigArrayLength = this._pageBService.bigArray.length;
  }
}
