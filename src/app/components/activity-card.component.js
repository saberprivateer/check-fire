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
var activity_service_1 = require("../services/activity.service");
var ActivityCard = (function () {
    function ActivityCard(activityService) {
        this.activityService = activityService;
    }
    ActivityCard.prototype.getActivities = function () {
        this.activities = this.activityService.getActivities();
    };
    ActivityCard.prototype.ngOnInit = function () {
        this.getActivities();
    };
    return ActivityCard;
}());
ActivityCard = __decorate([
    core_1.Component({
        selector: 'activity-card',
        templateUrl: './activity-card.component.html',
        providers: [activity_service_1.ActivityService]
    }),
    __metadata("design:paramtypes", [activity_service_1.ActivityService])
], ActivityCard);
exports.ActivityCard = ActivityCard;
//# sourceMappingURL=activity-card.component.js.map