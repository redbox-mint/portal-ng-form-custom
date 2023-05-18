import { Injectable } from '@angular/core';
import { FormComponentResolver } from '@researchdatabox/portal-ng-common';

@Injectable({
  providedIn: 'root'
})
export class PortalNgFormCustomService implements FormComponentResolver {
  
  public async getComponentClass(componentName: string) {
    if (componentName == 'FormCustomComponent') {
      return (await import('./form-custom.component'))[componentName];
    }
    return undefined;
  }
}
