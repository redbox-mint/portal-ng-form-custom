import { Component, Input } from '@angular/core';
import { FormFieldBaseComponent } from '@researchdatabox/portal-ng-common';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {FormCustomFieldModel, FormCustomFieldModelValueType} from "./form-custom.model";

@Component({
  selector: 'redbox-custom-sample-component',
  template: `
    <p>
      ReDBox Custom Sample Component works!
    </p>
    @if (getBooleanProperty('visible')) {
      <ng-container *ngTemplateOutlet="getTemplateRef('before')"/>
      <input type='number' [formControl]="formControl"/>
      <ng-container *ngTemplateOutlet="getTemplateRef('after')"/>
    }
  `,
  styles: [
  ],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormCustomComponent extends FormFieldBaseComponent<FormCustomFieldModelValueType> {
  @Input() public override model?: FormCustomFieldModel;
  protected override logName: string = "ExampleCustomFieldComponent";
}


