'use strict'

//Condicional If
// si a = b entonces  as algo


var edad = 34;
var nombre = 'david suarez';


//operadores relacionales >, < , >=, <= ,== ,!=
// OPERADORES LOGICOS AND: && , OR: ||, NEGACION : !

//si pasa esto
if(edad >= 18){
//ejecuta esto
console.log(nombre +' tiene '+edad+' años, es mayor de edad');
    if(edad == 33){
        console.log(' tiene la edad de jesucristo');
    }else if(edad == 22){
        console.log(' tiene 22 anos la ptm');
    }else{
        console.log(' vale monda');    
    }
}
else{
    //si no pasa el condicional has estyo
    console.log(nombre +' tiene '+edad+' años, es menor de edad');
}
// AND

var year=2022
if(year>=2000 && year <=2022 && year!=2018){
    console.log("estamos en la era actual");
}else{
    console.log('estamos en al era post moderna')
}
//OR
if(year==2008 || (year>=2018 && year ==2028)){
    console.log('el año acaba en 8')
}

//