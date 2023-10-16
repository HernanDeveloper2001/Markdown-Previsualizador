import { marked } from "marked";


function MarkdownPreviewer({handleMarkdownChange, markdown}) {
 
  return (
    <div>
      <div
        className="markdown-preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}

export default MarkdownPreviewer;