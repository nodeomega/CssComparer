import { textSizeComparison } from "../../models/textSizeComparison";
import "./TextSizeComparer.scss";
// import { TextSizeComparerProps } from "./TextSizeComparerProps";

function TextSizeComparer() {
  const units: textSizeComparison[] = [
    {unit: "pt", description: "1/72nd of an inch", value: (1/72)},
    {unit: "px", description: "1/96th of an inch", value: (1/96)},
  ]

  const 

  return (
    <>
      (for u in units) 
    </>
  )
}

export default TextSizeComparer;

