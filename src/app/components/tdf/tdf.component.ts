import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
// constructor(private _productservice:ProductService){}
  courses=["java","angular","python","others"];
  postData(form)
  {
    console.log(form.value);
    //this._productservice.SaveUserData(form)
  }
//   postData(formdata)
//   {
//     console.log(formdata.value);
//     this._productservice.SaveUserData(formdata.value).subscribe(res=>{
// console.log(res)
//     })
//   }

}
