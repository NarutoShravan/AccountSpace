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
var start_component_1 = require("./start.component");
var start_routes_1 = require("./start.routes");
var StartModule = /** @class */ (function () {
    function StartModule() {
    }
    StartModule = __decorate([
        core_1.NgModule({
            declarations: [start_component_1.StartComponent],
            exports: [start_component_1.StartComponent],
            imports: [
                router_1.RouterModule.forChild(start_routes_1.StartRoutes),
                common_1.CommonModule
            ]
        })
    ], StartModule);
    return StartModule;
}());
exports.StartModule = StartModule;
//# sourceMappingURL=start.module.js.map