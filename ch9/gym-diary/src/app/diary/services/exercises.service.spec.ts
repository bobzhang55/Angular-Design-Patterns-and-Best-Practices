import { TestBed } from '@angular/core/testing';

import { ExercisesService } from './exercises.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('ExercisesService', () => {
  let service: ExercisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(ExercisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
