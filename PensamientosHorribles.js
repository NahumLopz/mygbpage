
setInterval(() => {
    if (document.getElementById("cargandoClase").innerHTML === "Cargando...") {
        document.getElementById("cargandoClase").innerHTML = "Cargando..";
    } else if (document.getElementById("cargandoClase").innerHTML === "Cargando..") {
        document.getElementById("cargandoClase").innerHTML = "Cargando.";
    } else if (document.getElementById("cargandoClase").innerHTML === "Cargando.") {
        document.getElementById("cargandoClase").innerHTML = "Cargando...";
    }
}, 2000);


function nose() {
    if (document.getElementById("cargandoBarraClase").innerHTML.length - 1 >= 0) {

        const cargandoBarra = document.getElementById("cargandoBarraClase").innerHTML.split('');
        cargandoBarra.shift();
        document.getElementById("percentaje").innerHTML = document.getElementById("cargandoBarraClase").innerHTML.length - 1;

        document.getElementById("cargandoBarraClase").innerHTML = cargandoBarra.join('');
    } else {
        document.getElementById("percentaje").innerHTML = "Ups, algo salio mal, espera otros 30 segundos";
        setTimeout(() => {
            document.getElementById("cargandoClase").innerHTML = ":3";
            document.getElementById("percentaje").innerHTML = "Realmente no salio nada mal, solo queria que vieras mi gameplay, si quieres ir a la pagina normal haz click en el gato de abajo";
            document.getElementById("beluga").style.visibility = "visible";
            document.getElementById("beluga").setAttribute("onclick", "window.location.href = 'EstoEsUnaPaginaNormal.html'");
            clearInterval(noseInterval);
        }, 30000);
    }
}
const noseInterval = setInterval(nose, 2000);




const videoElement = document.getElementById("brainRoot");

videoElement.addEventListener("ended", () => {
    const randomValue = Math.random() * 10;
    if (randomValue <= 3.33) {
        videoElement.src = "superHotBrainRoot.mp4";
    } else if (randomValue <= 6.66) {
        videoElement.src = "superHotBrainRoot2.mp4";
    } else {
        videoElement.src = "superHotBrainRoot3.mp4";
    }

    videoElement.play();
});

videoElement.addEventListener("play", () => {
    document.getElementById("music").play();
});
