import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './screens/home/home.component';
import { RouteBuilderComponent } from './components/route-builder/route-builder.component';
import { TableComponent } from './components/table/table.component';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SideMenuComponent,
    HomeComponent,
    RouteBuilderComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    MenuModule,
    ToastModule,
    ButtonModule,
    BrowserAnimationsModule,
    AccordionModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
