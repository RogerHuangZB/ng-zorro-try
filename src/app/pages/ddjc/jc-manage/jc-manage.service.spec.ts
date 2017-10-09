import { TestBed, inject } from '@angular/core/testing';

import { JcManageService } from './jc-manage.service';

describe('JcManageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JcManageService]
    });
  });

  it('should be created', inject([JcManageService], (service: JcManageService) => {
    expect(service).toBeTruthy();
  }));
});
