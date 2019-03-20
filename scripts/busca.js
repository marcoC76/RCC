var obj
var salida = '';
var valor;
var appi = "https://api.sheety.co/cba083a5-cc85-4703-a5d0-2307f8968d31";
ft(appi);
window.onload = inicio;

function inicio() {
    localStorage.setItem("mundo", 1);
};
function cambiaMundo(num) {
    var mundo = num;
    localStorage.setItem("mundo", mundo);
    if (localStorage.getItem("mundo") == 1) {
        console.log(localStorage.getItem("mundo"));
        document.body.style.backgroundImage = `url("images/fondo4.jpg")`;
        document.getElementById('mundoActual').innerHTML = `Mundo 1`;
        appi = "https://api.sheety.co/cba083a5-cc85-4703-a5d0-2307f8968d31";
        ft(appi);
        document.getElementById("resultado").innerHTML = "";
        limpiar();
    } else if (localStorage.getItem("mundo") == 2) {
        limpiar();
        console.log(localStorage.getItem("mundo"));
        document.body.style.backgroundImage = `url("images/fondo3.png")`;
        appi = "https://api.sheety.co/659c221f-bf2d-40e6-850a-2456afc11814";
        ft(appi);
        document.getElementById("resultado").innerHTML = "";
        document.getElementById('mundoActual').innerHTML = `Mundo 2`;
    } else if (localStorage.getItem("mundo") == 3) {
        console.log(localStorage.getItem("mundo"));
        document.body.style.backgroundImage = `url("images/fondo5.jpg")`;
        document.getElementById('mundoActual').innerHTML = `Mundo 3`;
        appi = "https://api.sheety.co/659c221f-bf2d-40e6-850a-2456afc11814";
        ft(appi);
        document.getElementById("resultado").innerHTML = "";
        limpiar();
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
                <h2 class="name ">
                    ${newArray[0].equipo}
                
                </h2>

                <div id="mundoActual" class="cost">Mundo ${localStorage.getItem("mundo")}
                </div>



                <div class="image">
                    <img id="avatar" src="" width="100%">
                </div>
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
                    <img id="cuest" title="Misión Cuestionarios" src="images/sinInsgCuest.png" />
                    <img id="act" title="Misión Actividades" src="images/sinInsgAct.png" />
                    <img id="bit" title="Misión Bitácora" src="images/sinInsgBit.png" />
                    <img id="pro" title="Misión Proyecto" src="images/sinInsgPlat.png" />
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
   
    var avatar = "";
    if (newArray[0].avatar == 1) {
        avatar = "images/personaje.png";
        console.log("avatar", avatar);
    } else {
        avatar = "images/personaje2.png";
        console.log("avatar", avatar);
    }
    document.getElementById("avatar").src = avatar;

}

function limpiar() {
    document.getElementById("texto").value = "";
}

