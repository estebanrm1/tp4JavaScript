const piedra = 0;
const papel = 1;
const tijera = 2;

const empate = 0;
const ganador = 1;
const perdedor = 2;

const piedraBtn = document.getElementById("piedraBoton");
const papelBtn = document.getElementById("papelBoton");
const tijeraBtn = document.getElementById("tijeraBoton");

piedraBtn.addEventListener("click", ()=>{
    juego(piedra);
});

papelBtn.addEventListener("click", ()=>{
    juego(papel);
});

tijeraBtn.addEventListener("click", ()=>{
    juego(tijera);
});

function juego(opcionUsuario){
    const opcionPc = Math.floor(Math.random()*3);
    const resultado = calcResultado(opcionUsuario, opcionPc)
    switch (resultado){
        case empate:
            alert('EMPATE ' + mostrarOpcionPc(opcionPc))
        break;
        case ganador:
            alert('GANADOR ' + mostrarOpcionPc(opcionPc))
        break;
        case perdedor:
            alert('PERDEDOR ' + mostrarOpcionPc(opcionPc))
        break;
    }
}

function calcResultado(opcionUsuario, opcionPc){
    if(opcionUsuario === opcionPc){
        return empate;
    }
    else if(opcionUsuario === piedra){

        if(opcionPc === papel)return perdedor;
        if(opcionPc === tijera)return ganador;

    }else if(opcionUsuario === papel){

        if(opcionPc === piedra)return ganador;
        if(opcionPc === tijera)return perdedor;

    }else if(opcionUsuario === tijera){

        if(opcionPc === piedra)return perdedor;
        if(opcionPc === papel)return ganador;

    }
}

function mostrarOpcionPc(opcionPc){
    switch(opcionPc){
        case 0 :
            return('La PC eligio Piedra');
        break;
        case 1 :
            return('La PC eligio Papel');
        break;
        case 2 :
            return('La PC eligio Tijera');
    }
}