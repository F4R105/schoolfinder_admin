import React from 'react'

function About() {
  return (
    <main id="about">
        <div className="container">
            <h1 id='pageTitle'>About</h1>
            <div className="detail">
              <span className="detail_header">
                Introduction
              </span>
              <p>The School finder website is a part of school finder system which include school finder mobile application and admin webapp.The system is a final year project of a three year Information technology degree course at Arusha technical college.</p>
            </div>
            <div className="detail">
              <span className="detail_header">
                Aim of the project
              </span>
              <p>The system aims to simplify the process of finding school's information for Tanzanian parents and students during application process.</p>
            </div>
            <div className="detail">
              <span className="detail_header">
                Technology stack
              </span>
              <p>Technology stack used to build the system include HTML, CSS, Javascript, React and react native frameworks, express API and mongodb database.</p>
            </div>   
        </div>
    </main>
  )
}

export default About