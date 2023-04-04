let auto ={
    color:'Verde',
    marca:'Peugeot',
    modelo:405,
    encender:function(){
        document.write('<p>El auto esta encendido</p>');
    },
    apagar:function(){
        document.write('<p>El auto se apagó</p>');
    }
}

auto.encender();
auto.apagar();