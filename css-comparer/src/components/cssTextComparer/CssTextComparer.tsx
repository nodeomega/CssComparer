import "./CssTextComparer.scss";

import { ChangeEvent, useState } from "react";
import { CssTextComparerProps } from "./CssTextComparerProps";

function CssTextComparer({heading, text, initialCss}: CssTextComparerProps) {
  const [cssStyle, setCssStyle] = useState(initialCss ?? "");

  const changeCssStyle = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (!(event.currentTarget.value)) {
      setCssStyle("");
    } else {
      setCssStyle(event?.currentTarget.value);
    }    
  }

  const processStyles = (styleList: string) => {
    const result: {[key: string]: string | number} = {};
    const splitStyles = styleList.split(";")
    for (const s in splitStyles) {
      console.log(splitStyles[s]);
      const cssSplit = splitStyles[s].split(":");
      if (cssSplit.length != 2) 
      {
        continue;
      }

      cssSplit[0] = cssSplit[0].replace(/-([a-z])/g, (m, r) => {return r.toUpperCase();}).replace(/\s/, "");

      result[cssSplit[0]] = cssSplit[1];
    }

    return result;
  }

  console.log(processStyles(cssStyle));
  
  return (
    <div className="text-css-control">
      {heading && (
        <h2>{heading}</h2>        
      )}
      <div className="css-input">
        <label>CSS (separated by semicolons)</label>
        <textarea rows={6} value={cssStyle} onChange={changeCssStyle} />
      </div>
      <p style={processStyles(cssStyle)}>
        {text}
      </p>
    </div>
    
  )
}

export default CssTextComparer;
