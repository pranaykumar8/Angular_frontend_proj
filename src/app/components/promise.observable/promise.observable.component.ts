import { Component } from '@angular/core';

@Component({
  selector: 'app-promise.observable',
  templateUrl: './promise.observable.component.html',
  styleUrls: ['./promise.observable.component.css']
})
export class PromiseObservableComponent {
ngOnInit(){
  let p =new Promise((resolve, reject)=>{
    console.log
  })
}
}



