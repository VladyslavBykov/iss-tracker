import { Action } from '@ngrx/store';
import { ISS } from 'src/app/types/iss.type';

export enum EISSActions {
  GetISSList = '[ISS] Get List',
  GetISSListSuccess = '[ISS] Get List Success',
  AddISS = '[ISS] Add',
  AddIssSuccess = '[ISS] Add Success',
  GetISS = '[ISS] Get',
  GetISSSuccess = '[ISS] Get Success',
  GetSelectedISS = '[ISS] Get Selected',
  GetSelectedISSSuccess = '[ISS] Get Selected Success',
  RemoveIss = '[ISS] Remove',
  RemoveIssSucess = '[ISS] Remove Success',
  FilterIss = '[ISS] Filter',
  FilterIssSucess = '[ISS] Filter Success',
}

export class GetIssList implements Action {
  public readonly type = EISSActions.GetISSList;
}
export class GetIssListSuccess implements Action {
  public readonly type = EISSActions.GetISSListSuccess;
  constructor(public payload: ISS[]) {}
}
export class GetIss implements Action {
  public readonly type = EISSActions.GetISS;
  constructor(public payload: ISS) {}
}
export class GetIssSuccess implements Action {
  public readonly type = EISSActions.GetISSSuccess;
  constructor(public payload: ISS) {}
}
export class GetSelectedIss implements Action {
  public readonly type = EISSActions.GetSelectedISS;
  constructor(public payload: ISS) {}
}
export class GetSelectedISSSuccess implements Action {
  public readonly type = EISSActions.GetSelectedISSSuccess;
  constructor(public payload: ISS) {}
}
export class AddIss implements Action {
  public readonly type = EISSActions.AddISS;
  constructor(public payload: { iss: ISS; action: string }) {}
}
export class AddIssSuccess implements Action {
  public readonly type = EISSActions.AddIssSuccess;
  constructor(public payload: ISS) {}
}
export class RemoveIss implements Action {
  public readonly type = EISSActions.RemoveIss;
  constructor(public payload: number) {}
}
export class RemoveIssSuccess implements Action {
  public readonly type = EISSActions.RemoveIssSucess;
  constructor(public payload: number) {}
}
export class FilterIss implements Action {
  public readonly type = EISSActions.FilterIss;
  constructor(public payload: string) {}
}
export class FilterIssSuccess implements Action {
  public readonly type = EISSActions.FilterIssSucess;
  constructor(public payload: string) {}
}

export type IssActions =
  | GetIssList
  | GetIssListSuccess
  | GetIss
  | GetIssSuccess
  | AddIss
  | AddIssSuccess
  | RemoveIss
  | RemoveIssSuccess
  | FilterIss
  | FilterIssSuccess
  | GetSelectedIss
  | GetSelectedISSSuccess;
