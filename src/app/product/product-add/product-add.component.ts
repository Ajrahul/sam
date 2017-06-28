import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';



@Component({
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  pageTitle: string = 'Add Product';
  errorMessage: string;
  isUpdate: boolean;
  data = { 
    productName:'', 
    productCode:'', 
    description:'', 
    releaseDate:new Date(), 
    price:'', starRating:''
   };
  products: Product[];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.isUpdate = false;

    console.log('on');
  }

  addProduct(data) {
    if(this.dataValidat()){
 //   console.log('test',data);
    this.productService.createProduct(data)
    .subscribe(
      products  => this.products.push(data),
      error =>  this.errorMessage = <any>error);
      this.onAddProduct();
      }
    else
      {
        console.log('Please fill missing fields');
      }
  }

  dataValidat(){
    if(this.data.productName && this.data.productCode && this.data.description && this.data.releaseDate && this.data.price && this.data.starRating )
    return true;
  }

  onAddProduct(): void {
    this.router.navigate(['/products'])
    }

  goBack(): void {
    this.router.navigate(['/products']);
  }

}
