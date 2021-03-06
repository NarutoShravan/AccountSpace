"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forgot_routes_1 = require("./forgot.routes");
var forgot_component_1 = require("./forgot.component");
var ForgotModule = /** @class */ (function () {
    function ForgotModule() {
    }
    ForgotModule = __decorate([
        core_1.NgModule({
            declarations: [forgot_component_1.ForgotComponent],
            exports: [forgot_component_1.ForgotComponent],
            imports: [
                router_1.RouterModule.forChild(forgot_routes_1.ForgotRoutes),
                common_1.CommonModule
            ]
        })
    ], ForgotModule);
    return ForgotModule;
}());
exports.ForgotModule = ForgotModule;
//# sourceMappingURL=forgot.module.js.map