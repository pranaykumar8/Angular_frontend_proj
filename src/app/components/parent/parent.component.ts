import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
msg1="Hi parent to child"
childmsg: any;
rmsg(m){
  this.childmsg=m;
}
}

// x=any;
