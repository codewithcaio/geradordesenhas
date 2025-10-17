let senhaGerada = "";

function gerarSenha(event) {
  event.preventDefault();

  const tamanho = parseInt(document.getElementById("tam").value);
  const usaMaiusculas = document.getElementById("maiusculas").checked;
  const usaNumeros = document.getElementById("numeros").checked;
  const usaSimbolos = document.getElementById("simbolos").checked;

  if (tamanho < 6 || tamanho > 32) {
    alert("Por favor, insira um tamanho entre 6 e 32.");
    return;
  }

  let caracteres = "abcdefghijklmnopqrstuvwxyz";
  if (usaMaiusculas) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (usaNumeros) caracteres += "0123456789";
  if (usaSimbolos) caracteres += "!-.,?";

  senhaGerada = "";
  for (let i = 0; i < tamanho; i++) {
    senhaGerada += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  document.getElementById("resultado").textContent = senhaGerada;
}

// Adiciona listener ao carregar a página
window.onload = function () {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.addEventListener("click", function () {
    if (senhaGerada) {
      navigator.clipboard.writeText(senhaGerada);
      alert("Senha copiada para a área de transferência!");
    }
  });
};
