import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [DatePipe]
})
export class HomePage {
  nomeUsuario: string;

  constructor() {
    this.nomeUsuario = "Igor Sardinha";
  }
  myDate = Date.now();    //date 
}
