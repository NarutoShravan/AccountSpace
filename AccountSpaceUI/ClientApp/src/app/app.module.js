"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var ngx_toastr_1 = require("ngx-toastr");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var application_module_1 = require("./application/application.module");
var itracker_module_1 = require("./itracker/itracker.module");
var animations_1 = require("@angular/platform-browser/animations");
var app_material_module_1 = require("./app-material.module");
var user_service_1 = require("./services/shared/user.service");
var itracker_data_service_1 = require("./services/Itracker-services/itracker-data.service");
var auth_interceptor_1 = require("./auth/auth.interceptor");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                ngx_toastr_1.ToastrModule.forRoot({ progressBar: true }),
                app_routing_module_1.AppRoutingModule,
                application_module_1.ApplicationModule,
                itracker_module_1.ItrackerModule,
                router_1.RouterModule.forRoot(app_routing_1.routes, { useHash: true }),
                animations_1.BrowserAnimationsModule,
                app_material_module_1.AppMaterialModule
            ],
            providers: [user_service_1.UserService, itracker_data_service_1.ItrackerDataService, {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_1.AuthInterceptor,
                    multi: true
                }],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map