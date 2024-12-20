// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-jdbc',
//   templateUrl: './jdbc.component.html',
//   styleUrls: ['./jdbc.component.css']
// })
// export class JdbcComponent {

// }
//src/app/components/jdbc/jdbc.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-jdbc',
  templateUrl: './jdbc.component.html',
  styleUrls: ['./jdbc.component.css']
})
export class JdbcComponent {
  registrationForm: FormGroup;
  products: any[] = []; // This will store the fetched product list
  successMessage: string | null = null; // For success messages
  errorMessage: string | null = null;   // For error messages

  constructor(private _userServices: ProductService, private _formbuilder: FormBuilder) {
    // Initialize the form with form controls
    this.registrationForm = this._formbuilder.group({
      id: [''],
      brand: [''],
      processor:[''],
      price: ['']
    });
  }

  // Method to handle form submission (Post)
  postData(): void {
    if (this.registrationForm.valid) {
      this._userServices.addUser(this.registrationForm.value).subscribe({// subscribe is to get answer from server side
        next: (res: any) => {
          this.successMessage = 'Product successfully inserted!';
          this.errorMessage = null;
        },
        error: (err: any) => {
          this.errorMessage = 'Error inserting product!';
          this.successMessage = null;
        }
      });
    } else {
      this.errorMessage = 'Form is invalid!';
    }
  }

  // Method to handle updating data
  updateData(): void {
    if (this.registrationForm.valid) {
      this._userServices.updateProduct(this.registrationForm.value).subscribe({
        next: (res: any) => {
          this.successMessage = 'Product successfully updated!';
          this.errorMessage = null;
        },
        error: (err: any) => {
          this.errorMessage = 'Error updating product!';
          this.successMessage = null;
        }
      });
    } else {
      this.errorMessage = 'Form is invalid!';
    }
  }

  // Method to handle delete operation
  deleteData(id: number): void {
    if (id) {
      this._userServices.deleteProductById(id).subscribe({
        next: (res: any) => {
          // this.successMessage = 'Product with ID ${id} successfully deleted!';
          this.successMessage = `Product with ID ${id} successfully deleted!`;

          this.errorMessage = null;
        },
        error: (err: any) => {
          this.errorMessage = 'Error deleting product with ID ${id}!';
          
          this.successMessage = null;
        }
      });
    } else {
      this.errorMessage = 'Please provide an ID';
    }
  }

  // Method to handle fetching data (Get)
  getData(): void {
    this._userServices.getProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        console.log('Products fetched:', res);
      },
      error: (err: any) => {
        this.errorMessage = 'Error fetching products!';
        this.successMessage = null;
      }
    });
  }
}
