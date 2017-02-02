/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PageAService } from './page-a.service';

describe('PageAService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageAService]
    });
  });

  it('should ...', inject([PageAService], (service: PageAService) => {
    expect(service).toBeTruthy();
  }));
});
