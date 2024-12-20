import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

const materialcomponent=[
  MatButtonModule,
  MatSelectModule,
  MatDatepickerModule,
  MatIconModule,
  MatDividerModule,
  MatCardModule
]


@NgModule({
  declarations: [],
  imports: [materialcomponent
    // CommonModule,
    // MatButtonModule,
    // MatSelectModule,
    // MatTableModule
  ],
  exports:[materialcomponent]
})
export class AngularmaterialModule { }
