var obj
var salida = '';
var valor;
var appi = "https://api.sheety.co/cba083a5-cc85-4703-a5d0-2307f8968d31";
/* ft(appi); */
window.onload = inicio;

function inicio() {
    localStorage.setItem("mundo", 1);
    cambiaMundo(1)
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
};

function cambiaMundo(num) {
    var mundo = num;
    localStorage.setItem("mundo", mundo);
    if (localStorage.getItem("mundo") == 1) {
        console.log(localStorage.getItem("mundo"));
        document.body.className= 'fondo1';
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
        document.body.className= 'fondo2';
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
        document.body.className= 'fondo3';
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
    localStorage.setItem("newArray", JSON.stringify(newArray));
    salida = `
                <div  class="card">
                    <h2 class="name">
                        Datos Generales
                    </h2>
                    <div id="mundoActualDesg" onclick="mundoInfo();" class="cost">Mundo ${localStorage.getItem("mundo")}
                    </div>
                    <center>
                        <h2 style="color:white;">
                            ${newArray[0].nombre}
                        </h2>
                    
                        <img id="caracter" src="images/caracter.png" />
                        <div class="abilities" onclick="clanInfo();" >
                            <h1 class="name" >
                                ${newArray[0].equipo}
                            </h1>
                        </div>
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
                        <div class="abilities cali" onclick="finalInfo();">
                            <h1>${newArray[0].fINAL}</h1>
                        </div>
                        <div class="abilities cali">
                            <br>
                            <span class="ayuda" style="font-size: 1.5em" onclick="pFinalInfo();"> ${Math.round(newArray[0].pUNTOSACT+newArray[0].pUNTOSCUES+newArray[0].pUNTOSBIT+newArray[0].pUNTOSPRO+newArray[0].pUNTOEX) * 100}<span style="font-size:0.5em;">p</span></span> <img title="Puntos y rango" id="rango" src="images/nivel2.png" />
                            <h1 id="estado">
                                REPROBADO
                            </h1>
                        </div>
                            <img id="reaccion" src="images/reaccion_neutral.png" width="30%">
                           
                    </center>
                    
                    <div class="sheen"></div>
                </div>
                <br>
                <div class="card">
                    <h2 class="name" >
                        Actividades
                    </h2>
                    <div class="desglo">
                        <img onclick="actInfo()" id="act"  src="images/insgAct.png" />
                    </div>
                    <h4 class="ayuda"> Puntos totales: <span style="font-size:1.5em;">${newArray[0].pUNTOSACT*100}</span></h4>
                    <canvas id="actChart" width="100%"></canvas>
                    <center class="abilities">
                    <h4 class="ayuda">Promedio: <span style="font-size:1.5em">${newArray[0].pROMACT}</span></h4>
                    </center>
                    <div class="sheen"></div>
                </div>
                <br>
                <div class="card">
                    <h2 class="name" >
                        Cuestionarios Previos
                    </h2>
                    <div class="desglo">
                        <img onclick="cuestInfo()" id="cuest" src="images/insgCuest.png" />
                    </div>
                    <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;"> ${newArray[0].pUNTOSCUES*100}</a> </h4>
                    <canvas id="cuestChart" width="100%"></canvas>
                   
                    <center class="abilities">
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
                        <img onclick="bitInfo()" id="bit"  src="images/insgBit.png" />
                    </div>
                    <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;">${newArray[0].pUNTOSBIT*100}</a></h4>
                    <canvas id="bitChart" width="50"></canvas>
                    <div class="sheen"></div>
                    </div>
                    <br>
                <div class="card">
                    <h2 class="name" >
                    Proyecto
                    </h2>
                    <div class="desglo">
                        <img onclick="proInfo()" id="pro" src="images/insgPlat.png" />
                    </div>
                    <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;">${newArray[0].pUNTOSPRO*100}</a></h4>
                    <canvas id="proChart" width="100%"></canvas>
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
    
    
    var reaccion = "";
    if (newArray[0].fINAL == 0) {
        reaccion = "images/reaccion_horror.png";
    } else if (newArray[0].fINAL <= 2) {
        reaccion = "images/reaccion_verguenza.png";
    } else if (newArray[0].fINAL <= 4) {
        reaccion = "images/reaccion_desepcion.png";
    } else if (newArray[0].fINAL == 5) {
        reaccion = "images/reaccion_resignacion.png";
    } else if (newArray[0].fINAL < 8) {
        reaccion = "images/reaccion_esfuerzo.png";
    } else if (newArray[0].fINAL < 10) {
        reaccion = "images/reaccion_neutral.png";
    }else if (newArray[0].fINAL == 10) {
        reaccion = "images/reaccion_orgullo.png";
        /* reaccion = "images/reaccion_alegre.png"; */
    }
    document.getElementById("reaccion").src = reaccion;

    var caracter = "";
    switch (newArray[0].avatar) {
        case 1:
            caracter = "images/caracter.png";
            break;
        case 2:
            caracter = "images/caracter_H.png";
            break;
        case 3:
            caracter = "images/caracter2.png";
            break;
        case 4:
            caracter = "images/caracter2_H.png";
            break;
        case 5:
            caracter = "images/caracter3.png";
            break;
        case 6:
            caracter = "images/caracter3_H.png";
            break;
        case 7:
            caracter = "images/caracter4.png";
            break;
        case 8:
            caracter = "images/caracter4_H.png";
            break;
        case 9:
            caracter = "images/caracter5.png";
            break;
        case 10:
            caracter = "images/caracter5_H.png";
            break;
        case 11:
            caracter = "images/caracter6.png";
            break;
        case 12:
            caracter = "images/caracter6_H.png";
            break;
        case 13:
            caracter = "images/caracter7.png";
            break;
        case 14:
            caracter = "images/caracter7_H.png";
            break;
        case 15:
            caracter = "images/caracter8.png";
            break;
        case 16:
            caracter = "images/caracter8_H.png";
            break;
        case 17:
            caracter = "images/caracter9.png";
            break;
        case 18:
            caracter = "images/caracter9_H.png";
            break;
        case 19:
            caracter = "images/caracter10.png";
            break;
        case 20:
            caracter = "images/caracter10_H.png";
            break;
        case 0:
            caracter = "images/caracter0.png";
            break;
        default:
        caracter = "images/caracter.png";
            break;
    }
    document.getElementById("caracter").src = caracter;

    
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
        var ctx = document.getElementById("proChart");
        var proChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Proyecto", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].pROYECTO, 10 - newArray[0].pROYECTO],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)'

                    ]
                }]
            }
        });
        var ctx = document.getElementById("bitChart");
        var bitChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Bitácora", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].bITACORA, 10 - newArray[0].bITACORA],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.6)'
                    ]
                }]
            }

        });
    }else if (localStorage.getItem("mundo") == 2){
        var ctx = document.getElementById("actChart");
        var actChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Act6", "Act7", "Act8", "Act9", "ActR", "LuzOnd"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].aCTIVIDAD6, newArray[0].aCTIVIDAD7, newArray[0].aCTIVIDAD8, newArray[0].aCTIVIDAD9, newArray[0].aCTIVIDADR, newArray[0].lUZ_Y_ONDAS],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(200, 100, 150, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(54, 162, 235, 0.6)'
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
                labels: ["Cuest6", "Cuest7", "Cuest8", "Cuest9"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].cUESTIONARIO6, newArray[0].cUESTIONARIO7, newArray[0].cUESTIONARIO8, newArray[0].cUESTIONARIO9],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
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
        var ctx = document.getElementById("proChart");
        var proChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Proyecto", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].pROYECTO, 10 - newArray[0].pROYECTO],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)'
    
                    ]
                }]
            }
        });
        var ctx = document.getElementById("bitChart");
        var bitChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Bitácora", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].bITACORA, 10 - newArray[0].bITACORA],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.6)'
                    ]
                }]
            }
    
        });
    }else if (localStorage.getItem("mundo") == 3){
        var ctx = document.getElementById("actChart");
        var actChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Act10", "Act11", "Act12", "ActR", "ElecMag"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].aCTIVIDAD10, newArray[0].aCTIVIDAD11, newArray[0].aCTIVIDAD12, newArray[0].aCTIVIDADR, newArray[0].eLEC_Y_MAG],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(200, 100, 150, 0.6)',
                        'rgba(54, 162, 235, 0.6)'
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
                labels: ["Cuest10", "Cuest11", "Cuest12"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].cUESTIONARIO10, newArray[0].cUESTIONARIO11, newArray[0].cUESTIONARIO12],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
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
        var ctx = document.getElementById("proChart");
        var proChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Proyecto", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].pROYECTO, 10 - newArray[0].pROYECTO],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)'
    
                    ]
                }]
            }
        });
        var ctx = document.getElementById("bitChart");
        var bitChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Bitácora", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].bITACORA, 10 - newArray[0].bITACORA],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.6)'
                    ]
                }]
            }
    
        });
    }
}

function limpiar() {
    document.getElementById("texto").value = "";
}