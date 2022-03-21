import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './screens/home/home.component';
import { RouteBuilderComponent } from './components/route-builder/route-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SideMenuComponent,
    HomeComponent,
    RouteBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
