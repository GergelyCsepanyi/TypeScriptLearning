abstract class Button {
  abstract render(): void;
}

class WindowsButton implements Button {
  render(): void {
    console.log("Rendering a Window Button");
  }
}

class MacButton implements Button {
  render(): void {
    console.log("Rendering a Mac Button");
  }
}

abstract class GUIFactory {
  abstract createButton(): Button;
}

class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
}

// Client code

const createUI = (factory: GUIFactory): void => {
  const button = factory.createButton();
  button.render();
};

createUI(new WindowsFactory());
createUI(new MacFactory());
