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
var BehaviorSubject_1 = require("rxjs/internal/BehaviorSubject");
var UserService = /** @class */ (function () {
    function UserService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.appDomain = new BehaviorSubject_1.BehaviorSubject(null);
        this.domain = this.appDomain.asObservable();
        this.BaseURI = 'https://localhost:44310/api';
        this.registerModel = this.fb.group({
            UserId: ['', forms_1.Validators.required],
            FirstName: ['', forms_1.Validators.required],
            LastName: ['', forms_1.Validators.required],
            Email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            Passwords: this.fb.group({
                Password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
                ConfirmPassword: ['', forms_1.Validators.required]
            }, { validator: this.comparePasswords })
        });
    }
    UserService.prototype.comparePasswords = function (fb) {
        var confirmPswrdCtrl = fb.get('ConfirmPassword');
        //passwordMismatch
        //confirmPswrdCtrl.errors={passwordMismatch:true}
        if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
            if (fb.get('Password').value != confirmPswrdCtrl.value)
                confirmPswrdCtrl.setErrors({ passwordMismatch: true });
            else
                confirmPswrdCtrl.setErrors(null);
        }
    };
    UserService.prototype.register = function () {
        var body = {
            UserId: this.registerModel.value.UserId,
            FirstName: this.registerModel.value.FirstName,
            LastName: this.registerModel.value.LastName,
            Email: this.registerModel.value.Email,
            Password: this.registerModel.value.Passwords.Password
        };
        return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
    };
    UserService.prototype.login = function (formData) {
        return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
    };
    UserService.prototype.getUserProfile = function () {
        return this.http.get(this.BaseURI + '/UserProfile');
    };
    //
    UserService.prototype.changeAppDomain = function (value) {
        this.appDomain.next(value);
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map