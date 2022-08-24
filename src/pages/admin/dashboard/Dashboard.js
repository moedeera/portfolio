import React, { useContext } from "react";
import { SiteContext } from "../../../context/Context";
import "../Admin.css";
import "./Dashboard.css";

export const Dashboard = () => {
  const { toggleShow, show } = useContext(SiteContext);
  return (
    <div className="admin-page">
      <div className="dashboard-container">
        <div className="dashboard-">
          <div className="dashboard-button">
            {show ? (
              <>
                <i
                  className="fas fa-times"
                  onClick={() => {
                    toggleShow(false);
                  }}
                ></i>
              </>
            ) : (
              <>
                <i
                  className="fas fa-bars"
                  onClick={() => {
                    toggleShow(true);
                  }}
                ></i>
              </>
            )}
          </div>
          Profile
        </div>
      </div>
    </div>
  );
};
