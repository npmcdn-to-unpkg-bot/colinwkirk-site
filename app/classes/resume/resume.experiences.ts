/**
 * Created by Colin on 8/28/2016.
 *
 * This is a simple representation of the work experience from the
 * Experience section of my resume
 */
import {ResumeExperience} from './resume.experience';

export class ResumeExperiences  {

        private _experiences = [
            new ResumeExperience("Changeis, Inc.", "Oklahoma City, OK", "December 2015 - Present", "Software Engineer", ["Java", "Python", "Shell Scripting", "TeamCity", "Git/Bitbucket", "JIRA", "Maven", "Ant", "Gradle", "GWT"], "Design and implementation of Continuous Integration architecture and workflow from scratch using Atlassian BitBucket Git, JetBrains TeamCity build server, JFrog Artifactory repository, and Gitflow workflow", ["Implemented TeamCity Enterprise build server with branch specific automatically triggered builds across 19 individual projects, storing built artifacts in Artifactory repository using semantic versioning",
                "Implemented integration points between JIRA, BitBucket, and TeamCity", "Implemented Gitflow branching strategy on Atlassian Bitbucket Git",
                "Heavily refactored very large and complex Ant build spanning 30+ individual build scripts and thousands of lines of Ant scripting to reduce build time from approximately two hours to approximately 10 minutes",
                "Broke four interdependent builds from this Ant project into independently buildable and installable projects",
                "Began transitioning Maven projects to Gradle",
                "Built deploy tool in Python to automate deployment process of any project to any environment",
                "Built webscraper in Python to handle automated retrieval of SNAPSHOT builds from Artifactory"]),
            new ResumeExperience("Compsource Mutual", "Oklahoma City, OK", "February 2015 - December 2015", "Senior Java Developer, Integration team", ["Java", "Groovy", "Gosu", "Stripes framework", "JAXB", "Oracle SQL", "Ant", "JIRA", "Confluence", "Git/Stash"], "Stabilization and maintenance of integration endpoints between Guidewire insurance suite components for billing, claims, policies, and contact management, and integration with external systems, troubleshooting and improvement of system performance, creation and maintenance of large scale data handling processes, and development and maintenance of customer facing web portal.", ["Rebuilt reporting process, preventing incursion of 7-figure fine",
                "Developed fuzzy string matching algorithms to handle search issues when matching externally provided data",
                "Rebuilt and reduced run time of important nightly batch process by a factor of 10",
                "Greatly improved stability of multiple important processes"]),
            new ResumeExperience("CGI Federal", "Norman, OK", "June 2014 - February 2015", "Software Systems Engineer, JADOCS", ["C", "C++", "Java", "JBoss", "PostgreSQL", "SMTP", "SVN"], "Maintenance and development for both server (Java/C++) and client (C/C++) components of battlefield command and control (C2) and data deconfliction software suite used by all branches of US Military. Responsible for full software lifecycle including requirements analysis and development, architecture design, analysis and implementation, implementation of requirements, documentation, and testing.", ["Rebuilt SMTP encoding, decoding, and processing to allow communication with various external systems",
                "Implemented new integration with several communications systems and protocols",
                "Tested new communications integration against live systems at offsite location",
                "Functioned as technical lead within 3 months of hire"]),
            new ResumeExperience("Northrop Grumman Aerospace Systems", "Oklahoma City, OK", "June 2013 - June 2014", "Engineer Software Quality", ["C", "MS Access", "Rational DOORS", "Rational Rhapsody"], "Development, modification, application, and maintenance of standards for software quality operating methods, processes, systems and procedures. Performance of software inspection, testing, verification and validation to ensure that project and process control documentation were compliant with requirements, objectives and/or contract and meet acceptable reliability standards.", ["Developed MS Access database to store and track blank and completed forms and documentation",
                "Performed, oversaw and verified unit, functional, and system testing on advanced aircraft simulation equipment at Tinker Air Force Base",
                "Oversaw offsite testing at a major subcontractor on multiple occasions"]),
            new ResumeExperience("MSCI", "Norman, OK", "May 2010 - June 2013", "Core Services team, Environment support", ["Java", "Groovy", "Python", "Lisp", "BASH", "Oracle SQL", "JMS", "Maven", "SWT", "Swing", "SVN"], "Setup, maintenance, and troubleshooting of workflows, frameworks, service deployments, workflow and server configuration, and other tasks related to Oracle Red Hat Linux-based SOA development environments. Development of tools, automated maintenance processes, and Eclipse plugins.", ["Set up initial group of ~30 framework servers for HotSpot JVM-based distributed development sandbox environment",
                "Wrote a large number of long and complex BASH, Groovy, and Python scripts for server maintenance, environment cleanup, and server-to-server communication that were implemented in nightly or weekly use across multiple teams",
                "Wrote various tools in Java using Swing or SWT to assist in troubleshooting and data collection, as well as Eclipse plugins",
                "Contributed to a complex, object-oriented Python-based release automation tool",
                "Conducted cleanup and reorganization of code for core workflows written in Lisp and Gozer, a custom Lisp dialect"])
        ];

    constuctor() {        
    }


    getExperiences() {        
        return this._experiences;
    };

}
