var obj
var salida = '';
var valor;
ft();
window.onload = inicio;

function inicio() {
    
    document.getElementById("texto").value = localStorage.getItem("id");
    var arrayGuardado = JSON.parse(localStorage.getItem("obj"));
    salida = `
                <h2 class="name tooltip">
                    <span class="tooltiptext">Clan al que perteneces</span>
                    ${arrayGuardado[0].equipo}
                </h2>

                <div id="mundoActual" class="cost">Mundo 1
                </div>



                <div class="image"></div>
                <div class="nick" style="color:white; text-align:center;font-size: 1.5em;" tooltip="Nombre de tu personaje">
                ${arrayGuardado[0].nombre}
                </div>
                <br>


                <ul class="abilities insignias" tooltip="Lista de habilidades">
                    <span style="font-size:1em;">Habilidades:</span>
                    <!-- <li style="text-decoration:line-through">Apuntes en examen $200</li> -->
                    <li>Puntos Extra $300</li>
                    <li>Pasar Puntos $300</li>
                    <li style="text-decoration:line-through">Otro Intento $200</li>
                </ul>


                <div class="flavor-text" tooltip="Descripción">
                    <center>
                    "Algo interesante sobre mi personaje"
                    </center>
                </div>
                <br>
                <div class="insignias">Insignias conseguidas:
                    <center>
                    <img src="images/insgCuest.png" />
                    <img tooltip="Misión Actividades" src="images/insgaAct.png" />
                    <img tooltip="Misión Bitácora" src="images/insgBit.png" />
                    <img tooltip="Misión Proyecto" src="images/insgPlat.png" />
                    <img tooltip="Misión Puntos extra" src="images/sinInsgPuntos.png" />
                    <!--  <img tooltip="Mision Puntos extra" src="images/insgPuntos.png" /> -->
                    </center>
                </div>


                <div class="power stat" tooltip="Monedas">
                    200 <img src="images/dinero.png" />
                </div>
                <div class="defense stat" tooltip="Puntos y Rango">
                ${arrayGuardado[0].fINAL} <img src="images/nivel2.png" />
                </div>
                <div class="sheen"></div>   
                `;
    document.getElementById("resultado").innerHTML = salida;
    
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
setInterval('ft()', 120000);
function ft2() {
    document.getElementById('mundoActual').innerHTML = `Mundo 2`;
    
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
setInterval('ft2()', 120000);
function ft3() {
    document.getElementById('mundoActual').innerHTML = `Mundo 3`;
   
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
setInterval('ft3()', 120000);

function recibir() {
    valor = document.getElementById("texto").value;
    localStorage.setItem("id", valor);
    var newArray = obj.filter(function (el) {
        return (el.iD === localStorage.getItem("id"));
    });
    localStorage.setItem("obj",JSON.stringify(newArray));
    salida = `
                <h2 class="name tooltip">
                    <span class="tooltiptext">Clan al que perteneces</span>
                    ${newArray[0].equipo}
                </h2>

                <div id="mundoActual" class="cost">Mundo 1
                </div>



                <div class="image"></div>
                <div class="nick" style="color:white; text-align:center;font-size: 1.5em;" tooltip="Nombre de tu personaje">
                ${newArray[0].nombre}
                </div>
                <br>


                <ul class="abilities insignias" tooltip="Lista de habilidades">
                    <span style="font-size:1em;">Habilidades:</span>
                    <!-- <li style="text-decoration:line-through">Apuntes en examen $200</li> -->
                    <li>Puntos Extra $300</li>
                    <li>Pasar Puntos $300</li>
                    <li style="text-decoration:line-through">Otro Intento $200</li>
                </ul>


                <div class="flavor-text" tooltip="Descripción">
                    <center>
                    "Algo interesante sobre mi personaje"
                    </center>
                </div>
                <br>
                <div class="insignias">Insignias conseguidas:
                    <center>
                    <img src="images/insgCuest.png" />
                    <img tooltip="Misión Actividades" src="images/insgaAct.png" />
                    <img tooltip="Misión Bitácora" src="images/insgBit.png" />
                    <img tooltip="Misión Proyecto" src="images/insgPlat.png" />
                    <img tooltip="Misión Puntos extra" src="images/sinInsgPuntos.png" />
                    <!--  <img tooltip="Mision Puntos extra" src="images/insgPuntos.png" /> -->
                    </center>
                </div>


                <div class="power stat" tooltip="Monedas">
                    200 <img src="images/dinero.png" />
                </div>
                <div class="defense stat" tooltip="Puntos y Rango">
                ${newArray[0].fINAL} <img src="images/nivel2.png" />
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

}



