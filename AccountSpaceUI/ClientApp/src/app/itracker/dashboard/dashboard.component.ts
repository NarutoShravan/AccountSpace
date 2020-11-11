import { UserService } from '../../services/shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userDetails

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res => {
        debugger;
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  

}
