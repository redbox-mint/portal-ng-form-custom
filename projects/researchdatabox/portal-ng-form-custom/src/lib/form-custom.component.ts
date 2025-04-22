import { Component, Input } from '@angular/core';
import { FieldComponent, FieldComponentConfig } from '@researchdatabox/portal-ng-common';
import { CommonModule } from '@angular/common';
import { FormCustomFieldModel } from './form-custom.model';

@Component({
  selector: 'redbox-custom-sample-component',
  template: `
    <p>
      ReDBox Custom Sample Component works!
    </p>
  `,
  styles: [
  ],
  standalone: true,
  imports: [CommonModule]
})
export class FormCustomComponent extends FieldComponent<undefined> {
  @Input() public override field?: FormCustomFieldModel;
  public override config?: FieldComponentConfig<undefined>;
}


