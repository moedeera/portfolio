import React from 'react'
import "./AboutMe.css"

export const AboutMe = () => {
  return (
    <div className="about-me-page">

<div className="container-abm">
  <div className="upper-header">
    <div className="uh-text"><h3>About Me</h3></div>
    
    <div className="uh-text-line"></div>
  </div>
<div className="upper-abm">
<div className="upper-abm-picture">
<h1>
              Web Development is not just a hobby or a job for me, It's my passion.
</h1>
</div>
<div className="upper-abm-text">
  <div className="abm-text-header">
  <h1>'Being a developer is about{" "}
              <span
                style={{
                  color: "red",
                  textDecoration: "line-through",
                }}
              >
                <span style={{ color: "black", fontWeight: "600" }}>
                  what you know{" "}
                </span>
              </span>
              <span> what you solve'</span>
 </h1>
  </div>
  <div className="abm-text-summary">
    <div><p>  Hello there! My name is Moe. I started learning coding back in 2020 and
              immediately fell in love with it. I chose early on that I wanted
              to focus on Web Development with an emphasis on Design. Unable
              to attend school due to working full time, I dedicated 
              of 2-4 hours a day to learning. </p></div>
             <div> After looking into the market a little more deeply, I realized
              their was a lot of demand for design/brand oriented websites so I
              leaned WordPress, WebFlow and Figma to boost my design skills. My goal
              is to establish a career in the web Development field and provide
              reliable quality websites.</div>          
  </div>
  <div className="abm-text-cta">
<button className="btn btn-primary">Contact Me</button>
  </div>
</div>


</div>
<div className="lower-abm"></div>
</div>
    </div>
  )
}
