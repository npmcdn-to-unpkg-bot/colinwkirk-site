/**
 * Created by ckirk on 7/20/16.
 *
 * This is a simple representation of an individual skill from the
 * Skills section of my resume
 */

export class ResumeSkill {
    category : String;
    skills: String[];

    constructor(cat:String, sk:String[]) {
        this.category = cat;
        this.skills = sk;
    }

    getSkills() {
        return this.skills;
    }

    getCategory() {
        return this.category;
    }
}
