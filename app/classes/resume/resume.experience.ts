/**
 * Created by ckirk on 7/20/16.
 *
 * This is a simple representation of an individual work experience  from the
 * Experience section of my resume
 */
//TODO change the getters/setters to the typescript style, i.e. get experiences
//TODO use mongo/mongoose and pull these from db
export class ResumeExperience {
    private company : String;
    private location: String;
    private dateRange: String;
    private title: String;
    private keyTech: String[];
    private summary: String;
    private bullets: String[];

    constructor(company: String, location: String, dateRange: String,
                title: String, keyTech: String[], summary: String, bullets: String[]) {
        this.company = company;
        this.location = location;
        this.dateRange = dateRange;
        this.title = title;
        this.keyTech = keyTech;
        this.summary = summary;
        this.bullets = bullets;
    }

}
