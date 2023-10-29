(() => {
  let components = document.querySelectorAll("[data-include]");
  const renderComponent = async (component) => {
    try {
      const { include } = component.dataset;
      const componentPath = `./components/${include}.html`;
      const getComponent = await fetch(componentPath);
      const convertToHTML = await getComponent.text();
      component.innerHTML = convertToHTML;
    } catch (error) {
      throw new Error("Failed to render component");
    }
  };
  components.forEach(renderComponent);
})();
console.log("hey checking if this is working")