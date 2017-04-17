"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var flex_layout_1 = require("@angular/flex-layout");
var angularfire2_1 = require("angularfire2");
var app_component_1 = require("./app.component");
var material_1 = require("@angular/material");
var daily_log_component_1 = require("./daily-log.component");
var activity_card_component_1 = require("./components/activity-card.component");
var parent_note_component_1 = require("./components/parent-note.component");
var log_toolbar_component_1 = require("./components/log-toolbar.component");
var daily_notes_component_1 = require("./components/daily-notes.component");
exports.firebaseConfig = {
    apiKey: "AIzaSyDG6zuWIYXHq2SNpK8KJil10X6g2Pp7pQI",
    authDomain: "nannylog-6746e.firebaseapp.com",
    databaseURL: "https://nannylog-6746e.firebaseio.com",
    projectId: "nannylog-6746e",
    storageBucket: "nannylog-6746e.appspot.com",
    messagingSenderId: "514646801815"
};
// 
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            material_1.MaterialModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            flex_layout_1.FlexLayoutModule,
            angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig),
        ],
        declarations: [
            app_component_1.AppComponent,
            daily_log_component_1.DailyLogComponent,
            activity_card_component_1.ActivityCard,
            parent_note_component_1.ParentNote,
            log_toolbar_component_1.LogToolbar,
            daily_notes_component_1.DailyNotes,
        ],
        bootstrap: [
            app_component_1.AppComponent,
            daily_log_component_1.DailyLogComponent,
            activity_card_component_1.ActivityCard,
            parent_note_component_1.ParentNote,
            log_toolbar_component_1.LogToolbar,
            daily_notes_component_1.DailyNotes,
        ],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map