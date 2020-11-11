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
var SystemsComponent = /** @class */ (function () {
    function SystemsComponent(fb, dataService, toastr) {
        this.fb = fb;
        this.dataService = dataService;
        this.toastr = toastr;
    }
    SystemsComponent.prototype.ngOnInit = function () {
        this.systemModel = this.fb.group({
            SysName: ['', forms_1.Validators.required],
            IsActive: [false],
            SysDesc: ['', forms_1.Validators.required]
        });
    };
    SystemsComponent.prototype.onSubmit = function () {
        var _this = this;
        debugger;
        this.dataService.addSystem(this.systemModel.value).subscribe(function (res) {
            debugger;
            _this.myForm.resetForm();
            _this.toastr.success('System created!', 'Successful.');
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
    ], SystemsComponent.prototype, "myForm", void 0);
    SystemsComponent = __decorate([
        core_1.Component({
            selector: 'app-systems',
            templateUrl: './systems.component.html',
            styleUrls: ['./systems.component.css']
        })
    ], SystemsComponent);
    return SystemsComponent;
}());
exports.SystemsComponent = SystemsComponent;
//# sourceMappingURL=systems.component.js.map