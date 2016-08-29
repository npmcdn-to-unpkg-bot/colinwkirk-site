/**
 * Created by Colin on 8/28/2016.
 *
 * This is a simple representation of individual educational history from the 
 * Education section of my resume
 */
//TODO change the getters/setters to the typescript style, i.e. get educations
//TODO use mongo/mongoose and pull these from db
export class ResumeEducation {

    private major : String;
    private minor : String;
    private university : String;
    private dateRange : String;
    private focus : String;
    private capstone: String;

    constructor(major : String, minor: String, university: String, dateRange: String,
                focus: String, capstone: String ){
        this.major = major;
        this.minor = minor;
        this.university = university;
        this.dateRange = dateRange;
        this.focus = focus;
        this.capstone = capstone;

    }
}
