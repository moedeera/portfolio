import React from "react";
import "./About.css";
import { PageHeader } from "../../components/PageHeader/PageHeader";

export const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <PageHeader tagline={"Info"} header={"About Me"} />
        <div className="about-header">
          <h1>'A Developer that gets the job done'</h1>
        </div>
        <div className="about-text">
          <h3>
            Web Development is not just a hobby or a job for me, Its my
            obsession
          </h3>
          <p>
            {" "}
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic.
          </p>
        </div>
        <div className="about-images">
          <img
            src={
              "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
          />
          <img
            className="about-img-2"
            src={
              "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
          />
        </div>
        <div className="about-skills">
          <div className="skills-text">
            <h3>Skills</h3>
            <p>
              {" "}
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>
          <div className="skills-grid">
            <i className="fa fa-jsfiddle"></i>
            <i className="fa fa-css3"></i>
            <i class="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-wordpress"></i>
            <i className="fa fa-html5"></i>
            <i class="fa fa-html5 "></i>
          </div>
        </div>
        <div className="about-contact">
          <button className="contact-me">Contact</button>
        </div>
      </div>
    </div>
  );
};
