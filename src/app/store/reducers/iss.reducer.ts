import { ISS } from 'src/app/types/iss.type';
import { EISSActions, IssActions } from '../actions/iss.action';
import { initialISSState, ISSState } from '../state/iss.state';

export const issReducer = (
  state = initialISSState,
  action: IssActions
): ISSState => {
  switch (action.type) {
    case EISSActions.GetISSListSuccess:
      return {
        ...state,
        iSSList: action.payload,
      };
    case EISSActions.GetISSSuccess:
      return {
        ...state,
        iss: action.payload,
      };
    case EISSActions.GetSelectedISSSuccess:
      return {
        ...state,
        selectedISS: action.payload,
      };
    case EISSActions.AddIssSuccess:
      return {
        ...state,
        iSSList: state.iSSList.concat(action.payload),
      };
    case EISSActions.RemoveIssSucess:
      return {
        ...state,
        iSSList: state.filteredList.filter(
          (iss: ISS) => iss.timestamp !== +action.payload
        ),
      };
    case EISSActions.FilterIssSucess:
      return {
        ...state,
        filteredList: state.iSSList.filter(
          (iss: ISS) =>
            iss.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
        ),
      };
    default:
      return state;
  }
};
