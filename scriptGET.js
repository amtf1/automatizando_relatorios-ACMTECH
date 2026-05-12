document.getElementById("formRelatorio").addEventListener("submit", function(event) {
    event.preventDefault();
    var empresa = document.getElementById("empresa").value;
    var linha = document.getElementById("linha").value;
    var tp = document.getElementById("tp-servico").value
    var maquina = document.getElementById("maquina").value;

    localStorage.setItem("empresa", empresa);
    localStorage.setItem("linha", linha);
    localStorage.setItem("tp", tp);
    localStorage.setItem("maquina", maquina);

    window.location.href = "template.html";
});