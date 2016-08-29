/**
 * Created by ckirk on 7/20/16.
 * This is a simple representation of the skills from the
 * Skills section of my resume
 */
import {ResumeSkill} from './resume.skill';

//TODO change the getters/setters to the typescript style, i.e. get skills
//TODO use mongo/mongoose and pull these from db
export class ResumeSkills {
    private skills = [
        new ResumeSkill("Programming Languages",["C/C++", "Java", "Groovy", "Gosu", "Python", "Lisp", "BASH", "MATLAB", "R", "HTML", "CSS", "JavaScript (Node.js, AngularJS)"]),
        new ResumeSkill("Operating Systems", ["Windows", "Linux (Server and desktop)", "OSX", "Windows Server"]),
        new ResumeSkill("Databases", ["SQL", "Oracle", "PostgreSQL", "SQLite", "MongoDB"]),
        new ResumeSkill("Technologies", ["SVN", "Git", "LDAP", "Ant", "Maven", "JMS", "Tomcat", "Apache", "XenServer", "Proxmox", "VMWare vSphere", "Vyatta", "Stripes", "Swing", "SWT"]),
        new ResumeSkill("Tools", ["Eclipse", "Netbeans", "WebStorm", "PyCharm", "IntelliJ", "Visual Studio", "SQLDeveloper", "ROS/Gazebo", "XML", "JSON", "Excel", "XMLSpy", "Slack", "TeamCity", "BitBucket", "JIRA"]),
        new ResumeSkill("Development Methodologies", ["Agile/Kanban/Scrum", "Waterfall", "Spiral"]),
        new ResumeSkill("Miscellaneous", ["Mensa qualified (#100182479)", "inactive DOD security clearance"])
    ]

    constructor() {
    }

    getSkills() {
        
        return this.skills;
    }
}
