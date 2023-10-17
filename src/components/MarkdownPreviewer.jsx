import { FaFreeCodeCamp, FaExpandArrowsAlt,FaCompressAlt } from "react-icons/fa"
import "../styles/MarkdownPreviewer.scss"
import { marked } from "marked";
import PropTypes from "prop-types"

function MarkdownPreviewer({ dataMarkdown,onActiveMarkdown,activeMarkdown2,activeMarkdown1 }) {
 
  return (
    <div className="previewWrap" id={activeMarkdown1 ? "hidden" : null}>
      <div className="contenedorPreview">
        <div className="toolbarPreview">
          <i className="icon-freecodecamp"><FaFreeCodeCamp /></i>
            Preview
            <i 
              className="icon-arrows" 
              onClick={() => onActiveMarkdown("2")}>
              {
                activeMarkdown2 
                ? <FaCompressAlt />
                : <FaExpandArrowsAlt />
                
              }
            </i>
        </div>
        <div
          id={activeMarkdown2?"maximized": "preview"}
          dangerouslySetInnerHTML={{ __html: marked(dataMarkdown)}}
        />
      </div>
    </div>
  );
}

MarkdownPreviewer.propTypes = {
  dataMarkdown: PropTypes.string.isRequired,
  onActiveMarkdown:PropTypes.func,
  activeMarkdown2:PropTypes.bool,
  activeMarkdown1:PropTypes.bool,
}

export default MarkdownPreviewer;