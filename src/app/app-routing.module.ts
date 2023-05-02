import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddAriaComponent } from './middle/product-add/product-add-aria/product-add-aria.component';
import { RecipeAddAreaComponent } from './middle/recipe-add/recipe-add-area/recipe-add-area.component'
 
const routes: Routes = [
  { path: 'products', component: ProductAddAriaComponent },
  { path: 'recipes', component: RecipeAddAreaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
