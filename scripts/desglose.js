var obj;
var salida = '';
var valor;
var appi = "https://script.googleusercontent.com/macros/echo?user_content_key=F50kUuixg_1_YNRBwi-XJB9Irsas9MzbLt4HIRZSSQW6mLPfwDXhVX1mvQ0tFXI9qN3e22ahv33gsDNlgmxmCNfjzRWAR42Hm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH7FvHuoCA3aY6oYh_uPeR7OGIv6mE7OArfLpHEi2SkZG7auUhcX8GvYge8pF1VBKFasVhBWVkFc&lib=MlfAK7sYzDUKhAPiLWJ3BQCiYTb7JmIRw";

ft(appi);
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
                          <div onclick="conexion();" class="conexion">
                            <span  class="white-text" style="font-size:1.2em;">
                                SIN CONEXIÓN
                            </span>
                          </div>
                    `;
        document.getElementById("footer2").innerHTML = internet;
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
                            ${newArray[0].NICK}
                        </h2>
                        <div id="pie">
                            <img id="caracter" src="images/caracter.png" />
                        </div>
                        <div class="abilities" onclick="clanInfo();" >
                            <h1 class="name" >
                                ${newArray[0].EQUIPO}
                            </h1>
                        </div>
                    </center>
                    <h2 class="name" onclick="asisInfo();" >
                        Asistencias: <span class="tamaño">${newArray[0].TOTALASIS}</span>
                    </h2>
                    <h2 class="name">
                        Grupo: <span class="tamaño">${newArray[0].GRUPO}</span>
                    </h2>
                    <h2 class="name">
                        Punto Extra: <img id="mas" src="images/insgPuntos.png" />
                    </h2>
                    <h2 class="name" >
                        Calificación Final: 
                    </h2>
                    <center>
                        <div class="abilities cali" onclick="finalInfo();">
                            <h1>${parseInt(newArray[0].FINAL)}</h1>
                        </div>
                        <div class="abilities cali">
                            <br>
                            <span class="ayuda" style="font-size: 1.5em" onclick="pFinalInfo();"> 
                                ${parseInt((parseFloat(newArray[0].CALI)+parseFloat(newArray[0].PUNTOEX)) * 100)}
                                <span style="font-size:0.5em;">p</span>
                            </span> <img title="Puntos y rango" id="rango" src="images/nivel2.png" />
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
                    <h4 class="ayuda"> Puntos totales: <span style="font-size:1.5em;">${Math.round(newArray[0].PUNTOSACT*100)}</span></h4>
                    <canvas id="actChart" width="100%"></canvas>

                    <center class="abilities">
                    <h4 class="ayuda">Promedio: <span style="font-size:1.5em">${newArray[0].PROMACT}</span></h4>
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
                    <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;"> ${newArray[0].PUNTOSCUES*100}</a> </h4>
                    <canvas id="cuestChart" width="100%"></canvas>
                   
                    <center class="abilities">
                    <h4 class="ayuda">Promedio: <a  style="font-size:1.5em;">${newArray[0].PROMCUES}</a></h4>
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
                    <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;">${newArray[0].PUNTOSBIT*100}</a></h4>
                    <canvas id="bitChart" width="50"></canvas>
                    <br>
                    <center class="abilities">
                    <h4 class="ayuda">Promedio: <a  style="font-size:1.5em;">${newArray[0].BITACORA}</a></h4>
                    </center>
                    <div class="sheen"></div>
                    </div>
                    <br>
                    <div class="card">
                        <h2 class="name" >
                        Plataforma
                        </h2>
                        <div class="desglo">
                            <img onclick="plaInfo()" id="pla" src="images/insgPro.png" />
                        </div>
                        <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;">${newArray[0].PUNTOSPLA*100}</a></h4>
                        <canvas id="plaChart" width="100%"></canvas>
                        <br>
                        <center class="abilities">
                        <h4 class="ayuda">Promedio: <a  style="font-size:1.5em;">${newArray[0].PLATAFORMA}</a></h4>
                        </center>
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
                        <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;">${newArray[0].PUNTOSPRO*100}</a></h4>
                        <canvas id="proChart" width="100%"></canvas>
                        <br>
                        <center class="abilities">
                        <h4 class="ayuda">Promedio: <a  style="font-size:1.5em;">${newArray[0].PROYECTO}</a></h4>
                        </center>
                        <div class="sheen"></div>
                    </div>                  
                `;
    document.getElementById("resultado").innerHTML = salida;
    var estado = "";
    if (newArray[0].FINAL < 6) {
        estado = "REPROBADO";
    } else {
        estado = "APROBADO";
    }
    document.getElementById("estado").innerHTML = estado;

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
    document.getElementById("rango").src = rango;

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


    var reaccion = "";
    if (newArray[0].FINAL == 0) {
        reaccion = "images/reaccion_horror.png";
    } else if (newArray[0].FINAL <= 2) {
        reaccion = "images/reaccion_verguenza.png";
    } else if (newArray[0].FINAL <= 4) {
        reaccion = "images/reaccion_desepcion.png";
    } else if (newArray[0].FINAL == 5) {
        reaccion = "images/reaccion_resignacion.png";
    } else if (newArray[0].FINAL < 8) {
        reaccion = "images/reaccion_esfuerzo.png";
    } else if (newArray[0].FINAL < 10) {
        reaccion = "images/reaccion_neutral.png";
    } else if (newArray[0].FINAL == 10) {
        reaccion = "images/reaccion_orgullo.png";
    }
    document.getElementById("reaccion").src = reaccion;

    var caracter = "";
    switch (newArray[0].AVATAR) {
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
                labels: ["Act1.1", "Act1.2", "Act2.1", "Act2.2", "Act3.1", "Act3.2"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].ACTIVIDAD1_1, newArray[0].ACTIVIDAD1_2, newArray[0].ACTIVIDAD2_1, newArray[0].ACTIVIDAD2_2, newArray[0].ACTIVIDAD3_1, newArray[0].ACTIVIDAD3_2],
                    backgroundColor: [
                        'rgba(192, 236, 127, 0.6)',
                        'rgba(187, 213, 237, 0.6)',
                        'rgba(206, 253, 255, 0.6)',
                        'rgba(204, 255, 203, 0.6)',
                        'rgba(186, 232, 185, 0.6)',
                        'rgba(286, 332, 185, 0.6)'
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
                labels: ["Cuest1", "Cuest2", "Cuest3"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].CUESTIONARIO1, newArray[0].CUESTIONARIO2, newArray[0].CUESTIONARIO3],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
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
                    data: [newArray[0].PROYECTO, 10 - newArray[0].PROYECTO],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)'

                    ]
                }]
            }
        });
        var ctx = document.getElementById("plaChart");
        var proChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Plataforma", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].PLATAFORMA, 10 - newArray[0].PLATAFORMA],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.6)'

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
                    data: [newArray[0].BITACORA, 10 - newArray[0].BITACORA],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.6)'
                    ]
                }]
            }

        });
        

    } else if (localStorage.getItem("mundo") == 2) {
        var ctx = document.getElementById("actChart");
        var actChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Act4.1", "Act5.1", "Act6.1", "Act6.2", "ActR"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].ACTIVIDAD4_1, newArray[0].ACTIVIDAD5_1, newArray[0].ACTIVIDAD6_1, newArray[0].ACTIVIDAD6_2, newArray[0].ACTIVIDADR],
                    backgroundColor: [
                        'rgba(162, 136, 227, 0.6)',
                        'rgba(187, 213, 237, 0.6)',
                        'rgba(206, 253, 255, 0.6)',
                        'rgba(204, 255, 203, 0.6)',
                        'rgba(186, 232, 185, 0.6)'
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
                labels: ["Cuest4", "Cuest5"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].CUESTIONARIO4, newArray[0].CUESTIONARIO5],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
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
                    data: [newArray[0].PROYECTO, 10 - newArray[0].PROYECTO],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)'

                    ]
                }]
            }
        });
        var ctx = document.getElementById("plaChart");
        var proChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Plataforma", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].PLATAFORMA, 10 - newArray[0].PLATAFORMA],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.6)'

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
                    data: [newArray[0].BITACORA, 10 - newArray[0].BITACORA],
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.6)'
                    ]
                }]
            }

        });
    } else if (localStorage.getItem("mundo") == 3) {
        var ctx = document.getElementById("actChart");
        var actChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Act7.1", "Act8.0", "Act8.1", "Act9.1", "Act9.2", "ActR"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].ACTIVIDAD7_1, newArray[0].ACTIVIDAD8_0, newArray[0].ACTIVIDAD8_1, newArray[0].ACTIVIDAD9_1, newArray[0].ACTIVIDAD9_2, newArray[0].ACTIVIDADR],
                    backgroundColor: [
                        'rgba(56, 2, 59, 0.6)',
                        'rgba(162, 136, 227, 0.6)',
                        'rgba(187, 213, 237, 0.6)',
                        'rgba(206, 253, 255, 0.6)',
                        'rgba(204, 255, 203, 0.6)',
                        'rgba(186, 232, 185, 0.6)'
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
                labels: ["Cuest6", "Cuest7"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].CUESTIONARIO6, newArray[0].CUESTIONARIO7],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)'
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
                    data: [newArray[0].PROYECTO, 10 - newArray[0].PROYECTO],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)'

                    ]
                }]
            }
        });
        var ctx = document.getElementById("plaChart");
        var proChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Plataforma", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].PLATAFORMA, 10 - newArray[0].PLATAFORMA],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.6)'

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
                    data: [newArray[0].BITACORA, 10 - newArray[0].BITACORA],
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