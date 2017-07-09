import './common/util/rxjs.debug';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {
  MaterialModule
} from '@angular/material';

import { AppComponent } from './app.component';

import * as commonComponents from './components/common';
import * as pageComponents from './components/pages';
import { routing } from './app.routing';
import { rootReducer } from './store/rootReducer';

const getPropsArray = obj => Object.values(obj);

@NgModule({
  declarations: [
    AppComponent,
    ...getPropsArray(commonComponents),
    ...getPropsArray(pageComponents)
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    StoreModule.provideStore(rootReducer),
    routing
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
