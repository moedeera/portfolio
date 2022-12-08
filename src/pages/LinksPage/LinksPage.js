import React from "react";
import "./LinksPage.css";
import { Neighborhoods, linkOpener } from "../../assets/data/dataFunction";

export const LinksPage = () => {
  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      console.log("not successful");
    }
  };

  return (
    <div className="linkspage-container">
      {Neighborhoods.map((hood) =>
        hood.map((area) => (
          <>
            <div className="link-unit">{`${linkOpener}${area.link}`}</div>
            <button
              className="btn btn-primary"
              onClick={() => copyTextToClipboard(`${linkOpener}${area.link}`)}
            >
              Copy
            </button>
          </>
        ))
      )}
    </div>
  );
};
