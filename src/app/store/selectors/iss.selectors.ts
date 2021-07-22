import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ISSState } from '../state/iss.state';

const issState = (state: IAppState) => state.iss;

export const selectISSList = createSelector(
  issState,
  (state: ISSState) => state.iSSList
);
export const selectISS = createSelector(
  issState,
  (state: ISSState) => state.iss
);
export const selectSelectedISS = createSelector(
  issState,
  (state: ISSState) => state.selectedISS
);
export const selectFilteredISS = createSelector(
  issState,
  (state: ISSState) => state.filteredList
);
