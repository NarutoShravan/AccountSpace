"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var application_routes_1 = require("./application/application.routes");
var itracker_routes_1 = require("./itracker/itracker.routes");
exports.routes = __spreadArrays(application_routes_1.ApplicationRoutes, itracker_routes_1.ItrackerRoutes);
//# sourceMappingURL=app.routing.js.map