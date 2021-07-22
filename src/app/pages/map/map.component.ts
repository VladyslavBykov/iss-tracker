import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription, timer } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from 'src/app/app.config-module';
import { IssService } from 'src/app/shared/services/iss.service';
import {
  selectISS,
  selectSelectedISS,
} from 'src/app/store/selectors/iss.selectors';
import { IAppState } from 'src/app/store/state/app.state';
import { ISS } from 'src/app/types/iss.type';
import { SaveDialogComponent } from './components/save-dialog/save-dialog.component';
import { MapService } from './services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapComponent implements OnInit, OnDestroy {
  apiLoaded: Observable<boolean>;

  center: google.maps.LatLngLiteral;
  zoom: number = this.config.defaultZoom;

  // marker: google.maps.Marker;
  // markersList: google.maps.Marker[] = [];
  marker: any;
  markersList: any[] = [];

  iss: ISS;
  iss$: Observable<ISS> = this._store.pipe(select(selectISS));
  issSubscription: Subscription;

  selectedIss: ISS;
  selectedIss$: Observable<ISS> = this._store.pipe(select(selectSelectedISS));
  selectedIssSubscription: Subscription;

  isShowPath: boolean = false;
  counter: number = 0;

  fragment: string = '';

  constructor(
    private _store: Store<IAppState>,
    private _mapService: MapService,
    private _issService: IssService,
    public _dialog: MatDialog,
    private _route: ActivatedRoute,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {
    this.apiLoaded = this._mapService.sendGoogleAPI();
    this.issSubscription = this.iss$.subscribe((iss: ISS) =>
      this.updatePosition(iss)
    );
    this._route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
    });
    this.selectedIssSubscription = this.selectedIss$.subscribe((iss: ISS) => {
      if (iss) {
        setTimeout(() => this.updatePosition(iss), 1000);
      } else {
        this.marker = null;
        if (this.isTest()) {
          this._issService.getISSOnce().subscribe((issTest) => {
            return this.updatePosition({
              latitude: +issTest.iss_position.latitude,
              longitude: +issTest.iss_position.longitude,
              timestamp: issTest.timestamp,
            });
          });
        } else {
          this._issService.getISS();
        }
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.issSubscription?.unsubscribe();
    this.selectedIssSubscription?.unsubscribe();
  }

  updatePosition(iss: ISS): void {
    if (!iss) return;
    if (this.counter === 0) {
      this.markersList.push({
        icon: this.config.pathIcon,
        position: {
          lat: iss.latitude,
          lng: iss.longitude,
        },
      });
    }
    this.iss = iss;
    this.counter === 5 ? (this.counter = 0) : (this.counter += 1);
    this.marker = {
      icon: this.config.issIcon,
      position: {
        lat: +iss.latitude,
        lng: +iss.longitude,
      },
    };
    this.center = { lat: iss.latitude, lng: iss.longitude };
  }

  savePosition(): void {
    this._dialog.open(SaveDialogComponent, {
      data: {
        iss: this.iss,
      },
    });
  }

  isTest(): boolean {
    return this.fragment === 'test';
  }
}
