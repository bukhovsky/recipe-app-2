import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top/top-menu/top-menu.component';
import { FooterComponent } from './bottom/footer/footer.component';
import { ProductAddAriaComponent } from './middle/product-add/product-add-aria/product-add-aria.component';
import { RecipeAddAreaComponent } from './middle/recipe-add/recipe-add-area/recipe-add-area.component';
import { ProductAddFormComponent } from './middle/product-add/product-add-form/product-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterComponent,
    ProductAddAriaComponent,
    RecipeAddAreaComponent,
    ProductAddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
