"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itracker_component_1 = require("./itracker.component");
var auth_guard_1 = require("../auth/auth.guard");
exports.ItrackerRoutes = [
    {
        path: '',
        component: itracker_component_1.ItrackerComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            {
                path: 'itracker/dashboard',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../itracker/dashboard/dashboard.module'); }).then(function (m) { return m.DashboardModule; }); }
            },
            {
                path: 'itracker/admin',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../itracker/admin/admin.module'); }).then(function (m) { return m.AdminModule; }); }
            },
            {
                path: 'itracker/users',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../itracker/users/users.module'); }).then(function (m) { return m.UsersModule; }); }
            },
            {
                path: 'itracker/systems',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../itracker/systems/systems.module'); }).then(function (m) { return m.SystemsModule; }); }
            },
            {
                path: 'itracker/sub-systems',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../itracker/sub-systems/sub-systems.module'); }).then(function (m) { return m.SubSystemsModule; }); }
            },
            {
                path: 'itracker/projects',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../itracker/projects/projects.module'); }).then(function (m) { return m.ProjectsModule; }); }
            }
        ]
    }
];
//# sourceMappingURL=itracker.routes.js.map