import React from "react";
import { copyTextToClipboard } from "../../assets/data/dataFunction";
import { linkOpener } from "../../assets/data/dataFunction";
export const LinksPageButton = (Neighborhood) => {
  console.log(Neighborhood[0]);

  return (
    <button
      className="btn btn-primary"
      onClick={() =>
        copyTextToClipboard(
          `<li><a href="${linkOpener}${Neighborhood[0]?.link}">${Neighborhood[0]?.area}<span class="arrow-icon">&#10142;</span></a></li>
                <li><a href="${linkOpener}${Neighborhood[1]?.link}">${Neighborhood[1]?.area}<span class="arrow-icon">&#10142;</span></a></li>
                <li><a href="${linkOpener}${Neighborhood[2]?.link}">${Neighborhood[2]?.area}<span class="arrow-icon">&#10142;</span></a></li>
                <li><a href="${linkOpener}${Neighborhood[3]?.link}">${Neighborhood[3]?.area}<span class="arrow-icon">&#10142;</span></a></li>
                <li><a href="${linkOpener}${Neighborhood[4]?.link}">${Neighborhood[4]?.area}<span class="arrow-icon">&#10142;</span></a></li>
                <li><a href="${linkOpener}${Neighborhood[5]?.link}">${Neighborhood[5]?.area}<span class="arrow-icon">&#10142;</span></a></li>
                <li><a href="${linkOpener}${Neighborhood[6]?.link}">${Neighborhood[6]?.area}<span class="arrow-icon">&#10142;</span></a></li>
                <li><a href="${linkOpener}${Neighborhood[7]?.link}">${Neighborhood[7]?.area}<span class="arrow-icon">&#10142;</span></a></li>
                <li><a href="${linkOpener}${Neighborhood[8]?.link}">${Neighborhood[8]?.area}<span class="arrow-icon">&#10142;</span></a></li>
                <li><a href="${linkOpener}${Neighborhood[9]?.link}">${Neighborhood[9]?.area}<span class="arrow-icon">&#10142;</span></a></li>`
        )
      }
    >
      Copy
    </button>
  );
};
