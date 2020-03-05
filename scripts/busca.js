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

           /*  console.log(obj); */
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
    document.getElementById("texto").focus();
    salida = `
                <br>
                <div class="card">
                    <h2 onclick="clanInfo();" class="name1 ">
                        ${newArray[0].EQUIPO}   
                    </h2>
                    <div onclick="mundoInfo();" id="mundoActual" class="cost">
                        Mundo ${localStorage.getItem("mundo")}
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
                    <div  class="abilities insignias" >
                        Resumen: <hr>
                        <canvas id="resumen" width="100%" height="70hv"></canvas>
                    </div>
                    <div class="insignias">Insignias conseguidas: <hr>
                        <center>
                            <img onclick="cuestInfo();" id="cuest" title="Misión cuestionarios" src="images/sinInsgCuest.png" />
                            <img onclick="actInfo();" id="act" title="Misión actividades" src="images/sinInsgAct.png" />
                            <img onclick="bitInfo();" id="bit" title="Misión bitácora" src="images/sinInsgBit.png" />
                            <img onclick="proInfo();" id="pro" title="Misión proyecto" src="images/sinInsgPlat.png" />
                            
                            <img onclick="masInfo();" id="mas" title="Misión puntos Extra" src="images/sinInsgPuntos.png" /><span id="por"></span>
                        </center>
                    </div>
                    <div class="power stat" onclick="monedasInfo();">
                        ${parseInt((parseFloat(newArray[0].CALI)+parseFloat(newArray[0].PUNTOEX)) * 100)}<span style="font-size:0.5em;">p</span> 
                    </div>
                    <div class="defense stat" onclick="puntosInfo();">
                        <img title="Puntos y rango" id="rango1" src="images/nivel2.png" />
                    </div>
                    <div class="sheen"></div>   
                    <br id="desglose">
                    <br>
                </div>

                <br>
                <br>
                
                <div  class="card" id="carta">

                    <div id="elemento">
                        <h2 class="name" >
                            Datos Generales
                        </h2>
                        <div id="mundoActualDesg" onclick="mundoInfo();" class="cost">
                            Mundo ${localStorage.getItem("mundo")}
                        </div>
                        <center>
                            <h2 style="color:white;" onclick="clanInfo();" >
                                ${newArray[0].EQUIPO}
                            </h2>
                            
                            <div id="pie">
                                <img id="caracter" src="images/caracter.png" />
                            </div>
                            <div class="abilities" >
                            <h2 style="color:white;">
                                ${newArray[0].NICK}
                            </h2>
                            </div>
                        </center>
                        <h2 class="name">
                            Grupo: <span class="tamaño ">${newArray[0].GRUPO}</span>
                        </h2>
                        <h2 class="name" onclick="asisInfo();" >
                            Asistencias: <span class="tamaño ">${newArray[0].TOTALASIS}</span><progress id="asisMeter" value="${newArray[0].TOTALASIS}" max="16"></progress>
                        </h2>
                        
                        <h2 class="name">
                            Punto Extra: <img class="" id="mas1" src="images/insgPuntos.png" /><span class="" id="por1"></span>
                        </h2>
                        <br>
                        <center>
                            <div class="abilities cali" onclick="finalInfo();">
                                <h2 class="name" >
                                    Calificación Final: 
                                </h2>
                                <hr>
                                <span id="calificacionFinal">${parseInt(newArray[0].FINAL)}</span>
                                <img id="reaccion" src="images/reaccion_neutral.png" >
                            </div>
                            <div class="abilities cali">
                                <br>
                                <span class="ayuda" style="font-size: 2em" onclick="pFinalInfo();"> 
                                    ${parseInt((parseFloat(newArray[0].CALI)+parseFloat(newArray[0].PUNTOEX)) * 100)}<span style="font-size:0.5em;">p</span>
                                </span> <img title="Puntos y rango" id="rango" src="images/nivel2.png" />
                                <h1 id="estado">
                                    REPROBADO
                                </h1>
                            </div>
                            
                        </center>
                        <div class="sheen"></div>
                    </div>
                </div>
                
                <br>
                <br>

                <div  class="card" id="carta2">

                    <div id="elemento2">
                        <h2 class="name">
                            Cuestionarios Previos
                        </h2>
                        <div class="desglo">
                            <img onclick="cuestInfo()" id="cuest1" src="images/insgCuest.png" />
                        </div>
                        <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;"> ${newArray[0].PUNTOSCUES*100}</a> </h4>
                        <center class="insignias">
                            <canvas id="cuestChart" width="100%"></canvas>
                        </center>
                        <center class="abilities">
                            <h4 class="ayuda">Promedio: <a  style="font-size:1.5em;">${newArray[0].PROMCUES}</a></h4>
                        </center>
                        <div class="sheen"></div>
                    </div>
                </div>

                <br>
                <br>
                <div  class="card" id="carta3">

                    <div id="elemento3">
                        <h2 class="name">
                            Actividades
                        </h2>
                        <div class="desglo">
                            <img onclick="actInfo()" id="act1"  src="images/insgAct.png" />
                        </div>
                        <h4 class="ayuda"> Puntos totales: <span style="font-size:1.5em;">${Math.round(newArray[0].PUNTOSACT*100)}</span></h4>
                        <center class="insignias">
                            <canvas id="actChart" width="100%"></canvas>
                        </center>
                        <center class="abilities">
                            <h4 class="ayuda">Promedio: <span style="font-size:1.5em">${newArray[0].PROMACT}</span></h4>
                        </center>
                        <div class="sheen"></div>
                    </div>
                </div>
                <br>
                <br>
                <div  class="card" id="carta4">

                    <div id="elemento4">
                        <h2 class="name">
                            Bitácora
                        </h2>
                        <div class="desglo">
                            <img onclick="bitInfo()" id="bit1"  src="images/insgBit.png" />
                        </div>
                        <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;">${newArray[0].PUNTOSBIT*100}</a></h4>
                        <center class="insignias">
                            <canvas id="bitChart" width="50"></canvas>
                        </center>
                        <br>
                        <center class="abilities">
                            <h4 class="ayuda">Promedio: <a  style="font-size:1.5em;">${newArray[0].BITACORA}</a></h4>
                        </center>
                        <div class="sheen"></div>
                    </div>
                </div>
                <br>
                <br>

                
                <div  class="card" id="carta5">

                    <div id="elemento5">
                        <h2 class="name">
                            Proyecto
                        </h2>
                        <div class="desglo">
                            <img onclick="proInfo()" id="pro1" src="images/insgPlat.png" />
                        </div>
                        <h4 class="ayuda">Puntos totales: <a style="font-size:1.5em;">${newArray[0].PUNTOSPRO*100}</a></h4>
                        <center class="insignias">
                            <canvas id="proChart" width="100%"></canvas>
                        </center>
                        <br>
                        <center class="abilities">
                            <h4 class="ayuda">Promedio: <a  style="font-size:1.5em;">${newArray[0].PROYECTO}</a></h4>
                        </center>
                        <div class="sheen"></div>
                    </div> 
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
    document.getElementById("rango").src = rango;


    var act = "";
    if (newArray[0].PROMACT == 10) {
        act = "images/insgAct.png";
    } else {
        act = "images/sinInsgAct.png";
    }
    document.getElementById("act").src = act;
    document.getElementById("act1").src = act;

    var cuest = "";
    if (newArray[0].PROMCUES == 10) {
        cuest = "images/insgCuest.png";
    } else {
        cuest = "images/sinInsgCuest.png";
    }
    document.getElementById("cuest").src = cuest;
    document.getElementById("cuest1").src = cuest;

    var bit = "";
    if (newArray[0].BITACORA == 10) {
        bit = "images/insgBit.png";
    } else {
        bit = "images/sinInsgBit.png";
    }
    document.getElementById("bit").src = bit;
    document.getElementById("bit1").src = bit;

    var pro = "";
    if (newArray[0].PROYECTO == 10) {
        pro = "images/insgPlat.png";
    } else {
        pro = "images/sinInsgPlat.png";
    }
    document.getElementById("pro").src = pro;
    document.getElementById("pro1").src = pro;

    /* var pla = "";
    if (newArray[0].PLATAFORMA == 10) {
        pla = "images/insgPro.png";
    } else {
        pla = "images/sinInsgPro.png";
    }
    document.getElementById("pla").src = pla;
    document.getElementById("pla1").src = pla; */
    var por = "";
    var por1 = "";
    var mas = "";
    if (newArray[0].PUNTOEX == 1) {
        mas = "images/insgPuntos.png";
        por = "1";
        por1 = "X1";
    } else if (newArray[0].PUNTOEX == 2) {
        mas = "images/insgPuntos.png";
        por = "2";
        por1 = "X2";
    } else {
        mas = "images/sinInsgPuntos.png";
    }
    document.getElementById("por").innerHTML = por;
    document.getElementById("por1").innerHTML = por1;
    document.getElementById("mas").src = mas;
    document.getElementById("mas1").src = mas;

    var ctx = document.getElementById("resumen");
    Chart.defaults.global.defaultFontColor = 'black';
    var resumenChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Actividades', 'Bitácora', ['Cuestionarios', 'previos'], 'Proyecto'],
            datasets: [{
                label: 'Promedio',
                fontColor: '#fff',
                backgroundColor: '#259e2166',
                borderColor: '#076605',
                pointBackgroundColor: '#044702',
                data: [
                    newArray[0].PROMACT, newArray[0].BITACORA, newArray[0].PROMCUES, newArray[0].PROYECTO
                ]
            }]
        },
        options: {
            legend: {
                position: 'none',
            },
            scale: {
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }
        }
    });

    if (localStorage.getItem("mundo") == 1) {
        var ctx = document.getElementById("actChart");
        var actChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Act0", "Act1", "Act2", "Act3", "Act4", "Act5", "ActR"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].ACTIVIDAD0, newArray[0].ACTIVIDAD1, newArray[0].ACTIVIDAD2, newArray[0].ACTIVIDAD3, newArray[0].ACTIVIDAD4, newArray[0].ACTIVIDAD5, newArray[0].ACTIVIDADR],
                    backgroundColor: [
                        'rgba(243, 145, 159, 0.6)',
                        'rgba(208, 97, 112, 0.6)',
                        'rgba(167, 58, 73, 0.6)',
                        'rgba(126, 28, 42, 0.6)',
                        'rgba(120, 19, 14, 0.6)',
                        'rgba(85, 8, 19, 0.6)',
                        'rgba(60, 3, 0, 0.6)'
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
                    data: [newArray[0].CUESTIONARIO1, newArray[0].CUESTIONARIO2, newArray[0].CUESTIONARIO3, newArray[0].CUESTIONARIO4, newArray[0].CUESTIONARIO5],
                    backgroundColor: [
                        'rgba(147, 155, 186, 0.6)',
                        'rgba(93, 106, 152, 0.6)',
                        'rgba(50, 65, 119, 0.6)',
                        'rgba(22, 36, 89, 0.6)',
                        'rgba(5, 17, 57, 0.6)'
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
                        'rgba(255, 227, 194, 0.6)'

                    ]
                }]
            }
        });
        /* var ctx = document.getElementById("plaChart");
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
        }); */
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
                labels: ["Act6", "Act7", "Act8", "Act9", "Ondas", "ActR"],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].ACTIVIDAD6, newArray[0].ACTIVIDAD7, newArray[0].ACTIVIDAD8, newArray[0].ACTIVIDAD9, newArray[0].ONDAS, newArray[0].ACTIVIDADR],
                    backgroundColor: [
                        'rgba(197, 204, 215, 0.6)',
                        'rgba(106, 127, 159, 0.6)',
                        'rgba(47, 74, 116, 0.6)',
                        'rgba(12, 37, 76, 0.6)',
                        'rgba(1, 13, 32, 0.6)',
                        'rgba(0, 8, 21, 0.6)'
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
                    data: [newArray[0].CUESTIONARIO6, newArray[0].CUESTIONARIO7, newArray[0].CUESTIONARIO8, newArray[0].CUESTIONARIO9],
                    backgroundColor: [
                        'rgba(92, 171, 137, 0.6)',
                        'rgba(64, 146, 111, 0.6)',
                        'rgba(42, 120, 87, 0.6)',
                        'rgba(24, 95, 65, 0.6)'
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
                        'rgba(136, 47, 105, 0.6)'

                    ]
                }]
            }
        });
        /* var ctx = document.getElementById("plaChart");
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
        }); */
        var ctx = document.getElementById("bitChart");
        var bitChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Bitácora", ""],
                datasets: [{
                    label: 'Calificación',
                    data: [newArray[0].BITACORA, 10 - newArray[0].BITACORA],
                    backgroundColor: [
                        'rgba(176, 131, 61, 0.6)'
                    ]
                }]
            }

        });
    } else if (localStorage.getItem("mundo") == 3) {

        /*generar paleta http://paletton.com/#uid=55C050kkZm31qv5aYqCuJhzVNc+ */
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
        /* var ctx = document.getElementById("plaChart");
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
        }); */
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

    /* habilidades */
    /* if (newArray[0].HABILIDAD1 == 1) {
        document.getElementById("habilidad1").style.textDecoration = "line-through";

    }
    if (newArray[0].HABILIDAD2 == 1) {
        document.getElementById("habilidad2").style.textDecoration = "line-through";
    }
    if (newArray[0].HABILIDAD3 == 1) {
        document.getElementById("habilidad3").style.textDecoration = "line-through";
    } */

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

    var estado = "";
    if (newArray[0].FINAL < 6) {
        estado = "REPROBADO";
    } else {
        estado = "APROBADO";
    }
    document.getElementById("estado").innerHTML = estado;

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
            descripcion = 'Posee una voz encantadora pero también un carácter fuerte ';
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
            descripcion = 'Posee una voz encantadora pero también un carácter fuerte ';
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
    document.getElementById("habilidad3").innerHTML = '<img class="habilidad"  src="images/habilidad3.png" /> ' + habilidad;
    document.getElementById("descripcion").innerHTML = descripcion;


}

function limpiar() {
    document.getElementById("texto").value = "";
}

function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 5000);
}

//para los demas elementos
var elementosScrollTop = function () {
    // Reveal the button
    var reveal = function () {
        console.log(window.scrollY);
        var elemento = document.querySelector("#elemento");
        var carta = document.querySelector("#carta");
        if (window.scrollY >= 110) {
            /* console.log("se ve"); */
            /*  elemento.style.opacity="1" */
            elemento.style.display = "inline"
            carta.style.opacity = "1"

        } else {
            /* console.log("no se ve"); */
            /* elemento.style.opacity="0" */
            elemento.style.display = "none"
            carta.style.opacity = "0"

        }
    }
    // Listeners
    window.addEventListener('scroll', reveal);

    var reveal2 = function () {
        var elemento = document.querySelector("#elemento2");
        var carta = document.querySelector("#carta2");
        if (window.scrollY >= 1030) {
            /* console.log("se ve"); */
            /*  elemento.style.opacity="1" */
            carta.style.opacity = "1"
            elemento.style.display = "inline"

        } else {
            /* console.log("no se ve"); */
            /* elemento.style.opacity="0" */
            carta.style.opacity="0"
            elemento.style.display = "none"

        }
    }
    // Listeners
    window.addEventListener('scroll', reveal2);

    var reveal3 = function () {
        var elemento = document.querySelector("#elemento3");
        var carta = document.querySelector("#carta3");
        if (window.scrollY >= 1480) {
            /* console.log("se ve"); */
            /*  elemento.style.opacity="1" */
             carta.style.opacity="1"
            elemento.style.display = "inline"

        } else {
            /* console.log("no se ve"); */
            /* elemento.style.opacity="0" */
            carta.style.opacity="0"
            elemento.style.display = "none"

        }
    }
    // Listeners
    window.addEventListener('scroll', reveal3);

    var reveal4 = function () {
        var elemento = document.querySelector("#elemento4");
        var carta = document.querySelector("#carta4");
        if (window.scrollY >= 1860) {
            /* console.log("se ve"); */
            /*  elemento.style.opacity="1" */
             carta.style.opacity="1"
            elemento.style.display = "inline"

        } else {
            /* console.log("no se ve"); */
            /* elemento.style.opacity="0" */
            carta.style.opacity="0"
            elemento.style.display = "none"

        }
    }
    // Listeners
    window.addEventListener('scroll', reveal4);

    var reveal5 = function () {
        var elemento = document.querySelector("#elemento5");
        var carta = document.querySelector("#carta5");
        if (window.scrollY >= 2200) {
            /* console.log("se ve"); */
            /*  elemento.style.opacity="1" */
             carta.style.opacity="1"
            elemento.style.display = "inline"

        } else {
            /* console.log("no se ve"); */
            /* elemento.style.opacity="0" */
            carta.style.opacity="0"
            elemento.style.display = "none"

        }
    }
    // Listeners
    window.addEventListener('scroll', reveal5);

};
elementosScrollTop();
