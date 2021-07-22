import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { SaveDialogComponent } from './components/save-dialog/save-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MapComponent,
    SaveDialogComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    MaterialModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MapModule { }
