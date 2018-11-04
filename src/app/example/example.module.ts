import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';

@NgModule({
  imports: [ ExampleRoutingModule, CommonModule ],
  declarations: [Example1Component, Example2Component],
  exports: [Example1Component, Example2Component]
})
export class ExampleModule { }
