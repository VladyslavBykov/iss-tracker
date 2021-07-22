import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ISS_OPERATIONS } from 'src/app/shared/enums/iss.enum';
import { IssService } from 'src/app/shared/services/iss.service';
import { ISSValidators } from 'src/app/shared/validators/iss-name.validator';
import { AddIss, FilterIss } from 'src/app/store/actions/iss.action';
import { selectISSList } from 'src/app/store/selectors/iss.selectors';
import { IAppState } from 'src/app/store/state/app.state';
import { ISS } from 'src/app/types/iss.type';

export interface SavePositionDialogData {
  iss: ISS;
}

@Component({
  selector: 'app-save-dialog',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss'],
})
export class SaveDialogComponent implements OnInit {
  selectedISSListSubscription: Subscription;
  name: FormControl;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SavePositionDialogData,
    private _store: Store<IAppState>,
    private _dialogRef: MatDialogRef<SaveDialogComponent>,
    private _issService: IssService
  ) {
    this.selectedISSListSubscription = this._store
      .pipe(select(selectISSList))
      .subscribe((issList: ISS[]) => {
        this.name = new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          ISSValidators.unicName(issList),
        ]);
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.selectedISSListSubscription.unsubscribe();
  }

  getErrorMessage(): string {
    if (this.name.hasError('required')) {
      return 'Field is required';
    }
    if (this.name.hasError('minlength')) {
      return 'Minimum length is 4 characters';
    }

    if (this.name.hasError('namePrefix')) {
      return 'Name should starts with: ISS';
    }

    if (this.name.hasError('unicName')) {
      return 'Name should be unic';
    }
    return '';
  }

  onSave(): void {
    if (!this.name.valid) {
      this.name.markAllAsTouched();
      return;
    }
    const iss: ISS = {
      latitude: this.data.iss.latitude,
      longitude: this.data.iss.longitude,
      timestamp: this.data.iss.timestamp,
      name: this.name.value,
    };
    this._store.dispatch(new AddIss({iss, action: ISS_OPERATIONS.ADD}));
    this._store.dispatch(new FilterIss(this._issService.getFilter()));
    this._dialogRef.close({ iss });
  }
}
