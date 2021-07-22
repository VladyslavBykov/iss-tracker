import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from 'src/app/app.config-module';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(
    private _httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  sendGoogleAPI(): Observable<boolean> {
    return this._httpClient
      .jsonp(
        this.config.googleApiUrl,
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }
}
