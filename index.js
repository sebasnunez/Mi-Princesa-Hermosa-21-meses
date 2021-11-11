function playOn(){
    var boton1 = document.getElementById('boton1');
    padre = boton1.parentNode;
    padre.removeChild(boton1);
    var texto = document.getElementById('texto');
    texto.setAttribute('visible','true');
    texto.setAttribute('animation','property: position; to: 0 52 -10; dur: 80000; easing: linear; autoplay:true;');
    setTimeout(function(){
    var boton2 = document.getElementById('boton2');
    boton2.setAttribute('visible', 'true');
    }
    ,80000);
}
function inicio(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if(yyyy==2021){
        if(dd>=11&&mm>=11){
            empezar();
        }
        else{
            var textoEspera = document.getElementById('textoEspera');
            textoEspera.setAttribute('visible','true');
            var esperando = document.getElementById('esperando');
            esperando.setAttribute('visible','true');
        }
    }
    else{
        empezar();
    }
}
function toModel(){
    window.location.href = './model.html';
}
function regresar(){
    window.location.href = './';
}

function empezar(){
    var camara = document.getElementById('cam');
    camara.setAttribute('sound', 'src: #s1; autoplay: true');
    var textoEspera = document.getElementById('textoEspera');
    padre1 = textoEspera.parentNode;
    padre1.removeChild(textoEspera);
    var esperando = document.getElementById('esperando');
    padre2 = esperando.parentNode;
    padre2.removeChild(esperando);
    var boton1 = document.getElementById('boton1');
    boton1.setAttribute('visible','true');
    boton1.setAttribute('onclick','playOn()');
    var cielo = document.getElementById('cielo');
    cielo.setAttribute('src', '#c1');
    cielo.setAttribute('color', 'white');
}

