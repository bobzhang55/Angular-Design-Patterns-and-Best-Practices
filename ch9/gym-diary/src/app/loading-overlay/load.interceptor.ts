import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, delay, finalize } from 'rxjs';
import { LoadService } from './load.service';

@Injectable()
export class LoadInterceptor implements HttpInterceptor {
  private loadService = inject(LoadService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    if (request.headers.get('X-LOADING') === 'false') {
      return next.handle(request);
    }

    this.loadService.showLoader();
    return next
      .handle(request).pipe(delay(2000))
      .pipe(finalize(() => this.loadService.hideLoader()));
  }
}
// setTimeout(function () { your_func(); }, 5000);
