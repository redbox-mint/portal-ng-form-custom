import { Component } from '@angular/core';
import { FormBaseComponent } from '@researchdatabox/portal-ng-common';
import { CommonModule } from '@angular/common';

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
export class FormCustomComponent extends FormBaseComponent {

}
