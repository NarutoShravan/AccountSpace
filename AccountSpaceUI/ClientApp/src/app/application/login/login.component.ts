import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/shared/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  progress = false;
  hide = false;

  loginModel = {
    UserId: '', 
    Password: ''
  }

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    debugger;
    this.progress = true;
    this.userService.login(form.value).subscribe(
      (res: any) => {
        debugger;
        localStorage.setItem('token', res.token);
        this.progress = false;
        this.router.navigateByUrl('/itracker/admin');
      },
      err => {
        debugger;
        this.progress = false;
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }
}
