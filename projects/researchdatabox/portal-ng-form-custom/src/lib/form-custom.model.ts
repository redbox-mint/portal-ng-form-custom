import {FormFieldModel} from '@researchdatabox/portal-ng-common';
import {
  BaseFormFieldComponentConfig,
  BaseFormFieldComponentDefinition,
  BaseFormFieldModelConfig,
  BaseFormFieldModelDefinition,
  FormComponentDefinition,
  FormConfig,
  FormFieldComponentDefinition,
  FormFieldModelDefinition
} from '@researchdatabox/sails-ng-common';

export type FormCustomFieldModelValueType = number;

export class FormCustomFieldModel extends FormFieldModel<FormCustomFieldModelValueType> {

}

export interface ExampleCustomFormFieldComponentDefinition extends BaseFormFieldComponentDefinition {
  class: "ExampleCustomFieldComponent";
  config?: ExampleCustomFormFieldComponentConfig;
}

export class ExampleCustomFormFieldComponentConfig extends BaseFormFieldComponentConfig {
}

export interface ExampleCustomFormFieldModelDefinition extends BaseFormFieldModelDefinition<FormCustomFieldModelValueType> {
  class: "ExampleCustomFieldModel";
  config: ExampleCustomFormFieldModelConfig;
}

export class ExampleCustomFormFieldModelConfig extends BaseFormFieldModelConfig<FormCustomFieldModelValueType> {

}


export type AllExampleCustomFormFieldModelDefinition = FormFieldModelDefinition | ExampleCustomFormFieldModelDefinition;
export type AllExampleCustomFormFieldComponentDefinition =
  FormFieldComponentDefinition
  | ExampleCustomFormFieldComponentDefinition;


export interface ExampleCustomFormComponentDefinition extends Omit<FormComponentDefinition, 'model' | "component"> {
  /**
   * The definition of the model that backs the form field.
   */
  model: AllExampleCustomFormFieldModelDefinition;
  /**
   * The definition of the client-side component for the form field.
   */
  component: AllExampleCustomFormFieldComponentDefinition;
}

// Can't use this because typescript class mixins are not supported by the json schema generator
// /**
//  * Use the built-in TypeScript 'Omit' to remove properties from a class.
//  * @param Class The class to operate on.
//  * @param keys The properties to remove.
//  * @constructor
//  */
// const OmitClass = <T, K extends keyof T>(Class: new () => T, keys: K[]): new () => Omit<T, typeof keys[number]> => Class;



/**
 * The customised FormConfig can come from a sails hook, or a separate repo,
 *   or from custom angular components, and just import the custom form config.
 *
 *
 * This is needed to ensure the form config declaration can use the custom components.
 *
 *
 * Note that this is an interface, the 'FormConfig' is a class.
 * That shouldn't matter, the interface is only used for generating the json schema and type checking.
 *
 *
 * WARNING: The way this is done means that the CustomFormConfig and FormConfig are not compatible,
 * but they are used for typescript type checking and building json schema,
 * so the incompatibility doesn't matter.
 */
export interface CustomFormConfig extends Omit<FormConfig, 'componentDefinitions'> {
  componentDefinitions?: ExampleCustomFormComponentDefinition[];
}


export const exampleCustomFormConfig: CustomFormConfig = {
  name: "example-1.0-draft",
  type: "rdmp",
  debugValue: true,
  domElementType: 'form',
  defaultComponentConfig: {
    defaultComponentCssClasses: 'row',
  },
  editCssClasses: "redbox-form form",
  skipValidationOnSave: false,
  validatorDefinitions: [],
  validators: [],
  componentDefinitions: [
    {
      name: 'core_text_1',
      model: {
        class: 'TextFieldModel',
        config: {
          value: 'hello world!',
          defaultValue: 'hello world!',
          validators: [
            {name: 'required'},
          ]
        }
      },
      component: {
        class: 'TextFieldComponent'
      }
    },
    {
      name: 'example_custom_1',
      model: {
        class: 'ExampleCustomFieldModel',
        config: {
          value: 3,
          defaultValue: 10,
          validators: [
            {name: 'required'},
          ]
        }
      },
      component: {
        class: 'ExampleCustomFieldComponent'
      }
    }
  ]
}
