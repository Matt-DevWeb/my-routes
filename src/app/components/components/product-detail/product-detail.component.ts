import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../models/models/product';
import { ProductService } from '../../../services/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  template: `
    <h3>Product Details Page</h3>

    product : {{ product.productName }} price : {{ product.productPrice }}
    <p>
      <a class="btn btn-default" (click)="onBack()">Back </a>
    </p>
  `,
  styles: ``,
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product = new Product(0, '', 0);
  id: any;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {}
  /* Using Subscribe */

  sub: any;

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.id = params.get('id');
      let products = this._productService.getProducts();
      //const lookup = new Map(products.map(p => [p.productID, p]));
      const lookup = products.find((p) => p.productId == this.id);
      if (lookup) {
        this.product = lookup;
      }
    });
  }
  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['product']);
  }
}
