import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ConfimationDialogComponent } from 'src/app/shared/components/confimation-dialog/confimation-dialog.component';
import { IssService } from 'src/app/shared/services/iss.service';
import { FilterIss, GetSelectedIss, RemoveIss } from 'src/app/store/actions/iss.action';
import { selectSelectedISS } from 'src/app/store/selectors/iss.selectors';
import { IAppState } from 'src/app/store/state/app.state';
import { ISS } from 'src/app/types/iss.type';

@Component({
  selector: 'app-iss-item',
  templateUrl: './iss-item.component.html',
  styleUrls: ['./iss-item.component.scss'],
})
export class IssItemComponent implements OnInit, OnDestroy {
  @Input() iss: ISS;
  @Output() onRemove = new EventEmitter<ISS>();
  selectedIssSubscription: Subscription;
  selectedISS: ISS;
  constructor(
    private _store: Store<IAppState>,
    private _dialog: MatDialog,
    private _issService: IssService
  ) {
    this.selectedIssSubscription = this._store
      .pipe(select(selectSelectedISS))
      .subscribe((iss: ISS) => (this.selectedISS = iss));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.selectedIssSubscription.unsubscribe();
  }

  remove(): void {
    const dialogRef = this._dialog.open(ConfimationDialogComponent, {
      data: {
        title: 'Confirmation',
        message: 'Are you sure, that you wanna to delete this Location ?',
      },
    });
    dialogRef.afterClosed().subscribe((answer: boolean) => {
      if (answer) {
        this.onRemove.emit(this.iss);
        this._store.dispatch(new RemoveIss(this.iss.timestamp));
        this._store.dispatch(new FilterIss(this._issService.getFilter()));
      }
    });
  }

  select(): void {
    if (this.isSelected()) {
      this._store.dispatch(new GetSelectedIss(null));
      this._issService.start();
    } else {
      this._store.dispatch(new GetSelectedIss(this.iss));
      this._issService.stop();
    }
  }

  getTooltipMessage(): string {
    return this.isSelected() ? 'Unselect Location' : 'Select Location';
  }

  isSelected(): boolean {
    return this.selectedISS?.timestamp === this.iss?.timestamp;
  }
}
