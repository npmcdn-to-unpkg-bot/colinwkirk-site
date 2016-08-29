/**
 * Created by Colin on 8/28/2016.
 *
 * This is a simple representation of the educational history from the
 * Education section of my resume
 */
import {ResumeEducation} from './resume.education';

export class ResumeEducations  {

    private _educations = [
        new ResumeEducation("M.S. Computer Science", null, "University of Oklahoma",
            "January 2014 - January 2015 (incomplete)", "AI and Machine Learning",
            "Worked on a self guided project developing an automated flight system in the X-Plane flight " +
            " simulator that uses machine learning to recover from mechanical failures."),
        new ResumeEducation("B.S. Aerospace Engineering", "Computer Science (focus on AI and Machine Learning)",
            "University of Oklahoma","January 2009 – May 2013", null,
            "Designed a low-boom 100 passenger supersonic transport (SST) with an assumed year of introduction " +
            "of 2030 in cooperation with and under direction of Lockheed Martin. Primary responsibilities were " +
            "aerodynamics calculations assisted by numerical methods and CAD modeling."),
        new ResumeEducation("B.A. Art", null,
            "Arkansas State University", "August 1998 - December 2005", "Art History",
            "An examination of critiques of society in the politically driven art of Barbara Kruger, with a special " +
            "focus on critiques of the media")
        ];

    constructor() {
    }


    getEducations() {
        return this._educations;
    };

}
