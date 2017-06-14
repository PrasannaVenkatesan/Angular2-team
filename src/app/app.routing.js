"use strict";
var router_1 = require("@angular/router");
var teams_component_1 = require("./teams.component");
var dashboard_component_1 = require("./dashboard.component");
var team_detail_component_1 = require("./team-detail.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'teams',
        component: teams_component_1.TeamsComponent
    },
    {
        path: 'detail/:id',
        component: team_detail_component_1.TeamDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map