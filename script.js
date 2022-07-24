const valores = new Array();
valores["um"] = 20;
valores["dois"] = 25;
valores["tres"] = 35;
valores["quatro"] = 75;

const valores_recheios = new Array();
valores_recheios["Amendoin"] = 3;
valores_recheios["Nutella"] = 5;
valores_recheios["Brigadeiro"] = 7;
valores_recheios["Banana"] = 8;
valores_recheios["Morango"] = 10;
valores_recheios["Granola"] = 5;

function getpreco() {
  let acaipreco = 0;
  let theForm = document.forms["acaiform"];

  let selectedacai = theForm.elements["selectedacai"];

  for (var i = 0; i < selectedacai.length; i++) {
    if (selectedacai[i].checked) {
      acaipreco = valores[selectedacai[i].value];

      break;
    }
  }

  return acaipreco;
}

function getFillingPrice() {
  let cakeFillingPrice = 0;

  let theForm = document.forms["acaiform"];

  let selectedFilling = theForm.elements["Recheio"];

  cakeFillingPrice = valores_recheios[selectedFilling.value];

  return cakeFillingPrice;
}

function leite() {
  let condensadoPreco = 0;

  let theForm = document.forms["acaiform"];

  let condensado = theForm.elements["condensado"];

  if (condensado.checked == true) {
    condensadoPreco = 5;
  }

  return condensadoPreco;
}

function ninho() {
  let ninhoPreco = 0;

  let theForm = document.forms["acaiform"];

  let ninho = theForm.elements["ninho"];

  if (ninho.checked == true) {
    ninhoPreco = 1;
  }

  return ninhoPreco;
}

function calculateTotal() {
  let precoFinal = getpreco() + getFillingPrice() + leite() + ninho();

  let divobj = document.getElementById("totalPrice");

  divobj.style.display = "block";
  divobj.innerHTML = `Preço Total R$${precoFinal}`;
}

function hideTotal() {
  let divobj = document.getElementById("totalPrice");
  divobj.style.display = "none";
}

function clicarAlerta() {
  let alerta = document.getElementById("submit");
  let nome = document.getElementById("nome").value;
  let lista = document.querySelectorAll("#nome, #endereço, #telefone");
  for (var i = 0; i < lista.length; ++i) {
    if (lista[i].value == 0) {
      alert("Preencha os campos de seu contato.");

      evt.preventDefault();
    } else {
      alert(`Pedido de ${nome} foi criado com sucesso!`);
      window.location.href = "index.html";
    }
  }
}
