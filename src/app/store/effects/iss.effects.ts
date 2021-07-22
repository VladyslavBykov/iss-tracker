import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ISS_OPERATIONS } from 'src/app/shared/enums/iss.enum';
import { IssService } from 'src/app/shared/services/iss.service';
import {
  AddIss,
  AddIssSuccess,
  EISSActions,
  FilterIss,
  FilterIssSuccess,
  GetIss,
  GetIssListSuccess,
  GetIssSuccess,
  GetSelectedIss,
  GetSelectedISSSuccess,
  RemoveIss,
  RemoveIssSuccess,
} from '../actions/iss.action';
import { IAppState } from '../state/app.state';

@Injectable()
export class ISSEffects {
  @Effect()
  getISS$ = this._actions$.pipe(
    ofType<GetIss>(EISSActions.GetISS),
    switchMap((action) => of(new GetIssSuccess(action.payload)))
  );

  @Effect()
  getSelectedISS$ = this._actions$.pipe(
    ofType<GetSelectedIss>(EISSActions.GetSelectedISS),
    switchMap((action) => of(new GetSelectedISSSuccess(action.payload)))
  );

  @Effect()
  addISS$ = this._actions$.pipe(
    ofType<AddIss>(EISSActions.AddISS),
    tap((action) => this._issService.addLocally(action.payload.iss)),
    tap((action) => {
      let message = '';
      switch (action.payload.action) {
        case ISS_OPERATIONS.RESTORE:
          message = `(${action.payload.iss.name}) ISS WAS Succesfully Restored`;
          break;
        case ISS_OPERATIONS.ADD:
          message = 'ISS Succesfully Saved';
          break;
        default:
          message = '';
          break;
      }
      this._snackBar.open(message, null, { duration: 3000 });
    }),
    switchMap((action) => {
      return of(new AddIssSuccess(action.payload.iss));
    })
  );

  @Effect()
  removeISS$ = this._actions$.pipe(
    ofType<RemoveIss>(EISSActions.RemoveIss),
    tap(() =>
      this._snackBar.open('Press C + Z to undo for removing', null, {
        duration: 3000,
      })
    ),
    tap((action) => this._issService.removeLocally(action.payload)),
    switchMap((action) => of(new RemoveIssSuccess(action.payload)))
  );

  @Effect()
  filterISS$ = this._actions$.pipe(
    ofType<FilterIss>(EISSActions.FilterIss),
    tap((action) => this._issService.saveFilter(action.payload)),
    switchMap((action) => of(new FilterIssSuccess(action.payload)))
  );

  @Effect()
  getISSList$ = this._actions$.pipe(
    ofType<GetIss>(EISSActions.GetISSList),
    switchMap(() => of(new GetIssListSuccess(this._issService.getISSList())))
  );

  constructor(
    private _issService: IssService,
    private _actions$: Actions,
    private _snackBar: MatSnackBar
  ) {}
}
