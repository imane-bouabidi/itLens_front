import { TestBed } from '@angular/core/testing';

import { SurveyEditionsService } from './survey-editions.service';

describe('SurveyEditionsService', () => {
  let service: SurveyEditionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyEditionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
