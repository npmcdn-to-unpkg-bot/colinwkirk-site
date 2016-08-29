/**
 * Created by Colin on 8/28/2016.
 * *
 * This is a simple representation of an individual activity from the Activities
 * section of my resume
 */

export class ResumeActivity {

    private desc : String;
    private dateRange: String;
    private detail : String;

    constructor(desc: String, dateRange: String, detail: String ){
        this.dateRange = dateRange;
        this.desc = desc;
        this.detail = detail;
    }
}
