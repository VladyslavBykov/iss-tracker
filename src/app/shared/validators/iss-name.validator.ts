import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ISS } from 'src/app/types/iss.type';

export class ISSValidators {
  static unicName(issList: ISS[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>
      issList.find((iss: ISS) => iss.name === control.value)
        ? { unicName: control.value }
        : null;
  }
}
