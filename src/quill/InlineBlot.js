const InlineBlot = Quill.import("blots/inline");

class NamedLinkBlot extends InlineBlot {
  static create(value) {
    const node = super.create(value);

    node.setAttribute("href", value);
    node.setAttribute("target", "_blank");
    return node;
  }
}
NamedLinkBlot.blotName = "namedlink";
NamedLinkBlot.tagName = "A";

Quill.register("formats/namedlink", NamedLinkBlot);

const Tooltip = Quill.import("ui/tooltip");

class NamedLinkTooltip extends Tooltip {
  show() {
    super.show();
    this.root.classList.add("ql-editing");
  }
}

NamedLinkTooltip.TEMPLATE = [
  '<a class="ql-preview" target="_blank" href="about:blank"></a>',
  '<input type="text" data-link="https://quilljs.com">',
  '<input type="text" data-name="Link name">',
  '<a class="ql-action"></a>',
  '<a class="ql-remove"></a>'
].join("");

const QuillModule = Quill.import("core/module");

class NamedLinkModule extends QuillModule {
  constructor(quill, options) {
    super(quill, options);
    this.tooltip = new NamedLinkTooltip(this.quill, options.bounds);
    this.quill
      .getModule("toolbar")
      .addHandler("namedlink", this.namedLinkHandler.bind(this));
  }

  namedLinkHandler(value) {
    if (value) {
      var range = this.quill.getSelection();
      if (range == null || range.length === 0) return;
      var preview = this.quill.getText(range);
      this.tooltip.show();
    }
  }
}

Quill.register("modules/namedlink", NamedLinkModule);

const quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    namedlink: {},
    toolbar: {
      container: ["bold", "link", "namedlink"]
    }
  }
});
