import { NgModule, provideAppInitializer } from '@angular/core';

import i18next from 'i18next';
import { I18NextModule, StrictErrorHandlingStrategy, provideI18Next, withCustomErrorHandlingStrategy } from 'angular-i18next';

export function i18AppInit() {
  return () => i18next
  .init({
    fallbackLng: 'en',
    debug: true
  });
}


@NgModule({
  declarations: [
  ],
  imports: [
    I18NextModule.forRoot(),
  ],
  providers: [
    provideAppInitializer(i18AppInit()),
    provideI18Next(
      withCustomErrorHandlingStrategy(StrictErrorHandlingStrategy)
    ),
  ],
  exports: [
  ]
})
export class PortalNgFormCustomModule { }
