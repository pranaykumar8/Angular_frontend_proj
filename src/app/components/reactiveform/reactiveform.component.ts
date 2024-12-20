import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})

export class ReactiveformComponent {

  constructor(private _formBuilder:FormBuilder){}

  // ngOnInit(){
  //   this.registrationForm.
  //   username:['pranay' ,Validators.required, Validators.minLength[10]],
  // password:[,Validators.required],
  // confirmPassword:[],
  // city:[],
  // state:[],
  // pincode:[]
  // }
 
registerForm=this._formBuilder.group({
  username:['pranay' ,Validators.required, Validators.minLength[10]],
  password:[,Validators.required],
  confirmPassword:[],
  city:[],
  state:[],
  pincode:[]
})

submit(){
  console.log(this.registerForm.value)
}}
//   constructor(private _formbuilder:FormBuilder){}
// registrationForm=this._formbuilder.group({
//   username:['ganesh',Validators.required],
//   password:[,Validators.required],
//   confirmpassword:[],
//   city:[],
//   state:[],
//   pincode:[]
// })
// postd(){
//   console.log(this.registrationForm.value)
// }
// get username(){
//   return this.registrationForm.get('username');
// }

