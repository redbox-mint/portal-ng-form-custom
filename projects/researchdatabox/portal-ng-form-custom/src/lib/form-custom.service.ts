import { Injectable } from '@angular/core';
import { FormComponentResolver, FormBaseComponent } from '@researchdatabox/portal-ng-common';

@Injectable({
  providedIn: 'root'
})
export class PortalNgFormCustomService implements FormComponentResolver {
  
  public async getComponentClass(componentName: string): Promise<FormBaseComponent> {
    if (componentName == 'FormCustomComponent') {
      return (await import('./form-custom.component'))[componentName];
    }
    throw new Error(`Failed to resolve component: ${componentName}`);
  }
}
