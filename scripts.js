//Formulário que vai ser enviado
const form = document.querySelector("form");

//Campo de entrada que o usuário vai usar para colocar o CPF
const inputCPF = document.querySelector("#cpf");

//Botão que vai enviar os CPFS
const btn = document.querySelector("#btn-primary");

//Lista dos CPF cadastrados
const cpfList = document.querySelector("#cpf-list");

inputCPF.oninput = () => {
  let value = inputCPF.value.replace(/[^0-9.]/g, "");
  inputCPF.value = value;
};

form.onsubmit = (event) => {
  event.preventDefault();

  //Botando ponto final nos três primeiros digitos
  let startFourDigits = String(inputCPF.value).slice(0, 3);
  let secondyFourDigits = String(inputCPF.value).slice(3, 6);
  let threeFourDigits = String(inputCPF.value).slice(6, 9);
  let lastDigitsCPF = String(inputCPF.value).slice(-2);

  let CPF = [startFourDigits, secondyFourDigits, threeFourDigits];

  let joinner = CPF.join(".");

  let FullCPF = `${joinner}-${lastDigitsCPF}`;

  createCPF(FullCPF);

  inputCPF.value = "";
};

function createCPF(cpf) {
  //Criando uma nova lista
  const li = document.createElement("li");
  li.append(cpf);
  cpfList.append(li);

  li.addEventListener("dblclick", () => {
    li.remove();
  });
}
