"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_component_1 = require("./application.component");
exports.ApplicationRoutes = [
    {
        path: '',
        component: application_component_1.ApplicationComponent,
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../application/start/start.module'); }).then(function (m) { return m.StartModule; }); }
            },
            {
                path: 'login',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../application/login/login.module'); }).then(function (m) { return m.LoginModule; }); }
            },
            {
                path: 'register',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../application/register/register.module'); }).then(function (m) { return m.RegisterModule; }); }
            },
            {
                path: 'forgot',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../application/forgot/forgot.module'); }).then(function (m) { return m.ForgotModule; }); }
            }
        ]
    }
];
//# sourceMappingURL=application.routes.js.map