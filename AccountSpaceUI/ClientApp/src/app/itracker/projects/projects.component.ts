import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ItrackerDataService } from '../../services/Itracker-services/itracker-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @ViewChild('myForm') myForm: NgForm;
  projectModel: any;
  subSystems: any;
  constructor(private fb: FormBuilder, private dataService: ItrackerDataService, private toastr: ToastrService) { }


  ngOnInit(): void {
    this.dataService.getSubSytems().subscribe(
      (res: any) => {
        debugger; this.subSystems = res;
      },
      err => { console.log(err); }
    );

    this.projectModel = this.fb.group({
      SubSysId: [null, Validators.required],
      ProjectName: ['', Validators.required],
      IsActive: [false],
      ProjectDesc: ['', Validators.required]
    });
  }

  onSubmit() {
    debugger;
    this.dataService.addProject(this.projectModel.value).subscribe(
      (res: any) => {
        debugger;
        this.myForm.resetForm();
        this.toastr.success('Project created!', 'Successful.');
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
