import "../css/index.css";
import search from "./search";
import render from "./render";

const id = prompt("¿Quién es el pokemón?");

search(id)
  .then(data => {
    render(data);
  })
  .catch(() => {
    console.log("no hubo pokemón.");
  });
