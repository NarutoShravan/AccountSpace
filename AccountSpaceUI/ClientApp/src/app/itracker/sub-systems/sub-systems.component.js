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
var SubSystemsComponent = /** @class */ (function () {
    function SubSystemsComponent(fb, dataService, toastr) {
        this.fb = fb;
        this.dataService = dataService;
        this.toastr = toastr;
    }
    SubSystemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getSystems().subscribe(function (res) {
            debugger;
            _this.systems = res;
        }, function (err) { console.log(err); });
        this.subSystemModel = this.fb.group({
            SysId: [null, forms_1.Validators.required],
            SubSysName: ['', forms_1.Validators.required],
            IsActive: [false],
            SubSysDesc: ['', forms_1.Validators.required]
        });
    };
    SubSystemsComponent.prototype.onSubmit = function () {
        var _this = this;
        debugger;
        this.dataService.addSubSystem(this.subSystemModel.value).subscribe(function (res) {
            debugger;
            _this.myForm.resetForm();
            _this.toastr.success('Sub-System created!', 'Successful.');
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
    ], SubSystemsComponent.prototype, "myForm", void 0);
    SubSystemsComponent = __decorate([
        core_1.Component({
            selector: 'app-sub-systems',
            templateUrl: './sub-systems.component.html',
            styleUrls: ['./sub-systems.component.css']
        })
    ], SubSystemsComponent);
    return SubSystemsComponent;
}());
exports.SubSystemsComponent = SubSystemsComponent;
//# sourceMappingURL=sub-systems.component.js.map