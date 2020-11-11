"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItrackerDataService = /** @class */ (function () {
    function ItrackerDataService(http) {
        this.http = http;
        this.BaseURI = 'https://localhost:44310/api';
    }
    ItrackerDataService.prototype.addSystem = function (formData) {
        debugger;
        return this.http.post(this.BaseURI + '/itracker/systems', formData);
    };
    ItrackerDataService.prototype.getSystems = function () {
        debugger;
        return this.http.get(this.BaseURI + '/itracker/systems');
    };
    ItrackerDataService.prototype.addSubSystem = function (formData) {
        debugger;
        return this.http.post(this.BaseURI + '/itracker/subsystems', formData);
    };
    ItrackerDataService.prototype.getSubSytems = function () {
        debugger;
        return this.http.get(this.BaseURI + '/itracker/subsystems');
    };
    ItrackerDataService.prototype.addProject = function (formData) {
        debugger;
        return this.http.post(this.BaseURI + '/itracker/projects', formData);
    };
    ItrackerDataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ItrackerDataService);
    return ItrackerDataService;
}());
exports.ItrackerDataService = ItrackerDataService;
//# sourceMappingURL=itracker-data.service.js.map