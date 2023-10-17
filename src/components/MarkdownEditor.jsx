import MarkdownPreviewer from "./MarkdownPreviewer";
import "../styles/MarkdownEditor.scss";
import { FaFreeCodeCamp, FaExpandArrowsAlt,FaCompressAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { updateData } from "../features/data-markdown/dataMarkdown";
import { useState } from "react";

const MarkdownEditor = () => {


  const dataMarkdown = useSelector(state => state.dataMarkdown);
  const dataDispatch = useDispatch()

  const [activeMarkdown1, setActiveMarkdown1] = useState(false);
  const [activeMarkdown2, setActiveMarkdown2] = useState(false);

  function onActiveMarkdown(id){
   if(id === "1" ){
    setActiveMarkdown1(!activeMarkdown1);
    console.log(id)
   }else if(id === "2"){
    setActiveMarkdown2(!activeMarkdown2)
    console.log(id)
   }
  }

  function handleDataMarkdown({target}) {
    const { value } = target;
    dataDispatch(updateData(value))
  }

  return (
    <>
      <div className="editorWrap" id={activeMarkdown2 ? "hidden" : null}>
        <div className="contenedorEditor" >
          <div className="toolbar">
            <i className="icon-freecodecamp">
              <FaFreeCodeCamp />
            </i>
              Editor
            <i 
              className="icon-arrows" 
              onClick={() => onActiveMarkdown("1")}>
              {
                activeMarkdown1 
                ? <FaCompressAlt />
                : <FaExpandArrowsAlt />
              }
            </i>
          </div>
          <textarea
            id={activeMarkdown1?"maximized": "editor"}
            value={dataMarkdown}
            onChange={handleDataMarkdown}
          />
        </div>
      </div>
      <MarkdownPreviewer 
        dataMarkdown={dataMarkdown}
        activeMarkdown2={activeMarkdown2}
        onActiveMarkdown={onActiveMarkdown} 
        activeMarkdown1={activeMarkdown1} />
    </>
  )
}


export default MarkdownEditor
