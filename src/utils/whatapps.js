import iconWhatapp from '../statics/icons/whatsapp.webp';

function Whatasapp() {
  const view = `
 <div id="whatsapp" arial-label="Button to whatapps">
      <a 
        rel="noopener" rel="noreferrer"
        class="appWhatapps"
        href="https://api.whatsapp.com/send?phone=18098298429&text=Hola%20%C2%BFComo%20estas%20Jes%C3%BAs?%20Quer%C3%ADa%20hacerte%20la%20siguiente%20consulta"
        target="_blank"
      >
        <img src="${iconWhatapp}"  width="48px" height="48px" alt="API Whatapps" />
      </a>

      

      </div>
`;
  return view;
}

export default Whatasapp;
