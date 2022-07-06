import React, { useEffect } from "react";
import "./Project.css";
import { useParams } from "react-router-dom";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { useContext } from "react";
import { SiteContext } from "../../context/Context";

export const Project = () => {
  const { id } = useParams();
  const { projects } = useContext(SiteContext);

  return (
    <div>
      <div className="project-page-container">
        <PageHeader tagline={"UI/UX"} header={id} />
        {/* <div className="pp-upper-circles-dec">
          <div className="pp-dot pp-up"></div>
          <div className="pp-dot pp-up"></div>
          <div className="pp-dot pp-up"></div>
          <div className="pp-dot pp-up"></div>
          <div className="pp-dot pp-up"></div>

          <div className="pp-dot pp-up"></div>
          <div className="pp-dot pp-up"></div>
          <div className="pp-dot pp-up"></div>
          <div className="pp-dot pp-up"></div>
          <div className="pp-dot pp-up col1"></div>

          <div className="pp-dot pp-up"></div>
          <div className="pp-dot pp-up"></div>
          <div className="pp-dot pp-up"></div>
          <div className="pp-dot pp-up col1"></div>
          <div className="pp-dot pp-up col1"></div>

          <div className="pp-dot pp-up"></div>
          <div className="pp-dot pp-up"></div>
          <div className="pp-dot pp-up col1"></div>
          <div className="pp-dot pp-up col1"></div>
          <div className="pp-dot pp-up col1"></div>

          <div className="pp-dot pp-up"></div>
          <div className="pp-dot pp-up col1"></div>
          <div className="pp-dot pp-up col1"></div>
          <div className="pp-dot pp-up col1"></div>
          <div className="pp-dot pp-up col1"></div>
        </div>
        <div className="pp-upper">
          <div className="pp-upper-container">
            <div className="pp-upper-text">
              <p>UI/UX Project</p>
              <h1>{id}</h1>
            </div>
            <div className="pp-upper-circles">
              <div className="pp-circle pp-upper-circle-1"></div>
              <div className="pp-circle pp-upper-circle-2"></div>
            </div>
          </div>
        </div> */}

        <div className="pp-details">
          <div className="pp-detail-unit">
            <h3>Built with</h3>
            <i className="fa fa-jsfiddle" aria-hidden="true"></i>
          </div>
          <div className="pp-detail-unit">
            <h3>Link</h3>
            <a href="https://deeracode.dev/socialmedia">BlueBear Social</a>
          </div>
          <div className="pp-detail-unit md">
            <h3>Purpose</h3>
            Client
          </div>
          <div className="pp-detail-unit lg">
            <h3>Repository</h3>
            <i class="fa fa-github fa-2x" aria-hidden="true"></i>
          </div>
        </div>
        <div className="pp-lower">
          <div className="pp-image">
            {" "}
            <img
              src={
                "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
            />
          </div>
          <div className="pp-summary">
            <div className="pp-summary-header">
              <h3>A website designed for User Interfaces</h3>
            </div>
            <div className="pp-summary-text">
              <p>
                {" "}
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic.
              </p>
            </div>
          </div>
        </div>
        <div className="pp-lower-border">
          <div className="pp-dot"></div>
          <div className="lower-border"></div>
        </div>
      </div>
    </div>
  );
};
