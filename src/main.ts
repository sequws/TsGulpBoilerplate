import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
  const elem = document.getElementById(divName);
  elem.innerText = sayHello(name);
}

showHello("elemid", "TypeScript");