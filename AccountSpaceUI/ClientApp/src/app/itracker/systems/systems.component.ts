import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItrackerDataService } from '../../services/Itracker-services/itracker-data.service';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.css']
})
export class SystemsComponent implements OnInit {

  @ViewChild('myForm') myForm: NgForm;
  systemModel: any;
  constructor(private fb: FormBuilder, private dataService: ItrackerDataService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.systemModel = this.fb.group({
      SysName: ['', Validators.required],
      IsActive: [false],
      SysDesc: ['', Validators.required]
    });
  }

 

  onSubmit() {
    debugger;
    this.dataService.addSystem(this.systemModel.value).subscribe(
      (res: any) => { 
        debugger;
        this.myForm.resetForm();
        this.toastr.success('System created!', 'Successful.');
        console.log(res);
      },
      err => {
        debugger
        this.myForm.resetForm();
        this.toastr.error(err.error, 'Failed.');
        console.log(err);
      }
    );
  }


}
