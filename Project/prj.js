function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){ 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}




function validateForm(){
    var returnval = true;
    clearErrors();

    
    var name = document.forms['myForm']["sname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    
    var phone = document.forms['myForm']["sphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }



    

    return returnval;
}
