import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ExerciseList, ExerciseListAPI } from '../interfaces/exercise';

@Injectable({
  providedIn: 'root',
})
export class ExercisesService {
  private httpClient = inject(HttpClient);

  private url = 'exercises';

  getExercises(filter?: string): Observable<ExerciseList> {
    const headers = new HttpHeaders().set('X-LOADING', 'true');
    filter = filter ? `?filter=${filter}` : '';
    return this.httpClient
      .get<ExerciseListAPI>(`${this.url}${filter}`, { headers })
      .pipe(map((api) => api?.items));
  }
}


///==========Testing: http://localhost:3000/exercises?filter=pre =======
/*
{
  "items": [
    {
      "id": "29",
      "description": "Dumbbell Bench Press"
    },
    {
      "id": "24",
      "description": "Arnold Press"
    },
    {
      "id": "11",
      "description": "Incline Bench Press"
    },
    {
      "id": "6",
      "description": "Shoulder Press"
    },
    {
      "id": "5",
      "description": "Bench Press"
    },
    {
      "id": "4",
      "description": "Leg Press"
    }
  ],
  "hasNext": false
}
*/
