import React from "react";

export const AreasPage = (hood, linkOpener) => {
  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      console.log("not successful");
    }
  };

  return (
    <div>
      {hood?.map((area) => (
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
      ))}
    </div>
  );
};
