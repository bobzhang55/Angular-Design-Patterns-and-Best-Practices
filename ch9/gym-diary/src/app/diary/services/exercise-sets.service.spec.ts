import { TestBed } from '@angular/core/testing';

import { ExerciseSetsService } from './exercise-sets.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExerciseSetsService', () => {
  let service: ExerciseSetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(ExerciseSetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
