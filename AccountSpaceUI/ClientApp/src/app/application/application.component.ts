import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  //router: string;
  constructor(public router: Router) {
   // this.router = _router.url;
  }

  ngOnInit(): void {
  }

}
