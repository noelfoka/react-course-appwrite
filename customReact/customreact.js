const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  cheldren: "Click me to visit google"
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);