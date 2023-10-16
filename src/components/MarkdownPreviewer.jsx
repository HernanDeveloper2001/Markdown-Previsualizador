import { FaFreeCodeCamp, FaExpandArrowsAlt } from "react-icons/fa"
import "../styles/MarkdownPreviewer.scss"


function MarkdownPreviewer() {
 
  return (
    <div className="previewWrap">
      <div className="toolbarPreview">
        <i className="icon-freecodecamp"><FaFreeCodeCamp /></i>
          Preview
        <i className="icon-arrows"><FaExpandArrowsAlt /></i>
      </div>
      <div
        id="preview"
        
      />
    </div>
  );
}

export default MarkdownPreviewer;