var obj
var salida = '';
var valor;
/* var appi = "https://api.sheety.co/cba083a5-cc85-4703-a5d0-2307f8968d31"; */
var appi = "https://api.sheety.co/56fdd1ff-80eb-4876-b01f-e7f992d2ee37";
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
                          <div onclick="conexion();" class="">
                            <span  class="white-text" style="font-size:1.5em;text-transform:upperCase;">
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
        /* document.body.style.backgroundColor = `linear-gradient(to right top, #3d2f66, #4a3470, #58397a, #673e83, #76438c);`; */
        document.body.className = 'fondo1';
        /* document.getElementById('mundoActualDes').innerHTML = `Mundo 1`; */
        /* appi = "https://api.sheety.co/cba083a5-cc85-4703-a5d0-2307f8968d31"; */
        appi = "https://api.sheety.co/56fdd1ff-80eb-4876-b01f-e7f992d2ee37";
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
        /* document.body.style.backgroundColor = `linear-gradient(to right top, #1a035e, #24057c, #2e079c, #380abc, #430dde);`; */
        document.body.className = 'fondo2';
        /* appi = "https://api.sheety.co/659c221f-bf2d-40e6-850a-2456afc11814"; */
        appi = "https://api.sheety.co/56fdd1ff-80eb-4876-b01f-e7f992d2ee37";
        ft(appi);
        document.getElementById("resultado").innerHTML = `
                                                            <div class="card">
                                                                <br>
                                                                <h1>
                                                                    Ingresa un ID valido
                                                                </h1>
                                                            </div>
                                                        `;
        /* document.getElementById('mundoActualDes').innerHTML = `Mundo 2`; */
    } else if (localStorage.getItem("mundo") == 3) {
        limpiar();
        console.log(localStorage.getItem("mundo"));
        /* document.body.style.backgroundColor = `linear-gradient(to right top, #5e0303, #660304, #6f0304, #770304, #800404);`; */
        document.body.className = 'fondo3';
        /* document.getElementById('mundoActualDes').innerHTML = `Mundo 3`; */
        appi = "https://api.sheety.co/56fdd1ff-80eb-4876-b01f-e7f992d2ee37";
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
setInterval('ft(appi)', 120000);


function recibir() {
    valor = document.getElementById("texto").value;
    localStorage.setItem("id", valor);
    var newArray = obj.filter(function (el) {
        return (el.iD === localStorage.getItem("id"));
    });
    console.log(newArray);
    /* localStorage.setItem("newArray", JSON.stringify(newArray)); */
    salida = `
    <div  class="card">
                <h2 onclick="clanInfo();" class="name ">
                    ${newArray[0].equipo}
                
                </h2>

                <div onclick="mundoInfo();" id="mundoActual" class="cost">Mundo ${localStorage.getItem("mundo")}
                </div>



                <div class="image">
                    <img id="avatar" src="" width="100%">
                </div>
                <div class="nick" style="color:white; text-align:center;font-size: 1.5em;">
                ${newArray[0].nombre}
               
                </div>
                <br>

                <div class="flavor-text">
                    <center>
                    " ${newArray[0].dESCRIPCION}"
                    </center>
                </div>
                <br>
                <ul class="abilities insignias" >
                    <span style="font-size:1em;">Habilidades:</span>
                    <li id="habilidad1" >Apuntes en examen <span style="font-family:Poke;font-size:0.6em;">$</span>200</li>
                    <li id="habilidad2" >Puntos Extra <span style="font-family:Poke;font-size:0.6em;">$</span>300</li>
                    <li id="habilidad3" >Pasar Puntos <span style="font-family:Poke;font-size:0.6em;">$</span>300</li>
                    <!-- <li style="text-decoration:line-through">Otro Intento $200</li> -->
                </ul>


               
                <div class="insignias">Insignias conseguidas:
                    <center>
                    <img onclick="cuestInfo();" id="cuest" title="Misión Cuestionarios" src="images/sinInsgCuest.png" />
                    <img onclick="actInfo();" id="act" title="Misión Actividades" src="images/sinInsgAct.png" />
                    <img onclick="bitInfo();" id="bit" title="Misión Bitácora" src="images/sinInsgBit.png" />
                    <img onclick="proInfo();" id="pro" title="Misión Proyecto" src="images/sinInsgPlat.png" />
                    <img onclick="masInfo();" id="mas" title="Misión Puntos Extra" src="images/sinInsgPuntos.png" />
                    <!--  <img tooltip="Mision Puntos extra" src="images/insgPuntos.png" /> -->
                    </center>
                </div>


                <div class="power stat" onclick="monedasInfo();">
                ${newArray[0].mONEDAS_TOTAL}<span style="font-size:0.5em;font-family:Poke;">$</span> <img title="Monedas" src="images/dinero.png" />
                </div>
                <div class="defense stat" onclick="puntosInfo();">
                ${newArray[0].fINAL * 100}<span style="font-size:0.5em;">p</span> <img title="Puntos y rango" id="rango1" src="images/nivel2.png" />
                </div>
                <div class="sheen"></div>   
                <br>
                <br>
            </div>
                `;
    document.getElementById("resultado").innerHTML = salida;

    var rango = "";
    if (newArray[0].fINAL < 6) {
        rango = "images/sinNivel.png";
    } else if (newArray[0].fINAL < 8) {
        rango = "images/nivel1.png";
    } else if (newArray[0].fINAL < 10) {
        rango = "images/nivel2.png";
    } else if (newArray[0].fINAL == 10) {
        rango = "images/nivel3.png";
    }
    document.getElementById("rango1").src = rango;

    var act = "";
    if (newArray[0].pROMACT == 10) {
        act = "images/insgAct.png";
    } else {
        act = "images/sinInsgAct.png";
    }
    document.getElementById("act").src = act;

    var cuest = "";
    if (newArray[0].pROMCUES == 10) {
        cuest = "images/insgCuest.png";
    } else {
        cuest = "images/sinInsgCuest.png";
    }
    document.getElementById("cuest").src = cuest;

    var bit = "";
    if (newArray[0].bITACORA == 10) {
        bit = "images/insgBit.png";
    } else {
        bit = "images/sinInsgBit.png";
    }
    document.getElementById("bit").src = bit;

    var pro = "";
    if (newArray[0].pROYECTO == 10) {
        pro = "images/insgPlat.png";
    } else {
        pro = "images/sinInsgPlat.png";
    }
    document.getElementById("pro").src = pro;

    var mas = "";
    if (newArray[0].pUNTOEX == 1) {
        mas = "images/insgPuntos.png";
    } else {
        mas = "images/sinInsgPuntos.png";
    }
    document.getElementById("mas").src = mas;

    /* habilidades */
    if (newArray[0].hABILIDAD1 == 1) {
        document.getElementById("habilidad1").style.textDecoration = "line-through";
        
    } 
    if (newArray[0].hABILIDAD2 == 1) {
        document.getElementById("habilidad2").style.textDecoration = "line-through";
    }
    if (newArray[0].hABILIDAD3 == 1) {
        document.getElementById("habilidad3").style.textDecoration = "line-through";
    }
    var avatar = "";
    switch (newArray[0].avatar) {
        case 1:
            avatar = "images/personaje1.png";
            break;
        case 2:
            avatar = "images/personaje1_H.png";
            break;
        case 3:
            avatar = "images/personaje2.png";
            break;
        case 4:
            avatar = "images/personaje2_H.png";
            break;
        case 5:
            avatar = "images/personaje3.png";
            break;
        case 6:
            avatar = "images/personaje3_H.png";
            break;
        case 7:
            avatar = "images/personaje4.png";
            break;
        case 8:
            avatar = "images/personaje4_H.png";
            break;
        case 9:
            avatar = "images/personaje5.png";
            break;
        case 10:
            avatar = "images/personaje5_H.png";
            break;
        case 11:
            avatar = "images/personaje6.png";
            break;
        case 12:
            avatar = "images/personaje6_H.png";
            break;
        case 13:
            avatar = "images/personaje7.png";
            break;
        case 14:
            avatar = "images/personaje7_H.png";
            break;
        case 15:
            avatar = "images/personaje8.png";
            break;
        case 16:
            avatar = "images/personaje8_H.png";
            break;
        case 17:
            avatar = "images/personaje9.png";
            break;
        case 18:
            avatar = "images/personaje9_H.png";
            break;
        case 19:
            avatar = "images/personaje10.png";
            break;
        case 20:
            avatar = "images/personaje10_H.png";
            break;
        case 0:
            avatar = "images/personaje0.png";
            break;
        default:
            break;
    }
    document.getElementById("avatar").src = avatar;

}

function limpiar() {
    document.getElementById("texto").value = "";
}

function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}