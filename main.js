const elementoResultado1 = document.querySelector('#resultado1')
const elementoResultado2 = document.querySelector('#resultado2')

const buttonJogar = document.querySelector("#buttonJogar")

const resultados = ['1','2','3','4','5','6']


function jogarDados() {

  buttonJogar.setAttribute("disabled", true)

  const totalResultados1 = resultados.length
  const numeroAleatorio1 = Math.floor(Math.random() * totalResultados1)
  
  const totalResultados2 = resultados.length
  const numeroAleatorio2 = Math.floor(Math.random() * totalResultados2)

  elementoResultado1.innerHTML = resultados[numeroAleatorio1]
  elementoResultado2.innerHTML = resultados[numeroAleatorio2]

  elementoResultado1.style.opacity = 1;
  elementoResultado2.style.opacity = 1;

  setTimeout(function(){
    elementoResultado1.style.opacity = 0;
    elementoResultado2.style.opacity = 0;
    buttonJogar.removeAttribute("disabled")
  }, 2000)
}