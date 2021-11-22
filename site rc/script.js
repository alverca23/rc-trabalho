 var bool = false;
function mudarbackground(){
    document.body.style.backgroundColor = "#000";

    if(bool){
        document.body.style.backgroundColor = "#000";    
    }
    else{
        document.body.style.backgroundColor = "#293849";
    }
    bool = !bool;
}

