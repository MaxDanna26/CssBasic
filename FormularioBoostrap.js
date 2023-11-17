var durationInput = document.getElementById('Duration');
var btnVer = document.getElementById('btnVer');

    function disminuirNumero() {
        var numero = parseInt(durationInput.value);
        if (numero > parseInt(durationInput.min)) {
            durationInput.value = numero - 1;
        }
    }


    function aumentarNumero() {
        var numero = parseInt(durationInput.value);
        if (numero < parseInt(durationInput.max)) {
            durationInput.value = numero + 1;
        }
    }
    
    function mostrarForm(){
        btnVer.addEventListener("click",function() {btnVer.classList.add("hidden");}) 
    }

    