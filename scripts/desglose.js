var obj
var salida = '';
var valor;
ft();
window.onload = inicio;

function inicio() {
    document.getElementById("texto").value = localStorage.getItem("id");
    var arrayGuardado = JSON.parse(localStorage.getItem("obj"));
    salida = `
    <div  class="card">
        <h2 class="name">
            Datos Generales
        </h2>
        <div id="mundoActualDesg" class="cost">Mundo 1
        </div>
        <h1>
        ${arrayGuardado[0].nombre}
        </h1>
        <center>
            <img src="images/caracter.png" />
            <h2 class="name" tooltip="Clan al que perteneces">
            ${arrayGuardado[0].equipo}
            </h2>
        </center>
        <h2 class="name" tooltip="">
            Asistencias:
        </h2>
        <h2 class="name">
            Grupo:
        </h2>
        <h2 class="name">
            Punto Extra: <img src="images/insgPuntos.png" />
        </h2>
        <h2 class="name" tooltip="">
            Calificación Final:
        </h2>
        <center>
            <h1>
                APROBADO
            </h1>
            <img src="images/nivel2.png" />
        </center>
        <div class="sheen"></div>
    </div>
    <br>
    <div class="card">
        <h2 class="name" tooltip="">
            Actividades
        </h2>
        <div class="desglo">
            <img tooltip="Mision Actividades" src="images/insgaAct.png" />
        </div>
        <div class="sheen"></div>
    </div>
    <br>
    <div class="card">
        <h2 class="name" tooltip="">
            Cuestioanrios Previos
        </h2>
        <div class="desglo">
            <img tooltip="Mision Cuestioanrios" src="images/insgCuest.png" />
        </div>
        <div class="sheen"></div>
    </div>
    <br>
    <div class="card">
        <h2 class="name" tooltip="">
            Bitacora
        </h2>
        <div class="desglo">
            <img tooltip="Mision Bitacora" src="images/insgBit.png" />
        </div>
        <div class="sheen"></div>
    </div>
    <br>
    <div class="card">
        <h2 class="name" tooltip="">
            Proyecto
        </h2>
        <div class="desglo">
            <img tooltip="Mision Proyecto" src="images/insgPlat.png" />
        </div>
        <div class="sheen"></div>
    </div>

                  
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
    
    document.getElementById('mundoActualDesg').innerHTML = `Mundo 2`;
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
   
    document.getElementById('mundoActualDesg').innerHTML = `Mundo 3`;
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
    <div  class="card">
        <h2 class="name">
            Datos Generales
        </h2>
        <div id="mundoActualDesg" class="cost">Mundo 1
        </div>
        <h1>
            STEELOS
        </h1>
        <center>
            <img src="images/caracter.png" />
            <h2 class="name" tooltip="Clan al que perteneces">
                Los Magios
            </h2>
        </center>
        <h2 class="name" tooltip="">
            Asistencias:
        </h2>
        <h2 class="name">
            Grupo:
        </h2>
        <h2 class="name">
            Punto Extra: <img src="images/insgPuntos.png" />
        </h2>
        <h2 class="name" tooltip="">
            Calificación Final:
        </h2>
        <center>
            <h1>
                APROBADO
            </h1>
            <img src="images/nivel2.png" />
        </center>
        <div class="sheen"></div>
    </div>
    <br>
    <div class="card">
        <h2 class="name" tooltip="">
            Actividades
        </h2>
        <div class="desglo">
            <img tooltip="Mision Actividades" src="images/insgaAct.png" />
        </div>
        <div class="sheen"></div>
    </div>
    <br>
    <div class="card">
        <h2 class="name" tooltip="">
            Cuestioanrios Previos
        </h2>
        <div class="desglo">
            <img tooltip="Mision Cuestioanrios" src="images/insgCuest.png" />
        </div>
        <div class="sheen"></div>
    </div>
    <br>
    <div class="card">
        <h2 class="name" tooltip="">
            Bitacora
        </h2>
        <div class="desglo">
            <img tooltip="Mision Bitacora" src="images/insgBit.png" />
        </div>
        <div class="sheen"></div>
    </div>
    <br>
    <div class="card">
        <h2 class="name" tooltip="">
            Proyecto
        </h2>
        <div class="desglo">
            <img tooltip="Mision Proyecto" src="images/insgPlat.png" />
        </div>
        <div class="sheen"></div>
    </div>

                  
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



