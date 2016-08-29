/**
 * Created by Colin on 8/28/2016.
 *
 * This is a simple representation of individual activities from the Activities
 * section of my resume
 */
//TODO change the getters/setters to the typescript style, i.e. get activities
//TODO use mongo/mongoose and pull these from db
import {ResumeActivity} from './resume.activity';

export class ResumeActivities  {

    private _activities = [
        new ResumeActivity("Product Owner, OU Computer Science Capstone", "Fall 2016", "Product owner for senior Computer Science capstone project; project focus is analysis of patterns in vehicle parking behavior to enable smart planning and usage of space."),
        new ResumeActivity("Graphic Designer, Looking Dynamic, Inc.", "Fall 2015", "Created graphics for Android game \"Looking Busy\" by Looking Dynamic, LLC. (http://www.lookingdynamic.com) using GIMP and Blender3D."),
        new ResumeActivity("President - OU Student Martial Arts Association", "January 2010 – May 2013", "Student group promoting knowledge of martial arts; responsible for organizing and teaching classes and self-defense seminars, updating website.")
    ];

    constructor() {
    }


    getActivities() {
        return this._activities;
    };

}
