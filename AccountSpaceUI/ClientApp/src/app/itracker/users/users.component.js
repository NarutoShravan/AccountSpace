"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, toastr) {
        this.userService = userService;
        this.toastr = toastr;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.userService.registerModel.reset();
    };
    UsersComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.register().subscribe(function (res) {
            _this.myForm.resetForm();
            if (res.succeeded) {
                debugger;
                _this.toastr.success('New user created!', 'Registration successful.');
            }
            else {
                res.errors.forEach(function (element) {
                    switch (element.code) {
                        case 'DuplicateUserName':
                            _this.toastr.error('UserId is already taken', 'Registration failed.');
                            break;
                        default:
                            _this.toastr.error(element.description, 'Registration failed.');
                            break;
                    }
                });
            }
        }, function (err) {
            _this.myForm.resetForm();
            console.log(err);
        });
    };
    __decorate([
        core_1.ViewChild('myForm')
    ], UsersComponent.prototype, "myForm", void 0);
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.css']
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map