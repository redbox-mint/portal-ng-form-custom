import { FormControl } from '@angular/forms';
import { FieldModel } from '@researchdatabox/portal-ng-common';

export class FormCustomFieldModel extends FieldModel<undefined> {
  public override formModel: FormControl<undefined | null> = new FormControl<undefined | null>(undefined);
}