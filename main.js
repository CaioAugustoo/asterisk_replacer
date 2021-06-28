class Replacer {
  constructor() {
    this.input = document.querySelector(".box textarea");
    this.output = document.querySelector(".box #output");

    this.initApp();
  }

  showOutput({ target }) {
    const expectedValue = target.value.replace(
      /[a-zA-Z0-9+()$~%.'"@:?<>{}]/g,
      "*"
    );
    this.output.innerHTML = `Saída: <strong> ${expectedValue} </strong>`;
    this.output.style.opacity = "1";
  }

  inputEvent() {
    this.input.addEventListener("keydown", e => this.showOutput(e));
  }

  initApp() {
    this.inputEvent();
  }
}

new Replacer();
