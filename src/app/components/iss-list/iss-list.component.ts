import { Component, HostListener, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISS_OPERATIONS } from 'src/app/shared/enums/iss.enum';
import { IssService } from 'src/app/shared/services/iss.service';
import {
  AddIss,
  FilterIss,
  GetIssList,
  GetSelectedIss,
} from 'src/app/store/actions/iss.action';
import { selectFilteredISS } from 'src/app/store/selectors/iss.selectors';
import { IAppState } from 'src/app/store/state/app.state';
import { ISS } from 'src/app/types/iss.type';

@Component({
  selector: 'app-iss-list',
  templateUrl: './iss-list.component.html',
  styleUrls: ['./iss-list.component.scss'],
})
export class IssListComponent implements OnInit {
  issList$: Observable<ISS[]> = this._store.pipe(select(selectFilteredISS));
  selectedISS: ISS;
  removedISS: ISS;

  @HostListener('window:keydown', ['$event'])
  onkeypress($event: KeyboardEvent) {
    if (($event?.ctrlKey || $event?.metaKey) && $event?.keyCode == 90) {
      if (this.removedISS) {
        this._store.dispatch(
          new AddIss({ iss: this.removedISS, action: ISS_OPERATIONS.RESTORE })
        );
        this._store.dispatch(new FilterIss(this._issService.getFilter()));
        this.removedISS = null;
      }
    }
  }

  constructor(
    private _store: Store<IAppState>,
    private _issService: IssService
  ) {}

  ngOnInit(): void {
    this._store.dispatch(new GetIssList());
  }

  onRemoveHandler(iss: ISS): void {
    this.removedISS = iss;
  }

  isSelected(iss: ISS): boolean {
    return iss?.timestamp === this.selectedISS?.timestamp;
  }
}
