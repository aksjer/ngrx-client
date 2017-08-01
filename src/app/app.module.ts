import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { MaterialModules } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { reducers } from './reducers/index';
import { effects } from './effects/index';
import { CustomerService } from './services/customer.service';
import { CustomerAddComponent } from './dialog-components/customer-add/customer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    MaterialModules,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      monitor: useLogMonitor({ visible: false, position: 'right' })
    }),
    StoreLogMonitorModule,
    EffectsModule.forRoot(effects)
  ],
  providers: [
    CustomerService
  ],
  entryComponents: [
    CustomerAddComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
