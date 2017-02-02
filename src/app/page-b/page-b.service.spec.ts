/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PageBService } from './page-b.service';

describe('PageBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageBService]
    });
  });

  it('should ...', inject([PageBService], (service: PageBService) => {
    expect(service).toBeTruthy();
  }));
});
