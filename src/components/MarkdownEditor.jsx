import MarkdownPreviewer from "./MarkdownPreviewer"
import { useState } from "react";
const MarkdownEditor = () => {

  const initialMarkdown = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
    There's also [links](https://www...`;
  
    const [markdown, setMarkdown] = useState(initialMarkdown);
  
    const handleMarkdownChange = (event) => {
      setMarkdown(event.target.value);
    };
  return (
    <>
    <div className='editorWrap'>
      <textarea
        value={markdown}
        onChange={handleMarkdownChange}
        rows={10}
        cols={30}
      />
    </div>
    <MarkdownPreviewer 
      markdown={markdown}
      handleMarkdownChange={handleMarkdownChange} />
    </>
  )
}

export default MarkdownEditor
