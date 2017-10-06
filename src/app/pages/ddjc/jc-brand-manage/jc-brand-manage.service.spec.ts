import { TestBed, inject } from '@angular/core/testing';

import { JcBrandManageService } from './jc-brand-manage.service';

describe('JcBrandManageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JcBrandManageService]
    });
  });

  it('should be created', inject([JcBrandManageService], (service: JcBrandManageService) => {
    expect(service).toBeTruthy();
  }));
});
