// Funcion que realiza una suma

function suma (){
    let n1 = 0
    let n2 = 0
    let suma = 0
    alert('Este sistema procesa dos números ingresados por el usuario y calcula su suma, mostrando el resultado.')

    n1 = parseInt(prompt('Ingrese el primer valor a sumar'))
    n2 = parseInt(prompt('ingrese el segundo valor a sumar'))

    suma = n1 + n2

    alert('El resultado de la suma es'+ suma)

}

// Funcion que realiza las cuatro operaciones basicas

function operacionesBasicas(){
    let n1 = 0
    let n2 = 0
    let suma = 0 
    let resta = 0 
    let division = 0
    let multiplicacion = 0
    alert('Este programa solicita al usuario dos números, luego ejecuta las cuatro operaciones básicas (suma, resta, multiplicación y división) y muestra los resultados.')

    n1 = parseFloat(prompt('ingrese el primer valor'))
    n2 = parseFloat(prompt('ingrese el segundo valor'))

    suma = n1 + n2
    resta = n1 - n2
    division = n1 / n2
    multiplicacion = n1 * n2

    alert('El resultado de la suma es' + suma)
    alert('El resultado de la resta es' + resta) 
    alert('El resultado de la division es' + division)
    alert('El resultado de la multilicacion es'+ multiplicacion)

}

// Funcion que determina el cuadrado de un numero

function cuadradoDeUnNumero(){
    let n1 = 0 
    let r1 = 0
    alert('Este programa calcula el cuadrado de un número ingresado por el usuario y muestra el resultado.')

    n1 = parseFloat(prompt('Ingrese el valor '))

    r1 = n1 * n1

    alert('El resultado de la operacion es' + r1)
    
}

// Funcion que convierte metros en pulgadas y centimetros 

function conversionDeUnidades(){
    let m = 0 
    let c = 0
    let p = 0
    alert('Este programa convierte un valor ingresado en metros a centímetros y pulgadas, mostrando ambos resultados.')

    m = parseFloat(prompt('ingrese los metros'))

    c = m * 100
    p = m * 39.37

    alert('El resultado de la operacion en centimetros es' + c)
    alert('El resultado de la operacion en pulgadas es' + p)
    
}

// Funcion que determina el area de un triangulo

function areaDeUnTriangulo(){
    let b = 0
    let a = 0
    let p = 0 
    alert('Este programa calcula el área de un triángulo a partir de la base y la altura ingresadas por el usuario y muestra el resultado.')

    b = parseFloat(prompt('Ingrese la base'))
    a = parseFloat(prompt('Ingrese la altura'))

    p = (b * a) / 2

    alert('El area del triangulo es' + p)

}

// Funcion que nos da la ganacia total obtenida de una inversion

function inversionDeCapital(){
    let c = 0 
    let t = 0
    let g = 0
    alert('Este programa calcula las ganancias generadas a partir de una inversión, según los datos ingresados por el usuario.')

    c = parseInt(prompt('Ingrese el capital a invertir'))
    t = parseInt(prompt('Ingrese el numero de años'))

    g = ((c*0.017)*12)*t+c

    alert('las ganancia obtenidas son' + g)

}

// Funcion que determina el numero mayor de dos numeros

function numeroMayor(){
    let n1 = 0 
    let n2 = 0
    alert('Este programa compara dos números ingresados por el usuario y determina cuál es el mayor.')

    n1 = parseFloat(prompt('Ingrese el primer numero'))
    n2 = parseFloat(prompt('Ingrese el segundo numero'))

    if (n1>n2){
        alert('El numero mayor es' + n1)
    }else if (n2>n1){
        alert('El numero mayor es ' + n2)
    }else {
        alert('Ambos numeros son iguales')
    }
       
}

// Funcion que dtermina el numero menor de dos numeros

function numeroMenor(){
    let n1 = 0
    let n2 = 0
    alert('Este programa compara dos números ingresados por el usuario y determina cuál es el menor')
     
    n1 = parseFloat(prompt('Ingrese el primer numero'))
    n2 = parseFloat(prompt('Ingrese el segundo numero'))

    if (n1<n2){
        alert('El numero menor es ' + n1)
    }else if(n2<n1){
        alert('El numero menor es ' + n2)
    }else{
        alert('ambos numeros son iguales')
    }

}

// Funcion que determina si un numero es par o impar

function parImpar(){
    let n1 = 0
    alert('Este programa analiza un número ingresado por el usuario y determina si es par o impar.')

    n1 = parseFloat(prompt('Ingrese el numero'))

    if (n1 % 2 === 0){
        alert('El numero es par')
    }else{
        alert('El numero es impar')
    }

}

// Funcioin que determina el promedio de un estudiante

function promedioEstudiante(){
    let n1 = 0
    let n2 = 0
    let n3 = 0
    let n4 = 0
    let n5 = 0
    let n6 = 0
    let n7 = 0
    let p = 0
    alert('Este programa evalúa el promedio de un estudiante en una escala de notas de 1 a 5 y determina si aprobó o no, considerando 3 como la nota mínima para pasar.')

    n1 = parseFloat(prompt('ingrese la primera nota'))
    n2 = parseFloat(prompt('ingrese la segunda nota'))
    n3 = parseFloat(prompt('ingrese la tercera nota'))
    n4 = parseFloat(prompt('ingrese la cuarta nota'))
    n5 = parseFloat(prompt('ingrese la quinta nota'))
    n6 = parseFloat(prompt('ingrese la sexta nota'))
    n7 = parseFloat(prompt('ingrese la septima nota'))

    p = (n1+n2+n3+n4+n5+n6+n7)/7

    if (p<3){
        alert('El estudiante aprobo con' + p)
    }else{
        alert('el estudiante reporbo con' + p)
    }
 
}

// Funcion que determina el precio a pagar en una fruteria 

function Fruteria(){
    let p = 4500
    let k = 0 
    let d = 0
    alert('Este programa calcula el monto a pagar por un cliente en una Fruteria, aplicando un descuento basado en la cantidad de kilos comprados, considerando que el precio por kilo es de 4500.')

    k = parseFloat(prompt('Ingrese el numero de kilos a comprar'))

    if (k<2){
        alert('No tiene descuento')
    }else if((k>=3) && (k<=5)){
        alert('Tiene un descuento del 10 porciento')
        d = (k*p)-((k*p)*0.10)
        alert('El valor a pagar es' + d)
    }else if((k>=6) && (k<10)){
        alert('Tiene un descuento del 15 porciento')
        d = (k*p)-((k*p)*0.15)
        alert('El valor a pagar es' + d)
    }else if((k>=10)){
        alert('Tiene un descuento del 20 porciento')
        d = (k*p)-((k*p)*0.20)
        alert('El valor a pagar es' + d)
    }

}

// Funcion que determina el salario semanal de un trabajador

function horasExtras(){
    let ht = 0
    let hn = 10000
    let he = 20000
    alert('Este programa calcula el salario semanal de un obrero en función del número de horas trabajadas.')

    ht = parseFloat(prompt('ingrese el numero de horas trabajadas'))

    if (ht<=40){
        s = ht*hn
        alert('Su salario es de' + s)
    }else {
        s = ((40*hn)+(he*(ht-40)))
        alert('Su salario es de' + s)
    }

}

// Funcion que solicita un numero indefinidamente y los suma hasta que ingresemos cero

function sumaNumerosDiferentes0(){
    let n = 1
    let s = 0
    alert('Este programa solicita números de forma indefinida y los va sumando hasta que el usuario ingrese un cero. Al final, muestra la suma total de los números ingresados.')

    while (n!=0) {
        n = parseFloat(prompt('Ingrese el numero '))
        s = s + n
    }

    alert('El resultado de la operacion es'+ s)
} 

// Funcion que muestra en pantalla los numeros de 1 a 10

function imprimirDe1A10(){
    let n = 0
    alert('Este programa muestra en pantalla los números del 1 al 10 en orden secuencial.')
    
    while (n<10) {
        n = n + 1
        alert(n)
    }
}

// Funcion que muestra en pantalla los numeros de 100 a 0 de 10 e 10

function imprimirDe100A0(){
    let n = 110
    alert('Este programa muestra en pantalla los números del 100 al 0, disminuyendo de 10 en 10.')

    while(n>=0.1){
        n = n - 10
        alert(n)
    }

}

// Funcion que nos pide un numero y nos muestra la tabla de multiplicar de 1 a 10

function tablaDeMultiplicar(){
    let n = 0
    let n1 = 0
    let n2 = 0
    alert('Este programa solicita un número al usuario y muestra su tabla de multiplicar del 1 al 10.')

    n = parseFloat(prompt('Ingrese el numero'))
     while (n2<10) {
        n2 = n2 + 1
        n3 = n * n2
        alert(n + 'x' + n2 + '='+ n3)
     }

}

// Funcion que simula a un cajero electronico

function cajeroElectronico(){
    let vr = 0
    let ns = 1000000
    alert('Este programa simula el funcionamiento de un cajero electrónico, permitiendo al usuario retirar dinero.')
    alert('Bienvenido al cajero electronico')

    while ((vr<1000000) && (ns>0)){
        vr = parseFloat(prompt('Ingrese el monto a retirar'))
        ns = ns - vr 
        if (ns<0) {
            alert('No tiene saldo disponible')
        }else {
            alert('¡Retiro exitoso!. Saldo restante' + ns)
        }if (ns == 0){
            alert('Su saldo se ha agotado. Gracias por usar el cajero.')
            break
        }
    }
}

// Funcion que nos muestra los numeros de 0 a 1000 de 100 en 100

function numerosHasta1000(){
    alert('Este programa muestra en pantalla los números del 0 al 1000, aumentando de 100 en 100.')
    for (let i = 0; i <= 1000; i += 100) {
    alert(i)
}

}

function promedio2() {
    let materia = "";
    let estudiante = "";
    let nNotas = 0;
    let calificacion = 0;
    let sumaNotas = 0;
    let promedio = 0;
    let iteracion = 0;

    materia = prompt("ingrese la materia que imparte");
    estudiante = prompt("ingrese los nombres del estudiante");
    nNotas = parseFloat(prompt("ingrese el numeo de notas o calificacio"));


    while
     (iteracion<nNotas){

        calificacion = parseFloat(prompt("ingrese calificacion"));
        sumaNotas = sumaNotas + calificacion;
        iteracion = iteracion + 1;
    }
    promedio = sumaNotas/nNotas;

    if(promedio>2.9) {
        alert ("el estudiante" + estudiante + "APROBO LA MATERIA DE" + materia + " CON EL PROMEDIO DE " + promedio)
    }
    else {
        alert (" EL ESTUDIANTE " + estidiante + " REPROBO LA MATERIA DE " + materia + " CON UN PROMEDIO DE " + promedio)
    }
}
