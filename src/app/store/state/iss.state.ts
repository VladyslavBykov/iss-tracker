import { ISS } from 'src/app/types/iss.type';

export interface ISSState {
  iSSList: ISS[];
  filteredList: ISS[];
  iss: ISS;
  selectedISS: ISS;
}

export const initialISSState: ISSState = {
  iSSList: [],
  filteredList: [],
  iss: null,
  selectedISS: null,
};
