import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';


import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';

@NgModule({
  imports: [ RouterModule.forChild([
      { path: "", component: Example1Component, pathMatch: "full" },
      { path: "", component: Example2Component, pathMatch: "full" }
    ])],
  declarations: []
})
export class ExampleRoutingModule { }
