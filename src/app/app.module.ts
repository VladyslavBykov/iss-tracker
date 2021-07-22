import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';

import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ISSEffects } from './store/effects/iss.effects';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { IssListComponent } from './components/iss-list/iss-list.component';
import { IssItemComponent } from './components/iss-item/iss-item.component';
import { ConfimationDialogComponent } from './shared/components/confimation-dialog/confimation-dialog.component';
import { ClickStopPropagationDirective } from './shared/directives/click-stop-propogation/click-stop-propogation.directive';
import { AppConfigModule } from './app.config-module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    HeaderComponent,
    IssListComponent,
    IssItemComponent,
    ConfimationDialogComponent,
    ClickStopPropagationDirective,
  ],
  imports: [
    AppConfigModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    HttpClientJsonpModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ISSEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
