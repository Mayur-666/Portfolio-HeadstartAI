import React from 'react'

function Experience() {
  return (
    <div className='experience'>
        <h1>Experience</h1>
        <p className='runner'></p>
        <div className='timeline'>
            <div className="content first">
                <h4>SDE Intern @LearnDuke</h4>
                <ul>
                    <li>Designed and implemented a robust website enabling job creation, mentor profiles, and webinar management.
                    </li>
                    <li> Utilized technologies such as React, Node.js, MongoDB, etc. to develop and maintain the platform.</li>
                    <li>Developed a mentor onboarding process that facilitated profile creation, mentorship tracking, and communication between mentors and mentees.</li>
                    <li>Continuously improved website performance, implemented security measures, and provided ongoing maintenance and support.</li>
                </ul>
            </div>
            <div className="content second">
                <h4>Contributor @GSSOC</h4>
                <ul>
                    <li>Participated in GSSoC, contributing to multiple frontend and full stack repositories on GitHub.
                    </li>
                    <li> Enhanced user interfaces by implementing responsive designs, improving UI/UX, and fixing bugs across various projects.</li>
                    <li>Collaborated with other contributors and project maintainers, providing code reviews, and assisting newcomers in understanding project requirements and workflows.</li>
                    <li> Engaged with the open-source community, participating in discussions, and attending workshops and webinars to enhance coding skills and knowledge.</li>
                </ul>
            </div>
            <div className="content third">
                <h4>Builder @Buildspace</h4>
                <ul>
                    <li>Worked on cool project in <b>Nights&Weekend</b> Season 5 by Buildspace.
                    </li>
                    <li>Developed a website to collaborate effectively on documents.</li>
                   
                    <li> Engaged with the community, participating in discussions, and attended to enhance my knowledge.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience