import { TestBed, inject } from '@angular/core/testing';

import { JcTypeManageService } from './jc-type-manage.service';

describe('JcTypeManageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JcTypeManageService]
    });
  });

  it('should be created', inject([JcTypeManageService], (service: JcTypeManageService) => {
    expect(service).toBeTruthy();
  }));
});
