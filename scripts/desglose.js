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
        /* document.getElementById('mundoActualDes').innerHTML = `Mundo 1`; */
        appi = "https://api.sheety.co/cba083a5-cc85-4703-a5d0-2307f8968d31";
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
        document.body.style.backgroundImage = `url("images/MundoC.png")`;
        appi = "https://api.sheety.co/659c221f-bf2d-40e6-850a-2456afc11814";
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
        document.body.style.backgroundImage = `url("images/MundoD.png")`;
        /* document.getElementById('mundoActualDes').innerHTML = `Mundo 3`; */
        appi = "https://api.sheety.co/659c221f-bf2d-40e6-850a-2456afc11814";
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
    localStorage.setItem("newArray", JSON.stringify(newArray));
    salida = `
                <div  class="card">
                    <h2 class="name">
                        Datos Generales
                    </h2>
                    <div id="mundoActualDesg" class="cost">Mundo ${localStorage.getItem("mundo")}
                    </div>
                    <h1>
                        ${newArray[0].nombre}
                    </h1>
                    <center>
                        <img src="images/caracter.png" />
                        <h2 class="name" tooltip="Clan al que perteneces">
                            ${newArray[0].equipo}
                        </h2>
                    </center>
                    <h2 class="name" >
                        Asistencias: <span class="tamaño">${newArray[0].tOTALASIS}</span>
                    </h2>
                    <h2 class="name">
                        Grupo: <span class="tamaño">${newArray[0].grupo}</span>
                    </h2>
                    <h2 class="name">
                        Punto Extra: <img id="mas" src="images/insgPuntos.png" />
                    </h2>
                    <h2 class="name" >
                        Calificación Final: 
                    </h2>
                    <center>
                        <h1 class="cali">${newArray[0].fINAL}</h1>
                    </center>
                    <center>
                        <h1 id="estado">
                            REPROBADO
                        </h1>
                        <img id="rango" src="images/nivel2.png" />
                    </center>
                    <div class="sheen"></div>
                </div>
                <br>
                <div class="card">
                    <h2 class="name" >
                        Actividades
                    </h2>
                    <div class="desglo">
                        <img id="act"  src="images/insgAct.png" />
                    </div>
                    <h4 class="ayuda"> Puntos totales: <span style="font-size:1.2em;">${newArray[0].pUNTOSACT}</span></h4>
                    <canvas id="actChart" width="100%"></canvas>
                    <hr>
                    <center>
                    <h4 class="ayuda">Promedio: <span style="font-size:1.2em">${newArray[0].pROMACT}</span></h4>
                    </center>
                    <div class="sheen"></div>
                </div>
                <br>
                <div class="card">
                    <h2 class="name" >
                        Cuestionarios Previos
                    </h2>
                    <div class="desglo">
                        <img id="cuest" src="images/insgCuest.png" />
                    </div>
                    <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;"> ${newArray[0].pUNTOSCUES}</a> </h4>
                    <canvas id="cuestChart" width="100%"></canvas>
                    <hr>
                    <center>
                    <h4 class="ayuda">Promedio: <a  style="font-size:1.5em;">${newArray[0].pROMCUES}</a></h4>
                    </center>
                    <div class="sheen"></div>
                </div>
                <br>
                <div class="card">
                    <h2 class="name" >
                        Bitácora
                    </h2>
                    <div class="desglo">
                        <img id="bit"  src="images/insgBit.png" />
                    </div>
                    <div class="sheen"></div>
                </div>
                <br>
                <div class="card">
                    <h2 class="name" >
                        Proyecto
                    </h2>
                    <div class="desglo">
                        <img id="pro" src="images/insgPlat.png" />
                    </div>
                    <div class="sheen"></div>
                </div>                  
                `;
    document.getElementById("resultado").innerHTML = salida;
    var estado = "";
    if (newArray[0].fINAL < 6) {
        estado = "REPROBADO";
    } else {
        estado = "APROBADO";
    }
    document.getElementById("estado").innerHTML = estado;

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

    if (localStorage.getItem("mundo") == 1) {
        var ctx = document.getElementById("actChart");
        var actChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Act1", "Act2", "Act4", "Act5", "ActR"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].aCTIVIDAD1, newArray[0].aCTIVIDAD2, newArray[0].aCTIVIDAD4, newArray[0].aCTIVIDAD5, newArray[0].aCTIVIDADR],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(200, 100, 150, 0.6)',
                        'rgba(153, 102, 255, 0.6)'
                    ]
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        var ctx = document.getElementById("cuestChart");
        var cuestChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Cuest1", "Cuest2", "Cuest3", "Cuest4", "Cuest5"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].cUESTIONARIO1, newArray[0].cUESTIONARIO2, newArray[0].cUESTIONARIO3, newArray[0].cUESTIONARIO4, newArray[0].cUESTIONARIO5],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(153, 102, 255, 0.6)'
                    ]
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}

function limpiar() {
    document.getElementById("texto").value = "";
}