let formato24Horas = true;

const relojDigital = () => {
  let hora = new Date();
  let horas = hora.getHours();
  let minutos = hora.getMinutes();
  let segundos = hora.getSeconds();
  

  if (!formato24Horas) {
    horas = horas % 12 || 12;
  }

  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  let horaActual =
    horas + ":" + minutos + ":" + segundos ;
  document.getElementById("reloj").innerText = horaActual;
};

document.getElementById("formatoHora").addEventListener("click", () => {
  formato24Horas = !formato24Horas;
});

setInterval(relojDigital, 1);
