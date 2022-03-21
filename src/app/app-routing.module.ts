import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteBuilderComponent } from './components/route-builder/route-builder.component';

const routes: Routes = [
  { path: '', component:  RouteBuilderComponent},
  { path: ':filters', component:  RouteBuilderComponent},
  { path: ':filters/:options', component:  RouteBuilderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
