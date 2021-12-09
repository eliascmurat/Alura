import {
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpSentEvent,
  HttpUserEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TokenService } from './../token/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor{

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpEvent<any> | HttpUserEvent<any>> {
    if (this.tokenService.hasToken()) {
      const token = this.tokenService.getToken();
      if (token) {
        req = req.clone({
          setHeaders: {
            'x-access-token': token,
          }
        });
      }
    }
    return next.handle(req);
  }

}
