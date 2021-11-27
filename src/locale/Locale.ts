import El from "./El";
import En from "./En";
import Lang from "./Lang";

let lang:Lang;

const urlParams = new URLSearchParams(window.location.search);
const lg = urlParams.get('lg')

if(lg=="el"){
  lang = new El();
} else {
  lang = new En();
}

export default lang;