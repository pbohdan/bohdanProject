import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductsComponent} from "./products.component";

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: ProductsComponent }]),
  ],
})
export class ProductsModule {}
