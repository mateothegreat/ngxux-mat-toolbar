import { TestBed } from '@angular/core/testing';

import { NgxuxMatToolbarService } from './ngxux-mat-toolbar.service';

describe('NgxuxMatToolbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxuxMatToolbarService = TestBed.get(NgxuxMatToolbarService);
    expect(service).toBeTruthy();
  });
});
