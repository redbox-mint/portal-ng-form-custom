import { Injectable } from '@angular/core';
import { FormComponentResolver, FormFieldResolver, FieldComponent, FieldModel } from '@researchdatabox/portal-ng-common';

@Injectable({
  providedIn: 'root'
})
export class PortalNgFormCustomService implements FormComponentResolver , FormFieldResolver 
{
  private componentClassMap: any;
  private fieldClassMap: any;

  
  public async getFieldClass(fieldClass: string): Promise<typeof FieldModel> {
    if (fieldClass == 'FormCustomFieldModel') {
      // Since we know there is only one custom field model file, we optimise the import. 
      // However, there is nothing stopping us from having multiple custom field model files.
      // In that case, we would need to import the file dynamically, as in below:
      // return (await import('./form-custom.model'))[fieldClass] as typeof FieldModel;
      return (await this.getFieldClassMap())[fieldClass] as typeof FieldModel;
    }
    throw new Error(`Failed to resolve field: ${fieldClass}`);
  }

  public async getComponentClass(componentName: string): Promise<typeof FieldComponent> {
    if (componentName == 'FormCustomComponent') {
      // return (await import('./form-custom.component'))[componentName] as typeof FieldComponent;
      return (await this.getComponentClassMap())[componentName] as typeof FieldComponent;
    }
    throw new Error(`Failed to resolve component: ${componentName}`);
  }

  private async getComponentClassMap() {
    if (!this.componentClassMap) {
      this.componentClassMap = (await import('./form-custom.component'));
    } 
    return this.componentClassMap;
  }

  private async getFieldClassMap() { 
    if (!this.fieldClassMap) {
      this.fieldClassMap = (await import('./form-custom.model'));
    } 
    return this.fieldClassMap;
  }
}
