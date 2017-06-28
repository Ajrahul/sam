import { Injectable } from '@angular/core';
import { Product } from './product';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()

export class ProductService {

    private producturl = 'http://localhost:3000/products';

    constructor(private http: Http){}

    getProducts(): Observable<Product[]> {
        return this.http.get(this.producturl)
            .map((response: Response) => <Product[]> response.json())
            // .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

  createProduct(data: Object ): Observable<Product> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.producturl,data,options) 
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  upadateProduct(id: number,data: Object): Observable <Product> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // console.log('dr',data);
    // this.id = this.getProduct
    // id =this.data.id;
    //     return this.http.put(`${this.producturl}/${id}`,data,options) 

    return this.http.put(this.producturl+'/'+id,data,options) 
                    .map(this.extractData)
                    .catch(this.handleError);
  }

    deleteProduct(id: number) {
        return this.http.delete(this.producturl+'/'+id);
    }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

//detail page
    getProduct(id: number): Observable<Product> {
        //console.log('testing id', id);
        return this.getProducts()
            .map((products: Product[]) => products.find(p => p.id === id))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}