import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component ({
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List!!";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string ;
    products: Product[];
    errorMessage: string;

//dependency injector
    constructor( private productService: ProductService, private router: Router){

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.getList();
        // this.productService.getProducts().subscribe(product =>
        //     this.product = product, 
        // error => this.errorMessage = <any>error);
    }

    getList(){
        this.productService.getProducts().subscribe((res) => {
            this.products = res;
            // console.log('list: ', res);
        },(error) => {
            this.errorMessage = error;
        } )
    }

    addProduct(){
        this.router.navigate(['product/new'])
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }

    updateProduct(id){
        console.log('id',id);
        this.router.navigate(['update/'+id])
    }

    deleteProduct(id,productName){
        if(confirm("Do you want to delete " + productName + "?")) {
        this.productService.deleteProduct(id).subscribe(
            (res) => {
                this.getList();
                return true;
                },(error) => {
                this.errorMessage = error;
                }
            )
        } 
    }
}