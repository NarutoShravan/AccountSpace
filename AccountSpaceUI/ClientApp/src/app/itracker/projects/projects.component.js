"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(fb, dataService, toastr) {
        this.fb = fb;
        this.dataService = dataService;
        this.toastr = toastr;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getSubSytems().subscribe(function (res) {
            debugger;
            _this.subSystems = res;
        }, function (err) { console.log(err); });
        this.projectModel = this.fb.group({
            SubSysId: [null, forms_1.Validators.required],
            ProjectName: ['', forms_1.Validators.required],
            IsActive: [false],
            ProjectDesc: ['', forms_1.Validators.required]
        });
    };
    ProjectsComponent.prototype.onSubmit = function () {
        var _this = this;
        debugger;
        this.dataService.addProject(this.projectModel.value).subscribe(function (res) {
            debugger;
            _this.myForm.resetForm();
            _this.toastr.success('Project created!', 'Successful.');
            console.log(res);
        }, function (err) {
            debugger;
            _this.myForm.resetForm();
            _this.toastr.error(err.error, 'Failed.');
            console.log(err);
        });
    };
    __decorate([
        core_1.ViewChild('myForm')
    ], ProjectsComponent.prototype, "myForm", void 0);
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-projects',
            templateUrl: './projects.component.html',
            styleUrls: ['./projects.component.css']
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map