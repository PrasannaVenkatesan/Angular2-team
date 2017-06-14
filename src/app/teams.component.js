"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var team_service_1 = require("./team.service");
var TeamsComponent = (function () {
    function TeamsComponent(router, teamService) {
        this.router = router;
        this.teamService = teamService;
        this.title = "CT 2017";
    }
    TeamsComponent.prototype.onSelect = function (team) {
        this.selecteam = team;
    };
    TeamsComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams().then(function (teams) { return _this.teams = teams; });
    };
    TeamsComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    TeamsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selecteam.id]);
    };
    TeamsComponent.prototype.add = function (teamname) {
        var _this = this;
        teamname = teamname.trim();
        if (!teamname) {
            return;
        }
        this.teamService.create(teamname)
            .then(function (team) {
            _this.teams.push(team);
            _this.selecteam = null;
        });
    };
    TeamsComponent.prototype.delete = function (team) {
        var _this = this;
        this.teamService
            .delete(team.id)
            .then(function () {
            _this.teams = _this.teams.filter(function (h) { return h !== team; });
            if (_this.selecteam === team) {
                _this.selecteam = null;
            }
        });
    };
    return TeamsComponent;
}());
TeamsComponent = __decorate([
    core_1.Component({
        selector: 'my-teams',
        styleUrls: ['./teams.component.css'],
        template: "<h1>{{title}}</h1>\n <h2>Teams</h2>\n<ul class=\"teams\">\n \n   <li *ngFor=\"let team of teams\" [class.selected]=\"team === selecteam\"(click)=\"onSelect(team)\">\n    <span class=\"badge\">{{team.teamname}}</span> {{team.captain}}\n    <button class=\"delete\"\n(click)=\"delete(team); $event.stopPropagation()\">x</button>\n  </li>\n</ul>\n    <div *ngIf=\"selecteam\">\n    <h2>\n    {{selecteam.teamname | lowercase}} is my team\n    </h2>\n    <button (click)=\"gotoDetail()\">View Details</button>\n    </div>\n    <hr/>\n        <div>\n      \n    <label>Team name:</label> <input #teamName />\n    <button (click)=\"add(teamName.value); teamName.value=''\">\n    Add\n    </button>\n    </div>\n\n ",
    }),
    __metadata("design:paramtypes", [router_1.Router,
        team_service_1.TeamService])
], TeamsComponent);
exports.TeamsComponent = TeamsComponent;
//# sourceMappingURL=teams.component.js.map