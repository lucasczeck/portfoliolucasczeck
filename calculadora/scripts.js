function calculateTip(event) {
event.preventDefault();
let conta = document.getElementById('conta').value;
let serviço = document.getElementById('serviço').value;
let numDePessoas = document.getElementById('pessoas').value;

if(conta == '' | serviço == 0){
    alert('Por favor, preencha os valores')
    return;
  }

  if(numDePessoas == "" | numDePessoas <= 1) {
      numDePessoas = 1;
      document.getElementById('each').style.display = "none";
     } else {
        document.getElementById('each').style.display = "block";
  }

  let total = (conta * serviço) / numDePessoas; 
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('totaltips').style.display = "block";
}

document.getElementById('totaltips').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);