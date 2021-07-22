import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { issReducer } from './iss.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  iss: issReducer,
};
