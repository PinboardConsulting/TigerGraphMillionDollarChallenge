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
import { ChartComponent } from './components/chart/chart.component';
import { ReportComponent } from './components/report/report.component';
import {InputTextModule} from 'primeng/inputtext';
import { GraphComponent } from './components/graph/graph.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SideMenuComponent,
    HomeComponent,
    RouteBuilderComponent,
    TableComponent,
    ChartComponent,
    ReportComponent,
    GraphComponent,
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
    TableModule,
    InputTextModule,
    InputSwitchModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
