import MarkdownPreviewer from "./MarkdownPreviewer"
import "../styles/MarkdownEditor.scss"
import { FaFreeCodeCamp, FaExpandArrowsAlt } from "react-icons/fa"

const MarkdownEditor = () => {

  return (
    <>
      <div className='editorWrap'>
        <div className="toolbar">
          <i className="icon-freecodecamp">
            <FaFreeCodeCamp />
          </i>
            Editor
          <i className="icon-arrows">
            <FaExpandArrowsAlt />
          </i>
        </div>
        <textarea
          id="editor"
        />
      </div>
      <MarkdownPreviewer />
    </>
  )
}

export default MarkdownEditor
