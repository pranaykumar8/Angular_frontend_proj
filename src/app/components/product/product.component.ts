// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { ProductService } from '../../services/product.service';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.css']
// })
// export class ProductComponent {
//   pdata;
//   //dpdata;
//   constructor(private _productservice:ProductService,private _http:HttpClient){}
//   // ngOnInit(){
//   //   this._productservice.getProducts().subscribe(
//   //     (res)=>{
//   //       // console.log(res.products);
//   //       this.pdata=res.products;
//   //     });
//     //   this.ngOnInit
//     //   {
//     // this._dproduct.getProducts().subscribe(
//     //   (res1)=>{
//     //     // console.log(res.products);
//     //     this.dpdata=res1.products;
//     //   }
//     // );
//   // }
//   count=0;
//   deletepost(){
//     this.count=this.count+1
//     this._productservice.delProducts(this.count).subscribe((res1)=>{
//       this.pdata=res1;
//       console.log(this.pdata)
//     })
//     //return this._http.delete(this._url+'/'+this.id);
//   }

// }

// new code from gowtham

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  deleteData: any;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(
      (res) => {
        console.log(res);
        this.products = res.products; // Adjust based on the API structure
      }
    );
  }

  deleteItem(): void {
    if (this.products.length > 0) {
      const productToDelete = this.products[0]; // Get the first product
      this._productService.deleteProductById(productToDelete.id).subscribe(
        (res) => {
          console.log('Deleted product:', productToDelete); // Log the deleted product
          this.deleteData = res;
          // Remove the deleted product from the list
          //this.products.shift();
        }
      );
    } else {
      console.log('No more products to delete');
    }
  }
}

