import React from "react";
import "./LinksPage.css";
import { Neighborhoods, linkOpener } from "../../assets/data/dataFunction";
import { useState } from "react";

export const LinksPage = () => {
  const [links, setLinks] = useState();
  const [links2, setLinks2] = useState();
  const [links3, setLinks3] = useState();
  const [links4, setLinks4] = useState();
  const [links5, setLinks5] = useState();

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
            <h3>{area.area}</h3>
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
