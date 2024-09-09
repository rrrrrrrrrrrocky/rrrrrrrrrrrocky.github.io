import { Marked, marked, RendererObject } from "marked";
import Prism from "prismjs";

// import loadLanguages from "prismjs/components";
import DOMPurify from "dompurify";

// loadLanguages(["bash", "sql"]);

// import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
// import hljs from "highlight.js";

// or UMD script
// <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/marked-highlight/lib/index.umd.js"></script>
// const {markedHighlight} = globalThis.markedHighlight;

const commonMarkedSettings = () => {
  // supported-languages: https://prismjs.com/#supported-languages

  console.log("loadLanguages >>", Prism.languages);
  const renderer: RendererObject = {
    code({ text, lang }) {
      const language = lang || "";
      try {
        if (Prism.languages[language]) {
          return `<pre class="language-${language}"><code class="language-${language}">${Prism.highlight(text, Prism.languages[language], language)}</code></pre>`;
        } else {
          // Handle unsupported language gracefully
          console.warn(`Unsupported language: ${language}`);
          return `<pre><code>${text}</code></pre>`; // Basic code display
        }
      } catch (err) {
        console.error(`Error highlighting code: ${err}`);
        return false; // Or handle the error differently
      }
    },
  };

  marked.use({ renderer });

  // const marked = new Marked(
  //   markedHighlight({
  //     langPrefix: "hljs language-",
  //     highlight(code, lang, info) {
  //       const language = hljs.getLanguage(lang) ? lang : "plaintext";
  //       return hljs.highlight(code, { language }).value;
  //     },
  //   })
  // );

  return marked;
};

export const markedClientParse = (value: string) => {
  commonMarkedSettings();

  const htmlString = marked.parse(value);

  return DOMPurify.sanitize(htmlString as string);
};
