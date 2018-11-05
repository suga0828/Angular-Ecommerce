import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { JumboComponent } from './jumbo/jumbo.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductsComponent } from './products/products.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [ 
	RouterModule.forChild([
      { path: "", component: JumboComponent, pathMatch: "full" }
   	]),
    FontAwesomeModule
  ],
  declarations: [ HeaderComponent, FooterComponent, JumboComponent, FiltersComponent, ProductsComponent ],
  exports: [ HeaderComponent, FooterComponent, JumboComponent, FiltersComponent, ProductsComponent ]
})

export class SharedModule { }