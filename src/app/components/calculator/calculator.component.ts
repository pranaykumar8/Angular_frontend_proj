import { Component } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
//registrationForm: FormGroup;
//numbers: any[]=[];

constructor(private _x: CalculatorService){

}
sum;
get()
{
  this._x.get().subscribe(
    (res)=>{
      this.sum=res;
      console.log(res)
    }
  )
}

sub;
min()
{
  this._x.min().subscribe(
    (res)=>{
      this.sub=res;
      console.log(res)
    }
  )
}
mult;
into()
{
  this._x.into().subscribe(
  (res)=>{
    this.mult=res;
    console.log(res)
  })
}
div;
by()
{
  this._x.by().subscribe(
    (res)=>{
      this.div=res;
      console.log(res)
    }
  )
}
}
