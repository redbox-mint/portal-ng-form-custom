import { Injectable } from '@angular/core';
import { FormComponentResolver, FormFieldResolver, FormFieldBaseComponent, FormFieldModel } from '@researchdatabox/portal-ng-common';

@Injectable({
  providedIn: 'root'
})
export class PortalNgFormCustomService implements FormComponentResolver , FormFieldResolver 
{
  private componentClassMap: any;
  private fieldClassMap: any;
  private fieldClassNames: string[] = ["FormCustomFieldModel"];
  private componentClassNames: string[] = ["FormCustomComponent"];

  
  public async getFieldClass(fieldClass: string): Promise<typeof FormFieldModel> {
    if (fieldClass == 'FormCustomFieldModel') {
      // Since we know there is only one custom field model file, we optimise the import. 
      // However, there is nothing stopping us from having multiple custom field model files.
      // In that case, we would need to import the file dynamically, as in below:
      // return (await import('./form-custom.model'))[fieldClass] as typeof FormFieldModel;
      await this.getFieldClassMap();
      return this.fieldClassMap[fieldClass] as typeof FormFieldModel;
    }
    throw new Error(`Failed to resolve field: ${fieldClass}`);
  }

  public async getComponentClass(componentName: string): Promise<typeof FormFieldBaseComponent> {
    if (componentName == 'FormCustomComponent') {
      // return (await import('./form-custom.component'))[componentName] as typeof FieldComponent;
      await this.getComponentClassMap();
      return this.componentClassMap[componentName] as typeof FormFieldBaseComponent;
    }
    throw new Error(`Failed to resolve component: ${componentName}`);
  }

  private async getComponentClassMap() {
    if (!this.componentClassMap) {
      this.componentClassMap = {};
      const classDefs: any = await import('./form-custom.component');
      for (const componentClassName of this.componentClassNames) {
        this.componentClassMap[componentClassName] = classDefs[componentClassName];
      }
      this.componentClassMap['FormCustomFieldModel'] = this.componentClassMap['FormCustomComponent'];
    } 
    return this.componentClassMap;
  }

  private async getFieldClassMap() { 
    if (!this.fieldClassMap) {
      this.fieldClassMap = {};
      const classDefs:any = await import('./form-custom.model');
      for (const fieldClassName of this.fieldClassNames) {
        this.fieldClassMap[fieldClassName] = classDefs[fieldClassName];
      }
    } 
    return this.fieldClassMap;
  }
}
