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
    var opt = "+-*/%."

    if(text === ""){
        display.value = "";
        alert("Please add an number and operator")
        return
    }else if(opt.includes(text[0]) || opt.includes(text[text.length -1])){
        display.value = "Error";
        return       
    }
    var errorFound = false;
    
    for(var i= 0; i < text.length -1; i++){
        if(opt.includes(text[i]) && opt.includes(text[i + 1])){
            errorFound = true;
            break;
        }
    }
    
    if(errorFound){
        display.value = "Error";
    }else{
        display.value = eval(text)
    }  
}
