import React from "react";
import "./LinksPage.css";
import { Neighborhoods, linkOpener } from "../../assets/data/dataFunction";
import { useState } from "react";
import { LinksPageButton } from "./LinksPageButton";
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
      <div>
        {" "}
        {/* <LinksPageButton Neighborhood={Neighborhoods[0]} /> */}
        <h1>Revelstoke</h1>
        <button></button>
        {Neighborhoods[0].map((area) => (
          <>
            <h3>{area.area}</h3>
            <div className="link-unit">{`${linkOpener}${area.link}`}</div>
            <button
              className="btn btn-primary"
              onClick={() =>
                copyTextToClipboard(
                  `<li><a href="${linkOpener}${area.link}">${area.area}<span class="arrow-icon">&#10142;</span></a></li>`
                )
              }
            >
              Copy
            </button>
          </>
        ))}
      </div>

      <div>
        <h1>Sicamous</h1>
        {Neighborhoods[1].map((area) => (
          <>
            <h3>{area.area}</h3>
            <div className="link-unit">{`${linkOpener}${area.link}`}</div>
            <button
              className="btn btn-primary"
              onClick={() =>
                copyTextToClipboard(
                  `<li><a href="${linkOpener}${area.link}">${area.area}<span class="arrow-icon">&#10142;</span></a></li>`
                )
              }
            >
              Copy
            </button>
          </>
        ))}
      </div>

      <div>
        <h1>Vernon</h1>
        {Neighborhoods[2].map((area) => (
          <>
            <h3>{area.area}</h3>
            <div className="link-unit">{`${linkOpener}${area.link}`}</div>
            <button
              className="btn btn-primary"
              onClick={() =>
                copyTextToClipboard(
                  `<li><a href="${linkOpener}${area.link}">${area.area}<span class="arrow-icon">&#10142;</span></a></li>`
                )
              }
            >
              Copy
            </button>
          </>
        ))}
      </div>

      <div>
        <h1>Salmon Arm</h1>
        {Neighborhoods[3].map((area, key) => (
          <>
            <h3>
              {key}
              {"."}
              {area.area}
            </h3>
            <div className="link-unit">{`${linkOpener}${area.link}`}</div>
            <button
              className="btn btn-primary"
              onClick={() =>
                copyTextToClipboard(
                  `<li><a href="${linkOpener}${area.link}">${area.area}<span class="arrow-icon">&#10142;</span></a></li>`
                )
              }
            >
              Copy
            </button>
          </>
        ))}
      </div>

      <div>
        <h1>Kamploops</h1>

        {Neighborhoods[4].map((area, key) => (
          <>
            <h3>
              {key}
              {"."}
              {area.area}
            </h3>
            <div className="link-unit">{`${linkOpener}${area.link}`}</div>
            <button
              className="btn btn-primary"
              onClick={() =>
                copyTextToClipboard(
                  `<li><a href="${linkOpener}${area.link}">${area.area}<span class="arrow-icon">&#10142;</span></a></li>`
                )
              }
            >
              Copy
            </button>
          </>
        ))}
      </div>
    </div>
  );
};
