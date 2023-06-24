export function atualizarContador() {
    // Obtenha os elementos <h3> correspondentes aos dias, horas, minutos e segundos
    var diasElement = document.querySelector("#hot-deal .hot-deal-countdown li:nth-child(1) h3");
    var horasElement = document.querySelector("#hot-deal .hot-deal-countdown li:nth-child(2) h3");
    var minutosElement = document.querySelector("#hot-deal .hot-deal-countdown li:nth-child(3) h3");
    var segundosElement = document.querySelector("#hot-deal .hot-deal-countdown li:nth-child(4) h3");

    // Defina a data e a hora de término da oferta
    var dataTerminoOferta = new Date("2023-06-30T23:59:59");

    // Atualize o contador a cada segundo
    setInterval(function() {
      var agora = new Date();
      var diferenca = dataTerminoOferta - agora;

      // Calcule os dias, horas, minutos e segundos restantes
      var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

      // Atualize os elementos HTML com os novos valores
      diasElement.textContent = dias;
      horasElement.textContent = horas;
      minutosElement.textContent = minutos;
      segundosElement.textContent = segundos;
    }, 1000); // 1000 milissegundos = 1 segundo
  }

  // Chame a função para iniciar o contador quando a página for carregada
  window.onload = atualizarContador;