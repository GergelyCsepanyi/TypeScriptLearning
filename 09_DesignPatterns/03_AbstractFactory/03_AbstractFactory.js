"use strict";
class Button {}
class WindowsButton {
  render() {
    console.log("Rendering a Window Button");
  }
}
class MacButton {
  render() {
    console.log("Rendering a Mac Button");
  }
}
class GUIFactory {}
class WindowsFactory {
  createButton() {
    return new WindowsButton();
  }
}
class MacFactory {
  createButton() {
    return new MacButton();
  }
}
// Client code
const createUI = (factory) => {
  const button = factory.createButton();
  button.render();
};

createUI(new WindowsFactory());
createUI(new MacFactory());
