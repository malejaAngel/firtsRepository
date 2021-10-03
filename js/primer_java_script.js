//alert("primer java script en el .js");

/*variables*/
var nombre="Pepito";
var edad=15;
var peso=74.5;
var masculino=true;
var materias;

/* alert sirve para mostrar informacion*/
/*
alert("nombre"+ nombre);
alert("peso"+ peso);
alert("materias"+ materias);
*/

// para mostrar cuadro de dialogo suma ejemplo

/*
var numero1= prompt ("ingresar numero 1");
var numero2= prompt ("ingresar numero 2");
var resultado= parseInt(numero1) + parseInt(numero2);
alert("el resultado de la suma es: "+resultado);

document.write("<h6>el resultado de la suma es: "+resultado+" ")
document.write("<h1 class='display-5'> el resultado de la suma es: "+resultado+"</h1>");
*/

//arreglos
document.write("<center>");
document.write("<h2>EJEMPLO ARREGLOS </h2>");
var materias=["ingles", "matematicas", "fisica", 445, false];
document.write("<br \>");
document.write(materias.join("<br \>"));
document.write("<br \>");

//para ordenar sort
document.write(materias.sort());

//para agregar en la ultima posicion se usa: length
materias[materias.length]="fisica";

//para borrar la ultima posicion se usa: pop
materias.pop();

//para imprimir en la pagina se usa: document.write
document.write(materias.join(":"));
document.write("<br \>");
document.write("<br \>");
document.write("la materia en la posicion 2 es:" + materias[1]);
document.write("<br \>");document.write("<br \>");

//CICLOS
document.write("<h2>EJEMPLO CICLOS</h2>");
//ejemplo for
for(i=1;i<10;i+=3)
{
    document.write("<br \> i => esta en el valor: "+i);
}
document.write("<br \>");

//ejemplo while
var j=4;

while(j<=10)
{
    document.write("<br \> j => esta en el valor: "+j);
    j++;
}

//FUNCIONES
function sumar(){
    alert("ingreso a función");
    var numero_1_formulario = document.getElementById("numero1").value;
    var numero_2_formulario = document.getElementById("numero2").value;
    var sumatoria=parseInt(numero_1_formulario) + parseInt(numero_2_formulario);
    alert("sumatoria: "+sumatoria);

}

function sumar1(numero_1,numero_2){
    var sumatoria = numero_1+ numero_2;
    return sumatoria;
}

var sumatoria_global = sumar1(54,21);
alert("suamtoria_global"+sumatoria_global);


var sumatoria_global = sumar1(54, 21);
/*alert("sumatoria_global"+sumatoria_global);*/


var nombre= "Pepito perez";
/*alert("nombre originalmente "+nombre);
alert("nombre a mayusculas "+nombre.toUpperCase());
alert("nombre a minusculas "+nombre.toLowerCase());
alert("letra en posicion 8 "+nombre.charAt(8));*/
//alert("letra i que posicion esta "+nombre.indexOf(" "));
//var espacio_nombre = nombre.indexOf(" ");
/*alert("espacio esta en posicion "+nombre.indexOf(" "));
alert("espacio_nombre "+espacio_nombre);
alert("substring "+nombre.substring(0, 6));*/
/*alert("apellido "+nombre.substring(espacio_nombre));

alert("nombre "+nombre.substring(0, espacio_nombre));*/

var elementos_tipo_parrafo = document.getElementsByTagName("p");
alert("mostrar etiqueta 0 "+elementos_tipo_parrafo[7].innerHTML);

var parrafo1 = document.getElementById("parrafo_pruebas1");
parrafo1.innerHTML ="cambiar parrafo";



var resultado_resta= 4546;
//funcion global
function operaciones_matematicas(){
    suma1();
    resta();
    multiplicacion();
    var boton_sumar = document.getElementById("boton_sumar");
    boton_sumar.setAttribute("class", "btn btn-success");
    //funcion locales
    function suma1()
    {
        var numero_1_formulario = document.getElementById("numero1").value;
        var numero_2_formulario = document.getElementById("numero2").value;
        var sumatoria = parseInt(numero_1_formulario) + parseInt(numero_2_formulario);
        alert("suma es igual a "+sumatoria);
    }
    function resta()
    {
        var numero_1_formulario = document.getElementById("numero1").value;
        var numero_2_formulario = document.getElementById("numero2").value;
        var sumatoria = parseInt(numero_1_formulario) - parseInt(numero_2_formulario);
        alert("resta es igual a "+sumatoria);
    }
    function multiplicacion(){
        var numero_1_formulario = document.getElementById("numero1").value;
        var numero_2_formulario = document.getElementById("numero2").value;
        var sumatoria = parseInt(numero_1_formulario) * parseInt(numero_2_formulario);
        alert("multiplicacion es igual a "+sumatoria);
    }

}  
var etiqueta_nueva = document.createElement("h1");
var contenido_titulo_nuevo = document.createTextNode("Titulo dinamico");
etiqueta_nueva.appendChild(contenido_titulo_nuevo);
document.getElementById("caja_dinamica").appendChild(etiqueta_nueva);

