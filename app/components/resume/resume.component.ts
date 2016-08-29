/**
 * Created by Colin on 6/18/2016.
 * Container class that generates the resume off of the helper classes
 */
import {Component} from '@angular/core';

//TODO refactor these and pull the from mongo
import {ResumeSkills} from '../../classes/resume/resume.skills'
import {ResumeSkill} from '../../classes/resume/resume.skill';
import {ResumeExperiences} from '../../classes/resume/resume.experiences'
import {ResumeExperience} from '../../classes/resume/resume.experience';
import {ResumeEducations}from '../../classes/resume/resume.educations';
import {ResumeEducation} from '../../classes/resume/resume.education';
import {ResumeActivities} from '../../classes/resume/resume.activities';
import {ResumeActivity} from '../../classes/resume/resume.activity';

@Component({
    selector: 'my-resume',
    styleUrls: ['app/components/resume/resume.css'],
    templateUrl: 'app/components/resume/resume.component.html',
    providers: [ResumeSkills, ResumeExperiences, ResumeEducations, ResumeActivities],
    //pipes: [KeysPipe]
})
export class ResumeComponent {
    private skills: ResumeSkill[];
    private experiences: ResumeExperience[];
    private educations: ResumeEducation[];
    private activities: ResumeActivity[];

    constructor(private rs : ResumeSkills, private re: ResumeExperiences, private red: ResumeEducations, private ra: ResumeActivities) {
        this.skills = rs.getSkills();
        this.experiences = re.getExperiences();
        this.educations = red.getEducations();
        this.activities = ra.getActivities();
    }

    goBack() {
        window.history.back();
    }

    getArrToCsv(arr) {
        return arr.join(", ");
    }


}
