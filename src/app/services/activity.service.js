"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_activity_1 = require("../data/mock-activity");
var ActivityService = (function () {
    function ActivityService() {
    }
    /*	items: FirebaseObjectObservable<any[]>;
        constructor(public af: AngularFire) {
            this.items = af.database.object('/Activities');
        }*/
    /*	getActivities() {
            return this.items;
        }
    }
    */
    ActivityService.prototype.getActivities = function () {
        return mock_activity_1.ACTIVITIES;
    };
    return ActivityService;
}());
ActivityService = __decorate([
    core_1.Injectable()
], ActivityService);
exports.ActivityService = ActivityService;
//# sourceMappingURL=activity.service.js.map