import { FormControl } from '@angular/forms';
import { FormFieldModel } from '@researchdatabox/portal-ng-common';

export class FormCustomFieldModel extends FormFieldModel<undefined> {
  public override formControl: FormControl<undefined | null> = new FormControl<undefined | null>(undefined);
}