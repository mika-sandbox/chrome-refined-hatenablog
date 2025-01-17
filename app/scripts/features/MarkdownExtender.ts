import Prism from "prismjs";
import "prismjs/components/prism-abap";
import "prismjs/components/prism-actionscript";
import "prismjs/components/prism-ada";
import "prismjs/components/prism-apacheconf";
import "prismjs/components/prism-apl";
import "prismjs/components/prism-applescript";
// import "prismjs/components/prism-arduino";
import "prismjs/components/prism-arff";
import "prismjs/components/prism-asciidoc";
import "prismjs/components/prism-asm6502";
import "prismjs/components/prism-aspnet";
import "prismjs/components/prism-autohotkey";
import "prismjs/components/prism-autoit";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-basic";
import "prismjs/components/prism-batch";
// import "prismjs/components/prism-bison";
import "prismjs/components/prism-brainfuck";
import "prismjs/components/prism-bro";
import "prismjs/components/prism-c";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-coffeescript";
import "prismjs/components/prism-clojure";
// import "prismjs/components/prism-crystal";
import "prismjs/components/prism-csp";
import "prismjs/components/prism-css-extras";
import "prismjs/components/prism-d";
import "prismjs/components/prism-dart";
import "prismjs/components/prism-diff";
// import "prismjs/components/prism-django";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-eiffel";
import "prismjs/components/prism-elixir";
import "prismjs/components/prism-elm";
import "prismjs/components/prism-erb";
import "prismjs/components/prism-erlang";
import "prismjs/components/prism-fsharp";
import "prismjs/components/prism-flow";
import "prismjs/components/prism-fortran";
import "prismjs/components/prism-gedcom";
import "prismjs/components/prism-gherkin";
import "prismjs/components/prism-git";
import "prismjs/components/prism-glsl";
import "prismjs/components/prism-go";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-groovy";
import "prismjs/components/prism-haml";
import "prismjs/components/prism-handlebars";
import "prismjs/components/prism-haskell";
import "prismjs/components/prism-haxe";
import "prismjs/components/prism-http";
import "prismjs/components/prism-hpkp";
import "prismjs/components/prism-hsts";
import "prismjs/components/prism-ichigojam";
import "prismjs/components/prism-icon";
import "prismjs/components/prism-inform7";
import "prismjs/components/prism-ini";
import "prismjs/components/prism-io";
import "prismjs/components/prism-j";
import "prismjs/components/prism-java";
import "prismjs/components/prism-jolie";
import "prismjs/components/prism-json";
import "prismjs/components/prism-julia";
import "prismjs/components/prism-keyman";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-latex";
import "prismjs/components/prism-less";
import "prismjs/components/prism-liquid";
import "prismjs/components/prism-lisp";
import "prismjs/components/prism-livescript";
import "prismjs/components/prism-lolcode";
import "prismjs/components/prism-lua";
import "prismjs/components/prism-makefile";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-matlab";
import "prismjs/components/prism-mel";
import "prismjs/components/prism-mizar";
import "prismjs/components/prism-monkey";
import "prismjs/components/prism-n4js";
import "prismjs/components/prism-nasm";
import "prismjs/components/prism-nginx";
import "prismjs/components/prism-nim";
import "prismjs/components/prism-nix";
import "prismjs/components/prism-nsis";
import "prismjs/components/prism-objectivec";
import "prismjs/components/prism-ocaml";
import "prismjs/components/prism-opencl";
import "prismjs/components/prism-oz";
import "prismjs/components/prism-parigp";
import "prismjs/components/prism-parser";
import "prismjs/components/prism-pascal";
import "prismjs/components/prism-perl";
import "prismjs/components/prism-php";
import "prismjs/components/prism-php-extras";
// import "prismjs/components/prism-plsql";
import "prismjs/components/prism-powershell";
import "prismjs/components/prism-processing";
import "prismjs/components/prism-prolog";
import "prismjs/components/prism-properties";
import "prismjs/components/prism-protobuf";
import "prismjs/components/prism-pug";
import "prismjs/components/prism-puppet";
import "prismjs/components/prism-pure";
import "prismjs/components/prism-python";
import "prismjs/components/prism-q";
import "prismjs/components/prism-qore";
import "prismjs/components/prism-r";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-renpy";
import "prismjs/components/prism-reason";
import "prismjs/components/prism-rest";
import "prismjs/components/prism-rip";
import "prismjs/components/prism-roboconf";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-sas";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-scala";
import "prismjs/components/prism-scheme";
import "prismjs/components/prism-smalltalk";
import "prismjs/components/prism-smarty";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-soy";
import "prismjs/components/prism-stylus";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-tap";
import "prismjs/components/prism-tcl";
import "prismjs/components/prism-textile";
import "prismjs/components/prism-tt2";
import "prismjs/components/prism-twig";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-vbnet";
import "prismjs/components/prism-velocity";
import "prismjs/components/prism-verilog";
import "prismjs/components/prism-vhdl";
import "prismjs/components/prism-vim";
import "prismjs/components/prism-visual-basic";
import "prismjs/components/prism-wasm";
import "prismjs/components/prism-wiki";
import "prismjs/components/prism-xeora";
import "prismjs/components/prism-xojo";
import "prismjs/components/prism-xquery";
import "prismjs/components/prism-yaml";

export class MarkdownExtender {
  private readonly editorClass: string;

  private readonly editor: HTMLTextAreaElement;

  private isEditing: boolean;

  public constructor(editorClass: string) {
    this.editorClass = editorClass;
    this.editor = document.querySelector(this.editorClass) as HTMLTextAreaElement;
    this.isEditing = false;
  }

  public connect(): void {
    if (!this.editor) {
      console.error("could not found textarea editor");
      return;
    }

    this.editor.addEventListener("input", this.onTextChanged.bind(this));
  }

  private onTextChanged(_event: Event): void {
    if (this.isEditing) return;

    this.isEditing = true;
    const body = this.editor.value;
    const matches = body.match(/<!-- codegen:.*?[\s\S.]*?-->/gis);
    if (!matches) {
      this.isEditing = false;
      return;
    }

    const pos = this.editor.selectionStart;

    let content = this.cleanupGenerated(body);

    const pickLanguage = (line: string) => {
      const match = /codegen:(.*)/.exec(line);
      return match ? match[1] : "plain";
    };

    const highlights = matches.map(match => {
      const lines = match.split("\n");

      const language = pickLanguage(lines[0]);
      const contents = lines.slice(1, lines.length - 1);

      if (Prism.languages[language]) {
        const highlight = Prism.highlight(contents.join("\n"), Prism.languages[language], language);

        return {
          original: match,
          highlight: `<pre class="language-typescript "><code class="language-typescript">${highlight}</code></pre>`
        };
      }

      return { original: match, highlight: "" };
    });

    highlights.forEach(highlight => {
      const replaceTo = `${highlight.original}
<!-- AUTO_GENERATED_START -->
<!-- DO NOT EDIT BELOW CONTENTS DIRECTLY (REPLACED WHEN UPDATED CONTENT) -->
${highlight.highlight}
<!-- AUTO_GENERATED_END -->`;
      content = content.replace(highlight.original, replaceTo);
    });

    this.editor.value = content;
    this.editor.selectionStart = pos;
    this.editor.selectionEnd = pos;
    this.isEditing = false;
  }

  /**
   * Remove auto-generated (from AUTO_GENERATED_START to AUTO_GENERATED_END) block from document
   */
  // eslint-disable-next-line class-methods-use-this
  private cleanupGenerated(body: string): string {
    const regex = /<!-- AUTO_GENERATED_START -->[\s\S.]*?<!-- AUTO_GENERATED_END -->/gis;
    const matches = body.match(regex);
    if (!matches) {
      return body;
    }

    let replaced = body;
    matches.forEach(w => {
      replaced = replaced.split(`${w}\n`).join("");
    });

    return replaced;
  }
}
