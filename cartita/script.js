$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var audio = $("#loveSong")[0]; // Seleccionamos el audio
    audio.volume = 0.1; // Ajustamos el volumen al 50%

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        $(".words.line1").html("<p>QUERIA RECORDARTE LO MUCHO QUE TE AMO MI NIÑA SAORY :3 💖</p>");
        audio.play(); // Reproducir la canción
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        $(".words").text("");
        audio.pause(); // Pausar la canción
        audio.currentTime = 0; // Reiniciar la canción
    }
});
