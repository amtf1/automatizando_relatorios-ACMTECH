document.getElementById("empresa").textContent =
localStorage.getItem("empresa");

document.getElementById("linha").textContent =
localStorage.getItem("linha");

document.getElementById("modelo").textContent =
localStorage.getItem("maquina");

document.getElementById("tp").textContent =
localStorage.getItem("tp");

var title = localStorage.getItem("tp") + " - " + localStorage.getItem("maquina");

document.getElementById("title").textContent = title;

switch(localStorage.getItem("maquina")) {
    case "HELLER 1913 MK5.":    
        document.querySelector(".image_capa").src = "images/heller1913mk5.jpg";
        break;
    case "HELLER 1913 MKIII.":
        document.querySelector(".image_capa").src = "images/heller1913mkIII.jpg";
        break;
    case "ERSA VERSAFLOW 3 Selective Soldering System.":
        document.querySelector(".image_capa").src = "images/ersaversaflowss.png";
        break;
    case "WAVE SOLDERING 350PC LF.":
        document.querySelector(".image_capa").src = "images/ws350pclf.png";
        break;
    default:
        document.querySelector(".image_capa").src = "images/default.png"
}   

const hoje = new Date();

const dataFormatada =
hoje.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric"
});

document.getElementById("dataFormatada").textContent =
dataFormatada;
