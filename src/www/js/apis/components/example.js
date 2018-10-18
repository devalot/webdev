/******************************************************************************/
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements

// <<: autonomous-elements
class HelloAutonomous extends HTMLElement {
  constructor() {
    super();
    this.textContent = "Hello World";
  }
}

customElements.define("hello-autonomous", HelloAutonomous);
// :>>

// <<: customized-elements
class HelloCustomized extends HTMLParagraphElement {
  constructor() {
    super();
    this.textContent = "Hello World";
  }
}

customElements.define("hello-customized", HelloCustomized, {extends: "p"});
// :>>

/******************************************************************************/
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM
class HelloShadow extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'})

    let style = document.createElement("style");
    style.textContent = "p { color: red; }";
    shadowRoot.appendChild(style);

    let p = document.createElement("p");
    p.textContent = "Hello World in red!";
    shadowRoot.appendChild(p);
  }
}

customElements.define("hello-shadow", HelloShadow);

/******************************************************************************/
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots
class HelloTemplate extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById("with-name");
    const shadowRoot = this.attachShadow({mode: 'open'})

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("hello-template", HelloTemplate);
