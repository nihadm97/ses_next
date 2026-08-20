import React from "react";
import { paragraphsToRichContent } from "@/lib/rich-content";

const renderRuns = (runs = [], prefix = "run") =>
  runs.map((run, index) => {
    let content = <>{run.text}</>;
    if (run.underline) content = <u>{content}</u>;
    if (run.italic) content = <em>{content}</em>;
    if (run.bold) content = <strong>{content}</strong>;
    const safeHref = /^(https?:\/\/|mailto:|\/(?!\/)|#)/i.test(run.href || "") ? run.href : "";
    if (safeHref) {
      content = (
        <a className="text-lightBlue-600 underline" href={safeHref} target="_blank" rel="noreferrer">
          {content}
        </a>
      );
    }
    return <React.Fragment key={`${prefix}-${index}`}>{content}</React.Fragment>;
  });

export default function RichContent({ blocks, paragraphs }) {
  const safeBlocks = Array.isArray(blocks) && blocks.length
    ? blocks
    : paragraphsToRichContent(paragraphs);

  return safeBlocks.map((block, index) => {
    const key = `block-${index}`;
    if (block.type === "heading") {
      return <h3 key={key} className="mb-4 text-xl font-semibold text-blueGray-700">{renderRuns(block.runs, key)}</h3>;
    }
    if (block.type === "quote") {
      return <blockquote key={key} className="mb-4 border-l-4 border-lightBlue-400 pl-4 italic text-blueGray-600">{renderRuns(block.runs, key)}</blockquote>;
    }
    if (block.type === "ordered-list" || block.type === "unordered-list") {
      const List = block.type === "ordered-list" ? "ol" : "ul";
      return (
        <List key={key} className={`${block.type === "ordered-list" ? "list-decimal" : "list-disc"} mb-4 pl-6 text-left text-blueGray-500`}>
          {(block.items || []).map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{renderRuns(item, `${key}-${itemIndex}`)}</li>
          ))}
        </List>
      );
    }
    return <p key={key} className="mb-4 whitespace-pre-line text-blueGray-500">{renderRuns(block.runs, key)}</p>;
  });
}
