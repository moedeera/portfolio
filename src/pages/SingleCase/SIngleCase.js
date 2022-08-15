import React, { useState } from "react";
import "./SingleCase.css";
import { Fade } from "react-reveal";
import { useParams } from "react-router-dom";
export const SingleCase = () => {
  let { id } = useParams();

  const [accordion, showAccordion] = useState(false);
  return (
    <div className="single-case-page">
      <div className="s-case">
        <div className="s-case-header">
          <h1>Cancer Stat Facts: Melanoma of the Skin</h1>
        </div>
      </div>
      <div className="container sscp">
        <div className="case-container-box">
          <div className="ccb-right">
            <div className="cc-side-bar">
              <div className="side-bar-unit sbu-header">Reports on Cancer</div>
              <div className="side-bar-unit sbu-current">
                Annual Report to the Nation
              </div>
              <div className="side-bar-unit">Cancer Stat Facts </div>
              <div className="side-bar-unit">Cancer Statistics Review</div>
              <div className="side-bar-unit">
                Preliminary incident Rates for 2017
              </div>
              <div className="side-bar-unit">SEER Publications</div>
            </div>
          </div>
          <div className="ccb-left">
            <div className="ccb-left-container">
              <div className="ccb-left-accordion">
                <div
                  className="ccb-accordion-box"
                  onClick={() => {
                    showAccordion(!accordion);
                  }}
                >
                  <div>Statistics at Glance</div>
                  <div>
                    <i className="fa fa-plus"></i>
                  </div>
                </div>

                <div
                  className="ccb-accordion-content"
                  style={accordion ? { height: "auto" } : { height: "0px" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>
              <div className="ccb-left-accordion"></div>
              <div className="ccb-left-accordion"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
