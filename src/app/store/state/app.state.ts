import { RouterReducerState } from '@ngrx/router-store';
import { initialISSState, ISSState } from './iss.state';

export interface IAppState {
  router?: RouterReducerState;
  iss: ISSState;
}

export const initialAppState: IAppState = {
  iss: initialISSState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
