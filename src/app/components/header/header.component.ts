import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ConfimationDialogComponent } from 'src/app/shared/components/confimation-dialog/confimation-dialog.component';
import {
  selectISS,
  selectSelectedISS,
} from 'src/app/store/selectors/iss.selectors';
import { IAppState } from 'src/app/store/state/app.state';
import { ISS } from 'src/app/types/iss.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  iss: ISS;
  iss$: Observable<ISS> = this._store.pipe(select(selectISS));
  issSubscription: Subscription;
  selectedIss: ISS;
  selectedIss$: Observable<ISS> = this._store.pipe(select(selectSelectedISS));
  selectedIssSubscription: Subscription;

  constructor(private _store: Store<IAppState>, private _dialog: MatDialog) {
    this.issSubscription = this.iss$.subscribe((iss: ISS) => {
      this.iss = iss;
    });
    this.selectedIssSubscription = this._store
      .pipe(select(selectSelectedISS))
      .subscribe((iss: ISS) => (this.selectedIss = iss));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.issSubscription.unsubscribe();
    this.selectedIssSubscription.unsubscribe();
  }

  getLatitude(): number {
    return this.selectedIss ? this.selectedIss.latitude : this.iss.latitude;
  }

  getLongitude(): number {
    return this.selectedIss ? this.selectedIss.longitude : this.iss.longitude;
  }

  getTimestamp(): number {
    return this.selectedIss ? this.selectedIss.timestamp : this.iss.timestamp;
  }

  favorite(): void {
    this._dialog.open(ConfimationDialogComponent, {
      data: {
        title: 'Not implemented feature',
        message: 'Sorry, but this is still in development',
        close: true,
      },
    });
  }

  share(): void {
    this._dialog.open(ConfimationDialogComponent, {
      data: {
        title: 'Not implemented feature',
        message: 'Sorry, but this is still in development',
        close: true,
      },
    });
  }
}
