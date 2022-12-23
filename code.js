let number = ""
let display = document.getElementById('monitor')
let numA = 0
let numB = 0 
let AB = new Boolean(true);
let result = 0
let calc = "undefined"

function invert(){
    number = eval(number)
    number = (-1 * number)
    update();
    number = "" + number
}

function ac(){ 
number = 0
numA = 0
numB = 0
calc = "undefined"
    update()
number = ""
    }

function vig(){ 
if (number.includes(".")){
console.log('error')
    }
else {
    number += "."
    update()


}
}
function percent(){ 
    number = eval(number)
    number = (number / 100)
    update();
    number = "" + number
        }

function dell(){ 
    number = number.slice(0, -1);
if (number != "") {
    update()
}
else if (number !== "-"){
    number = 0
    update()
    number = ""
}
else {
    number = 0
    update()
    number = ""
}


    }

function one(){ // funções para os botões numericos 
number += "1"
update()
}
function two(){ 
number += "2"
update()
}
function three(){ 
number += "3"
update()
}
function four(){ 
number += "4"
update()
}
function five(){ 
number += "5"
update()
}
function six(){ 
number += "6"
update()
}
function seven(){ 
number += "7"
update()
}
function eight(){ 
number += "8"
update()
}
function nine(){ 
number += "9"
update()
}
function zero(){ 
number += "0"
update()
}
// fim da funções para os botões numericos 

function plus(){ // funções para o mais 
if (numA == "0") {  //primeiro click
calc = "+"
console.log(calc)
numA = number
number = "0"
update()
number = ""
}
else if (numA !== "0" && numB == "0"){ // segundo click e resultado
numBEqualZero()


}
}  // fim funções do botõe mais 

function minus(){ // funções para o menos 
    if (numA == "0") {  //primeiro click
    calc = "-"
    console.log(calc)
    numA = number
    number = "0"
    update()
    number = ""
    }
    else if (numA !== "0" && numB == "0"){ // segundo click e resultado
    numBEqualZero()
    
    
    }
    }  // fim funções do botõe menos 

    function multi(){ // funções para o multiplicação 
        if (numA == "0") {  //primeiro click
        calc = "*"
        console.log(calc)
        numA = number
        number = "0"
        update()
        number = ""
        }
        else if (numA !== "0" && numB == "0"){ // segundo click e resultado
        numBEqualZero()
        
        
        }
        }  // fim funções do botõe multiplicação 

        function divisao(){ // funções para o divisão 
            if (numA == "0") {  //primeiro click
            calc = "/"
            console.log(calc)
            numA = number
            number = "0"
            update()
            number = ""
            }
            else if (numA !== "0" && numB == "0"){ // segundo click e resultado
            numBEqualZero()
            
            
            }
            }  // fim funções do botõe divisão 





function resultB(){ // função do botão resultado
if (numA !== 0 && numB == 0){
numBEqualZero()
}   



} // fim da função do botão resultado 

function update(){ // função para atualizar 
    display.innerText = number
    console.log(number + " number / " + numA + " numA / " + " " + calc + " / " + numB + " numB")


}

function numBEqualZero(){ // caso tenha que repetir num B equal zero
    numB = number
    result = numA + calc + numB
    number = eval(result)
    update()
    numA = 0
    numB = 0
 
}