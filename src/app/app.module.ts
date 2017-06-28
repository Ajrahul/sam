import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { StarComponent } from './star/star.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductService } from './product/product.service';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'category', component: CategoryComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'product/new', component: ProductAddComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'update/:id', component: ProductUpdateComponent },
      { path: 'welcome', component: HomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
