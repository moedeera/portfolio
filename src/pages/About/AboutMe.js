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
<h3>
              If you look into my Github page you understand that Web
              Development is not just a hobby or a job for me, It's my passion.
</h3>
</div>
<div className="upper-abm-text">
  <div className="abm-text-header">
  <h1>'A Self taught developer that understands it's about{" "}
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
              <span> what can you solve'</span>
 </h1>
  </div>
  <div className="abm-text-summary">
    <div><p>       My name is Moe and I decided to learn coding in 2020 and
              immediately fell in love with it. I chose early on that I wanted
              to focus on Web Development with an emphasis on web design. Unable
              to attend school due to working full time, I dedicated a minimum
              of 2 hours a day to learning.</p></div>
    <div> After looking into the market a little more deeply, I realized
              their was a lot of demand for design/brand oriented websites so I
              leaned WordPress, WebFlow and Figma. to boost my design skills. I
              am still learning but have made huge strides since then. My goal
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
