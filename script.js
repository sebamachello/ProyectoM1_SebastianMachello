function randomColorHex() {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomHslColor() {

  const h = Math.floor(Math.random() * 360);

const s = Math.floor(Math.random() * 40) + 60;

const l = Math.floor(Math.random() * 40) + 30;

  return `hsl(${h}, ${s}%, ${l}%)`;
}


const button = document.getElementById("generate");


button.addEventListener("click", function() {
  cambiarColores();

  mostrarMensaje();
});

function mostrarMensaje() {

  const mensaje = document.getElementById("mensaje");

  mensaje.textContent = "✅ Paleta Generada";
  mensaje.style.opacity = "1";
  mensaje.style.transform = "translateY(0)";

  function borrarMensaje() {
    mensaje.style.opacity = "0";
    mensaje.style.transform = "translateY(10px)";
  }

  setTimeout(borrarMensaje, 2000);
}


function cambiarColores() {

  const select = document.getElementById("dropdown");
  const cantidad = Number(select.value);
  
  const formato = document.getElementById("formato")
  const tipoColor = formato.value;

  localStorage.setItem("cantidad", cantidad);
localStorage.setItem("formato", tipoColor);
  
  const palette = document.querySelector(".palette");

  palette.innerHTML = "";
  

  for (let i = 0; i < cantidad; i++) {

    let color;

    if (tipoColor === "hex") {
    color = randomColorHex();

  } else {
    color = randomHslColor();
  }

    const box = document.createElement("div");
    box.classList.add("color-box");
    box.style.backgroundColor = color;

    const span = document.createElement("span");
    span.textContent = color;

    box.appendChild(span);
    palette.appendChild(box);

    

  }

  
    
}

const cantidadGuardada = localStorage.getItem("cantidad");
const formatoGuardado = localStorage.getItem("formato");

if (cantidadGuardada) {
  document.getElementById("dropdown").value = cantidadGuardada;
}

if (formatoGuardado) {
  document.getElementById("formato").value = formatoGuardado;
}

cambiarColores();







  



