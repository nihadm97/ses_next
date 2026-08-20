const EMPTY_PARAGRAPH = { type: "paragraph", runs: [{ text: "" }] };

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const safeHref = (value = "") => {
  const href = String(value).trim();
  return /^(https?:\/\/|mailto:|\/(?!\/)|#)/i.test(href) ? href : "";
};

const sameMarks = (left, right) =>
  Boolean(left.bold) === Boolean(right.bold) &&
  Boolean(left.italic) === Boolean(right.italic) &&
  Boolean(left.underline) === Boolean(right.underline) &&
  (left.href || "") === (right.href || "");

const mergeRuns = (runs) => {
  const merged = [];
  runs.forEach((run) => {
    if (!run.text) return;
    const previous = merged.at(-1);
    if (previous && sameMarks(previous, run)) {
      previous.text += run.text;
    } else {
      merged.push({ ...run });
    }
  });
  return merged.length ? merged : [{ text: "" }];
};

const marksForElement = (element, inherited) => {
  const tag = element.tagName.toLowerCase();
  const fontWeight = element.style?.fontWeight || "";
  const textDecoration = element.style?.textDecoration || "";
  return {
    ...inherited,
    bold:
      inherited.bold ||
      tag === "b" ||
      tag === "strong" ||
      fontWeight === "bold" ||
      fontWeight === "bolder" ||
      Number.parseInt(fontWeight, 10) >= 600,
    italic:
      inherited.italic ||
      tag === "i" ||
      tag === "em" ||
      element.style?.fontStyle === "italic",
    underline:
      inherited.underline ||
      tag === "u" ||
      textDecoration.includes("underline"),
    href: tag === "a" ? safeHref(element.getAttribute("href")) : (inherited.href || ""),
  };
};

const collectRuns = (node, inherited = {}) => {
  if (node.nodeType === Node.TEXT_NODE) {
    return [{ text: node.textContent || "", ...inherited }];
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return [];
  if (node.tagName.toLowerCase() === "br") {
    return [{ text: "\n", ...inherited }];
  }
  const marks = marksForElement(node, inherited);
  return Array.from(node.childNodes).flatMap((child) => collectRuns(child, marks));
};

const elementToBlock = (element) => {
  const tag = element.tagName.toLowerCase();
  if (tag === "ul" || tag === "ol") {
    const items = Array.from(element.children)
      .filter((child) => child.tagName.toLowerCase() === "li")
      .map((child) => mergeRuns(collectRuns(child)));
    return items.length
      ? { type: tag === "ol" ? "ordered-list" : "unordered-list", items }
      : null;
  }

  const runs = mergeRuns(collectRuns(element));
  if (/^h[1-6]$/.test(tag)) {
    return { type: "heading", level: Math.min(Number(tag[1]), 4), runs };
  }
  if (tag === "blockquote") return { type: "quote", runs };
  return { type: "paragraph", runs };
};

export const htmlToRichContent = (html = "") => {
  if (typeof DOMParser === "undefined") return [EMPTY_PARAGRAPH];
  const documentNode = new DOMParser().parseFromString(
    `<div>${html}</div>`,
    "text/html"
  );
  const root = documentNode.body.firstElementChild;
  if (!root) return [EMPTY_PARAGRAPH];

  const blocks = [];
  Array.from(root.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent?.trim()) {
        blocks.push({ type: "paragraph", runs: mergeRuns(collectRuns(node)) });
      }
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const block = elementToBlock(node);
    if (block) blocks.push(block);
  });
  return blocks.length ? blocks : [EMPTY_PARAGRAPH];
};

const runToHtml = (run) => {
  let value = escapeHtml(run.text).replaceAll("\n", "<br>");
  if (run.underline) value = `<u>${value}</u>`;
  if (run.italic) value = `<em>${value}</em>`;
  if (run.bold) value = `<strong>${value}</strong>`;
  const href = safeHref(run.href);
  if (href) value = `<a href="${escapeHtml(href)}">${value}</a>`;
  return value;
};

const runsToHtml = (runs = []) => runs.map(runToHtml).join("");

export const richContentToHtml = (blocks = []) =>
  blocks
    .map((block) => {
      if (block.type === "heading") {
        const level = Math.min(Math.max(Number(block.level) || 2, 1), 4);
        return `<h${level}>${runsToHtml(block.runs)}</h${level}>`;
      }
      if (block.type === "quote") {
        return `<blockquote>${runsToHtml(block.runs)}</blockquote>`;
      }
      if (block.type === "ordered-list" || block.type === "unordered-list") {
        const tag = block.type === "ordered-list" ? "ol" : "ul";
        return `<${tag}>${(block.items || [])
          .map((item) => `<li>${runsToHtml(item)}</li>`)
          .join("")}</${tag}>`;
      }
      return `<p>${runsToHtml(block.runs)}</p>`;
    })
    .join("");

export const paragraphsToRichContent = (paragraphs = []) => {
  const values = Array.isArray(paragraphs) ? paragraphs : [paragraphs];
  const blocks = values
    .filter((value) => typeof value === "string" && value.trim())
    .map((value) => ({ type: "paragraph", runs: [{ text: value }] }));
  return blocks.length ? blocks : [EMPTY_PARAGRAPH];
};

export const richContentToParagraphs = (blocks = []) =>
  blocks
    .flatMap((block) => {
      if (block.items) {
        return block.items.map((item) => item.map((run) => run.text).join(""));
      }
      return [(block.runs || []).map((run) => run.text).join("")];
    })
    .map((value) => value.trim())
    .filter(Boolean);
