import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ROUTES_NAME } from 'src/app/shared/enums/routes.enum';
import { IssService } from 'src/app/shared/services/iss.service';
import {
  GetIss,
  GetIssList,
  GetSelectedIss,
} from 'src/app/store/actions/iss.action';
import {
  selectFilteredISS,
  selectSelectedISS,
} from 'src/app/store/selectors/iss.selectors';
import { IAppState } from 'src/app/store/state/app.state';
import { ISS } from 'src/app/types/iss.type';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'name',
    'latitude',
    'longitude',
    'timestamp',
    'actions',
  ];
  dataSource: ISS[];
  selectedISS: ISS;
  issList$: Observable<ISS[]> = this._store.pipe(select(selectFilteredISS));
  issSubscription: Subscription;
  selectedIssSubscription: Subscription;

  constructor(
    private _store: Store<IAppState>,
    private _issService: IssService,
    private _router: Router
  ) {
    this.issSubscription = this.issList$.subscribe((issList: ISS[]) => {
      this.dataSource = issList;
    });
    this.selectedIssSubscription = this._store
      .pipe(select(selectSelectedISS))
      .subscribe((iss: ISS) => (this.selectedISS = iss));
  }

  ngOnInit(): void {
    this._store.dispatch(new GetIssList());
  }

  ngOnDestroy(): void {
    this.issSubscription.unsubscribe();
    this.selectedIssSubscription.unsubscribe();
  }

  onSelect(iss: ISS): void {
    if (this.isSelected(iss)) {
      this._store.dispatch(new GetSelectedIss(null));
      this._issService.start();
    } else {
      this._store.dispatch(new GetSelectedIss(iss));
      this._issService.stop();
      this._router.navigateByUrl(`/${ROUTES_NAME.MAP}`);
    }
  }

  getButtonName(iss: ISS): string {
    return this.isSelected(iss) ? 'Unselect' : 'Select';
  }

  isSelected(iss: ISS): boolean {
    return iss?.timestamp === this.selectedISS?.timestamp;
  }
}
