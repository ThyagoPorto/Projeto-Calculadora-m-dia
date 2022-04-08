function calcularMedia() {
  let nome = document.getElementById("nome").value;
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);
  let nota4 = parseFloat(document.getElementById("nota4").value);
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  let mediaFinal = media.toFixed(1);

  if (media >= 7) {
    document.getElementById("resultado").innerHTML =
      nome + " Parabens sua média é: " + mediaFinal + ", você foi aprovado!";
  } else {
    document.getElementById("resultado").innerHTML =
      nome + " sua média final é: " + mediaFinal + " você foi reprovado!";
  }
}
