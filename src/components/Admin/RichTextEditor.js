"use client";

import { useEffect, useRef } from "react";
import { htmlToRichContent } from "@/lib/rich-content";

const toolbarButtons = [
  { command: "bold", label: "B", title: "Podebljano", className: "font-bold" },
  { command: "italic", label: "I", title: "Kurziv", className: "italic" },
  { command: "underline", label: "U", title: "Podvučeno", className: "underline" },
  { command: "insertUnorderedList", label: "• Lista", title: "Lista" },
  { command: "insertOrderedList", label: "1. Lista", title: "Numerisana lista" },
];

export default function RichTextEditor({ initialHtml, resetKey, onChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) editorRef.current.innerHTML = initialHtml || "<p><br></p>";
  }, [initialHtml, resetKey]);

  const emitChange = () => {
    const html = editorRef.current?.innerHTML || "";
    onChange({ html, blocks: htmlToRichContent(html) });
  };

  const execute = (command, value = null) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
    emitChange();
  };

  const addLink = () => {
    const value = window.prompt("Unesite punu adresu linka (https://...):");
    if (value) execute("createLink", value);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-blueGray-300 bg-white">
      <div className="flex flex-wrap gap-2 border-b border-blueGray-200 bg-blueGray-50 p-2" role="toolbar" aria-label="Alati za uređivanje teksta">
        {toolbarButtons.map((button) => (
          <button
            key={button.command}
            type="button"
            title={button.title}
            aria-label={button.title}
            className={`rounded border border-blueGray-300 bg-white px-3 py-2 text-sm text-blueGray-700 hover:bg-blueGray-100 ${button.className || ""}`}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => execute(button.command)}
          >
            {button.label}
          </button>
        ))}
        <button type="button" className="rounded border border-blueGray-300 bg-white px-3 py-2 text-sm text-blueGray-700 hover:bg-blueGray-100" onMouseDown={(event) => event.preventDefault()} onClick={() => execute("formatBlock", "h3")}>Naslov</button>
        <button type="button" className="rounded border border-blueGray-300 bg-white px-3 py-2 text-sm text-blueGray-700 hover:bg-blueGray-100" onMouseDown={(event) => event.preventDefault()} onClick={() => execute("formatBlock", "p")}>Paragraf</button>
        <button type="button" className="rounded border border-blueGray-300 bg-white px-3 py-2 text-sm text-blueGray-700 hover:bg-blueGray-100" onMouseDown={(event) => event.preventDefault()} onClick={addLink}>Link</button>
        <button type="button" className="rounded border border-blueGray-300 bg-white px-3 py-2 text-sm text-blueGray-700 hover:bg-blueGray-100" onMouseDown={(event) => event.preventDefault()} onClick={() => execute("removeFormat")}>Očisti format</button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="min-h-72 px-4 py-3 text-left leading-relaxed text-blueGray-700 outline-none [&_a]:text-lightBlue-600 [&_a]:underline [&_h3]:text-xl [&_h3]:font-semibold [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6"
        aria-label="Tekst objave"
        onInput={emitChange}
        onBlur={emitChange}
      />
      <p className="border-t border-blueGray-200 bg-blueGray-50 px-3 py-2 text-xs text-blueGray-500">
        Kopirani podebljani i kurzivni dijelovi ostaju formatirani. Označite dio teksta pa koristite alat iznad.
      </p>
    </div>
  );
}
