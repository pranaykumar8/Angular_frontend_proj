import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
names =["for",
  "Java", "angular"
];
emp=[
  {name: "prana", age: "23", role:"developer"},
  {name: "kumar", age: "24", role:"software"},
  {name: "bhavan", age: "25", role:"testing"},
  {name: "prasad", age: "26", role:"desgining"}
];
}
