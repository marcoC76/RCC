var obj
var salida = '';
var valor;
ft();
window.onload = inicio;

function inicio() {

    document.getElementById("texto").value = localStorage.getItem("id");
    var arrayGuardado = JSON.parse(localStorage.getItem("obj"));
    salida = `
                <h2 class="name">
                ${arrayGuardado[0].equipo}
                
                </h2>

                <div id="mundoActual" class="cost">Mundo 1
                </div>



                <div class="image"></div>
                <div class="nick " style="color:white; text-align:center;font-size: 1.5em;" tooltip="Nombre de tu personaje">
                ${arrayGuardado[0].nombre}
                
                </div>
                <br>


                <ul class="abilities insignias" tooltip="Lista de habilidades">
                    <span style="font-size:1em;">Habilidades:</span>
                    <!-- <li style="text-decoration:line-through">Apuntes en examen $200</li> -->
                    <li style="text-decoration:line-through">Puntos Extra $300</li>
                    <li style="text-decoration:line-through">Pasar Puntos $300</li>
                    <!-- <li style="text-decoration:line-through">Otro Intento $200</li> -->
                </ul>


                <div class="flavor-text" tooltip="Descripción">
                    <center>
                    "Algo interesante sobre mi personaje"
                    </center>
                </div>
                <br>
                <div class="insignias">Insignias conseguidas:
                    <center>
                    <img id="cuestC" title="Misión Cuestionarios" src="images//sinInsgCuest.png" />
                    <img id="actC" title="Misión Actividades" src="images//sinInsgAct.png" />
                    <img id="bitC" title="Misión Bitácora" src="images//sinInsgBit.png" />
                    <img id="proC" title="Misión Proyecto" src="images//sinInsgPlat.png" />
                    <img id="masC" title="Misión Puntos Extra" src="images/sinInsgPuntos.png" />
                    <!--  <img tooltip="Mision Puntos extra" src="images/insgPuntos.png" /> -->
                    </center>
                </div>


                <div class="power stat" >
                    0 <img title="Monedas" src="images/dinero.png" />
                </div>
                <div class="defense stat" >
                ${arrayGuardado[0].fINAL * 100} <img title="Puntos y rango" id="rangoCargado" src="images/nivel2.png" />
                </div>
                <div class="sheen"></div>   
                `;
    document.getElementById("resultado").innerHTML = salida;
    var rangoC = "";
    if (arrayGuardado[0].fINAL < 6) {
        rangoC = "images/sinNivel.png";
    } else if (arrayGuardado[0].fINAL < 8) {
        rangoC = "images/nivel1.png";
    } else if (arrayGuardado[0].fINAL < 10) {
        rangoC = "images/nivel2.png";
    } else if (arrayGuardado[0].fINAL == 10) {
        rangoC = "images/nivel3.png";
    }
    document.getElementById("rangoCargado").src = rangoC;

};


function ft() {

    fetch('https://api.sheety.co/659c221f-bf2d-40e6-850a-2456afc11814')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            obj = data;

            console.log(obj);
        })
        .catch(function (err) {
            console.error(err);
        });
}
/* setInterval('ft()', 120000); */
function ft2() {
    document.getElementById('mundoActual').innerHTML = `Mundo 2`;
    document.body.style.backgroundImage=`url("images/MundoC.png")`;
    fetch('https://api.sheety.co/659c221f-bf2d-40e6-850a-2456afc11814')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            obj = data;
            console.log(obj);
        })
        .catch(function (err) {
            console.error(err);
        });
}
/* setInterval('ft2()', 120000); */
function ft3() {
    document.getElementById('mundoActual').innerHTML = `Mundo 3`;
    document.body.style.backgroundImage=`url("images/MundoD.png")`;
    fetch('https://api.sheety.co/659c221f-bf2d-40e6-850a-2456afc11814')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            obj = data;
            console.log(obj);
        })
        .catch(function (err) {
            console.error(err);
        });
}
/* setInterval('ft3()', 120000); */

function recibir() {
    valor = document.getElementById("texto").value;
    localStorage.setItem("id", valor);
    var newArray = obj.filter(function (el) {
        return (el.iD === localStorage.getItem("id"));
    });
    localStorage.setItem("obj", JSON.stringify(newArray));
    salida = `
                <h2 class="name ">
                ${newArray[0].equipo}
                
                </h2>

                <div id="mundoActual" class="cost">Mundo 1
                </div>



                <div class="image"></div>
                <div class="nick" style="color:white; text-align:center;font-size: 1.5em;">
                ${newArray[0].nombre}
               
                </div>
                <br>


                <ul class="abilities insignias" >
                    <span style="font-size:1em;">Habilidades:</span>
                    <!-- <li style="text-decoration:line-through">Apuntes en examen $200</li> -->
                    <li style="text-decoration:line-through">Puntos Extra $300</li>
                    <li style="text-decoration:line-through">Pasar Puntos $300</li>
                    <!-- <li style="text-decoration:line-through">Otro Intento $200</li> -->
                </ul>


                <div class="flavor-text">
                    <center>
                    "Algo interesante sobre mi personaje"
                    </center>
                </div>
                <br>
                <div class="insignias">Insignias conseguidas:
                    <center>
                    <img id="cuest" title="Misión Cuestionarios" src="images//sinInsgCuest.png" />
                    <img id="act" title="Misión Actividades" src="images//sinInsgAct.png" />
                    <img id="bit" title="Misión Bitácora" src="images//sinInsgBit.png" />
                    <img id="pro" title="Misión Proyecto" src="images//sinInsgPlat.png" />
                    <img id="mas" title="Misión Puntos Extra" src="images/sinInsgPuntos.png" />
                    <!--  <img tooltip="Mision Puntos extra" src="images/insgPuntos.png" /> -->
                    </center>
                </div>


                <div class="power stat">
                    0 <img title="Monedas" src="images/dinero.png" />
                </div>
                <div class="defense stat">
                ${newArray[0].fINAL * 100}<img title="Puntos y rango" id="rango" src="images/nivel2.png" />
                </div>
                <div class="sheen"></div>   
                `;
    document.getElementById("resultado").innerHTML = salida;
    /* var estado = "";
    if (newArray[0].fINAL < 6) {
    estado = "REPROBADO";
    } else {
    estado = "APROBADO";
    }
    document.getElementById("estado").innerHTML = estado; */

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

    document.getElementById("rango").src = rango;

}



