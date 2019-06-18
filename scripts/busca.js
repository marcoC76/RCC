var obj;
var salida = '';
var valor;
var appi = "https://script.googleusercontent.com/macros/echo?user_content_key=F50kUuixg_1_YNRBwi-XJB9Irsas9MzbLt4HIRZSSQW6mLPfwDXhVX1mvQ0tFXI9qN3e22ahv33gsDNlgmxmCNfjzRWAR42Hm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH7FvHuoCA3aY6oYh_uPeR7OGIv6mE7OArfLpHEi2SkZG7auUhcX8GvYge8pF1VBKFasVhBWVkFc&lib=MlfAK7sYzDUKhAPiLWJ3BQCiYTb7JmIRw";
ft(appi);
window.onload = inicio;

function inicio() {
    localStorage.setItem("mundo", 1);
    if (navigator.onLine) {
        // el navegador está conectado a la red
    } else {
        // el navegador NO está conectado a la red
        console.log("No hay internet");
        var internet = `
                          <div onclick="conexion();" class="conexion">
                            <span  class="white-text" style="font-size:1.2em;">
                                SIN CONEXIÓN
                            </span>
                          </div>
                    `;
        document.getElementById("footer").innerHTML = internet;
    }
}
function cambiaMundo(num) {
    var mundo = num;
    localStorage.setItem("mundo", mundo);
    if (localStorage.getItem("mundo") == 1) {
        console.log(localStorage.getItem("mundo"));
        document.body.className = 'fondo1';
        appi = "https://script.googleusercontent.com/macros/echo?user_content_key=F50kUuixg_1_YNRBwi-XJB9Irsas9MzbLt4HIRZSSQW6mLPfwDXhVX1mvQ0tFXI9qN3e22ahv33gsDNlgmxmCNfjzRWAR42Hm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH7FvHuoCA3aY6oYh_uPeR7OGIv6mE7OArfLpHEi2SkZG7auUhcX8GvYge8pF1VBKFasVhBWVkFc&lib=MlfAK7sYzDUKhAPiLWJ3BQCiYTb7JmIRw";
        ft(appi);
        document.getElementById("resultado").innerHTML = `                                                    
                                                            <div class="card">
                                                                <br>
                                                                <h1>
                                                                    Ingresa un ID valido
                                                                </h1>
                                                            </div>
                                                        `;
        limpiar();
    } else if (localStorage.getItem("mundo") == 2) {
        limpiar();
        console.log(localStorage.getItem("mundo"));
        document.body.className = 'fondo2';        
        appi = "https://script.google.com/macros/s/AKfycby_mP3ow6lHHhp5KoZ2cp-JvapWOc6bCEDHQqEdko2k9D1Y-ali/exec";
        ft(appi);
        document.getElementById("resultado").innerHTML = `
                                                            <div class="card">
                                                                <br>
                                                                <h1>
                                                                    Ingresa un ID valido
                                                                </h1>
                                                            </div>
                                                        `;
    } else if (localStorage.getItem("mundo") == 3) {
        limpiar();
        console.log(localStorage.getItem("mundo"));
        document.body.className = 'fondo3';       
        appi = "https://script.google.com/macros/s/AKfycbwh4AaAthKZ9R9n0aaYdXa4GnINTOWVImp1s9C5U6ZifKUBw6o2/exec";
        ft(appi);
        document.getElementById("resultado").innerHTML = `
                                                            <div class="card">
                                                                <br>
                                                                <h1>
                                                                    Ingresa un ID valido
                                                                </h1>
                                                            </div>
                                                        `;
    }
}

function ft(appi) {

    fetch(appi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            obj = data;

            console.log(obj);
            localStorage.setItem("obj", JSON.stringify(obj));
        })
        .catch(function (err) {
            console.error(err);
        });

}
setInterval('ft(appi)', 60000);


function recibir() {
    valor = document.getElementById("texto").value;
    localStorage.setItem("id", valor);
    var newArray = obj.filter(function (el) {
        return (el.ID === localStorage.getItem("id"));
    });
    console.log(newArray);
    salida = `
    <div  class="card">
                <h2 onclick="clanInfo();" class="name ">
                    ${newArray[0].EQUIPO}
                
                </h2>

                <div onclick="mundoInfo();" id="mundoActual" class="cost">Mundo ${localStorage.getItem("mundo")}
                </div>



                <div class="image">
                    <img id="avatar" src="" width="100%">
                </div>
                <div class="nick" style="color:white; text-align:center;font-size: 1.5em;">
                ${newArray[0].NICK}
               
                </div>
                <br>

                <div class="flavor-text">
                    <center id="descripcion">
                    
                    </center>
                </div>
                <br>
                <ul class="abilities insignias" >
                    <span style="font-size:1em;">Habilidades:</span><hr>
                    <li id="habilidad1" ><img src="images/habilidad1.png" /> Puntos extra 200<span style="font-family:Poke;font-size:0.6em;">$</span></li>
                    <li id="habilidad2" ><img src="images/habilidad2.png" /> Pasar puntos 300<span style="font-family:Poke;font-size:0.6em;">$</span></li>
                    <li id="habilidad3"></li>
                </ul>


               
                <div class="insignias">Insignias conseguidas: <hr>
                    <center>
                    <img onclick="cuestInfo();" id="cuest" title="Misión cuestionarios" src="images/sinInsgCuest.png" />
                    <img onclick="actInfo();" id="act" title="Misión actividades" src="images/sinInsgAct.png" />
                    <img onclick="bitInfo();" id="bit" title="Misión bitácora" src="images/sinInsgBit.png" />
                    <img onclick="proInfo();" id="pro" title="Misión proyecto" src="images/sinInsgPlat.png" />
                    <img onclick="plaInfo();" id="pla" title="Misión plataforma" src="images/sinInsgPro.png" />
                    <img onclick="masInfo();" id="mas" title="Misión puntos Extra" src="images/sinInsgPuntos.png" />
                    </center>
                </div>


                <div class="power stat" onclick="monedasInfo();">
                <img title="Monedas" src="images/dinero.png" /> ${newArray[0].MONEDAS_TOTAL}<span style="font-size:0.5em;font-family:Poke;">$</span>
                </div>
                <div class="defense stat" onclick="puntosInfo();">
                ${newArray[0].FINAL * 100}<span style="font-size:0.5em;">p</span> <img title="Puntos y rango" id="rango1" src="images/nivel2.png" />
                </div>
                <div class="sheen"></div>   
                <br>
                <br>
            </div>
                `;
    document.getElementById("resultado").innerHTML = salida;

    var rango = "";
    if (newArray[0].FINAL < 6) {
        rango = "images/sinNivel.png";
    } else if (newArray[0].FINAL < 8) {
        rango = "images/nivel1.png";
    } else if (newArray[0].FINAL < 10) {
        rango = "images/nivel2.png";
    } else if (newArray[0].FINAL == 10) {
        rango = "images/nivel3.png";
    }
    document.getElementById("rango1").src = rango;

    var act = "";
    if (newArray[0].PROMACT == 10) {
        act = "images/insgAct.png";
    } else {
        act = "images/sinInsgAct.png";
    }
    document.getElementById("act").src = act;

    var cuest = "";
    if (newArray[0].PROMCUES == 10) {
        cuest = "images/insgCuest.png";
    } else {
        cuest = "images/sinInsgCuest.png";
    }
    document.getElementById("cuest").src = cuest;

    var bit = "";
    if (newArray[0].BITACORA == 10) {
        bit = "images/insgBit.png";
    } else {
        bit = "images/sinInsgBit.png";
    }
    document.getElementById("bit").src = bit;

    var pro = "";
    if (newArray[0].PROYECTO == 10) {
        pro = "images/insgPlat.png";
    } else {
        pro = "images/sinInsgPlat.png";
    }
    document.getElementById("pro").src = pro;
    
    var pla = "";
    if (newArray[0].PLATAFORMA == 10) {
        pla = "images/insgPro.png";
    } else {
        pla = "images/sinInsgPro.png";
    }
    document.getElementById("pla").src = pla;

    var mas = "";
    if (newArray[0].PUNTOEX == 1) {
        mas = "images/insgPuntos.png";
    } else {
        mas = "images/sinInsgPuntos.png";
    }
    document.getElementById("mas").src = mas;

    /* habilidades */
    if (newArray[0].HABILIDAD1 == 1) {
        document.getElementById("habilidad1").style.textDecoration = "line-through";

    }
    if (newArray[0].HABILIDAD2 == 1) {
        document.getElementById("habilidad2").style.textDecoration = "line-through";
    }
    if (newArray[0].HABILIDAD3 == 1) {
        document.getElementById("habilidad3").style.textDecoration = "line-through";
    }
    var avatar = "";
    var habilidad = "";
    var descipcion = "";
    switch (newArray[0].AVATAR) {
        case 1:
            avatar = "images/personaje1.png";
            habilidad = 'Pista en el examen 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Ama la ciudad, su fortaleza es una memoria prodigiosa';
            break;
        case 2:
            avatar = "images/personaje1_H.png";
            habilidad = 'Otro intento 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Imposible de engañar, siempre tiene mucho cuidado';
            break;
        case 3:
            avatar = "images/personaje2.png";
            habilidad = 'Trampa en examen 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Tiene mucho carisma y una envidiable ágilidad';
            break;
        case 4:
            avatar = "images/personaje2_H.png";
            habilidad = 'Entregar un dia después 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'No olvida su cabeza porque la tiene pegada al cuello';
            break;
        case 5:
            avatar = "images/personaje3.png";
            habilidad = 'Mas tiempo 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Posee una voz encantadora pero también un físico fuerte ';
            break;
        case 6:
            avatar = "images/personaje3_H.png";
            habilidad = 'Escuchar música 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'De pocas palabras pero muchas mas acciones';
            break;
        case 7:
            avatar = "images/personaje4.png";
            habilidad = 'Comer en clase 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Su sigilo y ágilidad le dan una amplia ventaja';
            break;
        case 8:
            avatar = "images/personaje4_H.png";
            habilidad = 'Otro intento 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Muy fuerte, usa correctamente su astucia';
            break;
        case 9:
            avatar = "images/personaje5.png";
            habilidad = 'Trampa en examen 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Tiene una voluntad de hierro al mismo nivel de su rudeza';
            break;
        case 10:
            avatar = "images/personaje5_H.png";
            habilidad = 'Entregar un dia después 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Su mente prodigiosa le permite actuar con rápidez';
            break;
        case 11:
            avatar = "images/personaje6.png";
            habilidad = 'Pista en el examen 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Ama la ciudad, su fortaleza es una memoria prodigiosa';
            break;
        case 12:
            avatar = "images/personaje6_H.png";
            habilidad = 'Mas tiempo 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Su mente prodigiosa le permite actuar con rápidez';
            break;
        case 13:
            avatar = "images/personaje7.png";
            habilidad = 'Escuchar música 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Imposible de engañar, siempre tiene mucho cuidado';
            break;
        case 14:
            avatar = "images/personaje7_H.png";
            habilidad = 'Comer en clase 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Tiene mucho carisma y una envidiable ágilidad';
            break;
        case 15:
            avatar = "images/personaje8.png";
            habilidad = 'Otro intento 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'No olvida su cabeza porque la tiene pegada al cuello';
            break;
        case 16:
            avatar = "images/personaje8_H.png";
            habilidad = 'Trampa en examen 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Posee una voz encantadora pero también un físico fuerte ';
            break;
        case 17:
            avatar = "images/personaje9.png";
            habilidad = 'Entregar un dia después 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'De pocas palabras pero muchas mas acciones';
            break;
        case 18:
            avatar = "images/personaje9_H.png";
            habilidad = 'Pista en el examen 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Su sigilo y ágilidad le dan una amplia ventaja';
            break;
        case 19:
            avatar = "images/personaje10.png";
            habilidad = 'Mas tiempo 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Muy fuerte, usa correctamente su astucia';
            break;
        case 20:
            avatar = "images/personaje10_H.png";
            habilidad = 'Escuchar música 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Tiene una voluntad de hierro al mismo nivel de su rudeza';
            break;
        case 0:
            avatar = "images/personaje0.png";
            habilidad = 'Comer en clase 300<span style="font-family:Poke;font-size:0.6em;">$</span>';
            descripcion = 'Único';
            break;
        default:
            break;
    }
    document.getElementById("avatar").src = avatar;
    document.getElementById("habilidad3").innerHTML ='<img class="habilidad"  src="images/habilidad3.png" /> '+habilidad;
    document.getElementById("descripcion").innerHTML = descripcion;

}

function limpiar() {
    document.getElementById("texto").value = "";
}

function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}
