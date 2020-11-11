import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('myForm') myForm: NgForm;
  constructor(public userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.registerModel.reset();
  }

  onSubmit() {
    this.userService.register().subscribe(
      (res: any) => {
        this.myForm.resetForm();
        if (res.succeeded) {
          debugger;
          this.toastr.success('New user created!', 'Registration successful.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken', 'Registration failed.');
                break;

              default:
                this.toastr.error(element.description, 'Registration failed.');
                break;
            } 
          });
        }
      },
      err => {
        this.myForm.resetForm();
        console.log(err);
      }
    );
  }

}
