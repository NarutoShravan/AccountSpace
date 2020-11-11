import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItrackerDataService } from '../../services/Itracker-services/itracker-data.service';

@Component({
  selector: 'app-sub-systems',
  templateUrl: './sub-systems.component.html',
  styleUrls: ['./sub-systems.component.css']
})
export class SubSystemsComponent implements OnInit {

  @ViewChild('myForm') myForm: NgForm;
  subSystemModel: any;
  systems: any;
  constructor(private fb: FormBuilder, private dataService: ItrackerDataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataService.getSystems().subscribe(
      (res: any) => {
        debugger; this.systems = res;
      },
      err => { console.log(err);}
    );

    this.subSystemModel = this.fb.group({
      SysId: [null, Validators.required],
      SubSysName: ['', Validators.required],
      IsActive: [false],
      SubSysDesc: ['', Validators.required]
    });
  }

  onSubmit() {
    debugger;
    this.dataService.addSubSystem(this.subSystemModel.value).subscribe(
      (res: any) => {
        debugger;
        this.myForm.resetForm();
        this.toastr.success('Sub-System created!', 'Successful.');
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
