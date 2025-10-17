var display = document.getElementById("display");

function setNumber(userNumber){

    // if(userNumber === "*"){
    //     userNumber = "X"
    // }

    display.value += userNumber
};

function clearScreen(){
    display.value = ""
};

function delChar(){
    display.value = display.value.slice(0,-1)
};

function result(){
    var text = display.value;
    display.value = eval(text);  
}