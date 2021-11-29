import El from "./El";
import En from "./En";
import Lang from "./Lang";

let lang:Lang;

const urlParams = new URLSearchParams(window.location.search);
const lg = urlParams.get('lg')

if(lg === "en"){
  lang = new En();
} else {
  lang = new El();  
}

export default lang;