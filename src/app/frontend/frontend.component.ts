import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css','../../assets/front/style.css','../../assets/front/css/responsive/responsive.css'],
  encapsulation: ViewEncapsulation.None
})
export class FrontendComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
