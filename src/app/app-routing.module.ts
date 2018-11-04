import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: "./shared/shared.module#SharedModule"
  },
  {
  	path: "example",
    loadChildren: "./example/example.module#ExampleModule"
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [ ]
})

export class AppRoutingModule { }