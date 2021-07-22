import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { interval, Observable, of, Subject } from "rxjs";
import {
  catchError,
  map,
  mergeMap,
  repeatWhen,
  takeUntil,
} from "rxjs/operators";
import { AppConfig, APP_CONFIG } from "src/app/app.config-module";
import { GetIss } from "src/app/store/actions/iss.action";
import { IAppState } from "src/app/store/state/app.state";
import { ISS } from "src/app/types/iss.type";
import { LOCAL_STORAGE_ITEM } from "../enums/loca-storage.enum";

interface ISSHttp {
  iss_position: {
    latitude: string;
    longitude: string;
  };
  message: string;
  timestamp: number;
}

@Injectable({
  providedIn: "root",
})
export class IssService {
  private readonly _stop = new Subject<void>();
  private readonly _start = new Subject<void>();

  constructor(
    private _httpClient: HttpClient,
    private _store: Store<IAppState>,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  getISSList(): ISS[] {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM.ISS_LIST)) || [];
  }

  getISS(): void {
    this.sendRequest().subscribe((issHttp: ISSHttp) => {
      const iss: ISS = {
        timestamp: issHttp.timestamp,
        latitude: +issHttp.iss_position.latitude,
        longitude: +issHttp.iss_position.longitude,
      };
      this._store.dispatch(new GetIss(iss));
    });
  }

  getISSOnce(): Observable<ISSHttp> {
    return this._httpClient
      .jsonp(this.config.iisApiUrl, "callback")
      .pipe(map((iss: ISSHttp) => iss));
  }

  sendRequest(): Observable<ISSHttp> {
    return interval(2000).pipe(
      mergeMap(() => this._httpClient.jsonp(this.config.iisApiUrl, "callback")),
      takeUntil(this._stop),
      repeatWhen(() => this._start),
      catchError((e) => of(e))
    );
  }
  start(): void {
    this._start.next();
  }

  stop(): void {
    this._stop.next();
  }

  addLocally(iss: ISS): void {
    const issList: ISS[] =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM.ISS_LIST)) || [];
    issList.push(iss);
    localStorage.setItem(LOCAL_STORAGE_ITEM.ISS_LIST, JSON.stringify(issList));
  }

  removeLocally(id: number): void {
    const issList: ISS[] =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM.ISS_LIST)) || [];
    localStorage.setItem(
      LOCAL_STORAGE_ITEM.ISS_LIST,
      JSON.stringify([...issList.filter((iss: ISS) => iss.timestamp !== id)])
    );
  }

  saveFilter(query: string): void {
    localStorage.setItem(LOCAL_STORAGE_ITEM.FILTER, query);
  }

  getFilter(): string {
    return localStorage.getItem(LOCAL_STORAGE_ITEM.FILTER) || "";
  }
}
