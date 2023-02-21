const hexadecimal = document.querySelector(".cor");
const btn = document.querySelector(".btn");

const gerarCor = () => {
  const corAleatoria = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + corAleatoria;
  hexadecimal.innerHTML = "#" + corAleatoria;
};

btn.addEventListener("click", gerarCor);

