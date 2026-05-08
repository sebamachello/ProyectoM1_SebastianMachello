function randomColor() {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const button = document.getElementById("generate");


button.addEventListener("click", cambiarColores);


function cambiarColores() {
  const select = document.getElementById("dropdown");
  const cantidad = Number(select.value);

  const palette = document.querySelector(".palette");

  palette.innerHTML = "";

  for (let i = 0; i < cantidad; i++) {
    const color = randomColor();

    const box = document.createElement("div");
    box.classList.add("color-box");
    box.style.backgroundColor = color;

    const span = document.createElement("span");
    span.textContent = color;

    box.appendChild(span);
    palette.appendChild(box);

  }


    const mensaje = document.getElementById("mensaje");
    
    mensaje.textContent = "Paleta Generada";
    mensaje.style.opacity = "1";

    function borrarMensaje() {
    mensaje.textContent = "";
    }
    setTimeout(borrarMensaje, 2000);
    
}


  



