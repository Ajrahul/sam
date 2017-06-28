import { Component, OnInit } from '@angular/core';
import { Subscription }       from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';


import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  templateUrl: '../product-add/product-add.component.html',
  styleUrls: ['../product-add/product-add.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product[];
  errorMessage: string;
  private sub: Subscription;
  data:any = {};
  id: number;
  isUpdate: boolean;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService) { }

    ngOnInit() {
          // console.log('ttt',this.product);
      this.isUpdate = true;
      this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getProduct(this.id);     
      });
    }
  
    getProduct(id: number) {
        this.productService.getProduct(id).subscribe(
            product => {
              this.data = product;
            },               
            error => {
              this.errorMessage = <any>error;
            });
    }

    updateProduct(data){
      this.productService.upadateProduct(this.id,data).subscribe(res =>{
          // console.log('this');
          this.goBack();
        }
      );
    }

     goBack() {
      console.log('go bk');
      this.router.navigate(['products']);
    }

}
