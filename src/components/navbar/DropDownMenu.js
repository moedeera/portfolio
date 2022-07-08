import React from "react";
import "./DropDownMenu.css";
import "./MegaMenu.css";
import { Link } from "react-router-dom";

export const DropDownMenu = ({
  selection,
  status,
  show,
  setDropDownContent,
  dropDownContent,
}) => {
  return (
    <div className="dropDownMenu-Container">
      <div
        onMouseLeave={() => {
          show(false);
          setDropDownContent("none");
          // alert(selection);
        }}
        className="ddm-container"
      >
        <div
          className={
            status ? "dropdown-menu dd-mm active" : "dropdown-menu dd-mm"
          }
        >
          <div className="megamenu-content">
            <div className="primary-block">
              <div className="primary-block-header">Latest Projects</div>
              <div className="primary-list">
                <div className="primary-list-item">
                  <div className="primary-list-icon">
                    <i className="fas fa-life-ring"></i>
                  </div>
                  <div className="primary-list-text">
                    <h5>24/7 Technical Support</h5>
                    <small>Obtain quality Support anytime</small>
                  </div>
                </div>

                <div className="primary-list-item">
                  <div className="primary-list-icon">
                    <i className="fas fa-life-ring"></i>
                  </div>
                  <div className="primary-list-text">
                    <h5>24/7 Technical Support</h5>
                    <small>Obtain quality Support anytime</small>
                  </div>
                </div>

                <div className="primary-list-item">
                  <div className="primary-list-icon">
                    <i className="fas fa-life-ring"></i>
                  </div>
                  <div className="primary-list-text">
                    <h5>24/7 Technical Support</h5>
                    <small>Obtain quality Support anytime</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="sub-block">
              <h5>Industries</h5>
              <div className="sub-list">
                <div className="sub-list-item">E-commerce</div>
                <div className="sub-list-item">Financial Services</div>
                <div className="sub-list-item">E-Learning</div>
              </div>
            </div>

            <div className="sub-block">
              <div className="sub-block-header">Industries</div>
              <div className="sub-list">
                <div className="sub-list-item">E-commerce</div>
                <div className="sub-list-item">Financial Services</div>
                <div className="sub-list-item">E-Learning</div>
                <div className="sub-list-item">Blogging</div>
              </div>
            </div>

            <div className="sub-block">
              <h5>Industries</h5>
              <div className="sub-list">
                <div className="sub-list-item">E-commerce</div>
                <div className="sub-list-item">Financial Services</div>
                <div className="sub-list-item">E-Learning</div>
              </div>
            </div>

            <div className="Blog-reminder">
              <h3>Latest Blog</h3>
              <div className="br-lower">
                <div className="blog-image">
                  <img
                    src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
                <div className="blog-text">
                  CSS, HTML and JavaScript were the first skills I learned. I
                  <button className="blog-btn">Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
