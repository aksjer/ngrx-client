import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';

import {
  MdButtonModule,
  MdIconModule,
  MdInputModule,
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
  MdProgressSpinnerModule,
  MdChipsModule,
  MdProgressBarModule,
  MdCardModule,
  MdMenuModule,
  MdTabsModule,
  MdSnackBarModule,
  MdDialogModule
} from '@angular/material';

export const MaterialModules = [
  MdButtonModule,
  MdIconModule,
  MdInputModule,
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
  MdProgressSpinnerModule,
  MdChipsModule,
  MdProgressBarModule,
  MdCardModule,
  MdMenuModule,
  MdTabsModule,
  MdSnackBarModule,
  MdDialogModule
];

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    MaterialModules
  ],
  exports: [
    SearchComponent
  ]
})
export class SharedModule { }
