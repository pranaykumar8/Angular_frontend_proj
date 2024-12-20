// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-pestiq',
//   templateUrl: './pestiq.component.html',
//   styleUrls: ['./pestiq.component.css']
// })
// export class PestiqComponent {

// }
import { Component, OnInit } from '@angular/core';
import { PestiqService } from 'src/app/services/pestiq.service';

@Component({
  selector: 'app-pestiq',
  templateUrl: './pestiq.component.html',
  styleUrls: ['./pestiq.component.css'],
})
export class PestiqComponent implements OnInit {
  pestiqs: any[] = [];
  pestiq = {
    order_id: 0,
    order_name: '',
    items: '',
    quantity: 0,
    price: 0.0,
    location: '',
    delivary_type: '',
    payment_type: '',
  };

  constructor(private pestiqService: PestiqService) {}

  ngOnInit(): void {
    this.getPestiqs();
  }

  getPestiqs(): void {
    this.pestiqService.getPestiqs().subscribe((data) => (this.pestiqs = data));
  }

  createPestiq(): void {
    this.pestiqService.createPestiq(this.pestiq).subscribe(() => {
      this.getPestiqs();
    });
  }

  updatePestiq(): void {
    this.pestiqService
      .updatePestiq(this.pestiq.order_id, this.pestiq)
      .subscribe(() => {
        this.getPestiqs();
      });
  }

  deletePestiq(order_id: number): void {
    this.pestiqService.deletePestiq(order_id).subscribe(() => {
      this.getPestiqs();
    });
  }

  selectPestiq(pestiq: any): void {
    this.pestiq = { ...pestiq };
  }
}
