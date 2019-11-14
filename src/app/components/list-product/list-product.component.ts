import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products : Product[];
  qProducts : Number;

  constructor(private productService : ProductsService) { }

  ngOnInit() {
    this.productService.getProducts(0).subscribe((products) => {
      this.products = products.items;
      this.qProducts = products.total / 50;
      console.log(this.qProducts);
    })
  }

  changePage(event){
    this.productService.getProducts(event - 1).subscribe((products) => {
      this.products = products.items;
      this.qProducts = products.total / 50;
      console.log(this.qProducts);
    })
  }

}
