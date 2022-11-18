function require(text){
    if(text==""){
        return false;
    }
    else{
        return true;
    }
}
function validate_name(){
    let name = document.getElementById('name').value;
    const valid_name =/^[a-zA-Z\s]{4,}$/;
    if(require(name)){
        if(name.match(valid_name)){
            document.getElementById('name_error').innerHTML="";
            return true;
        }
        else{
            document.getElementById("name_error").style.color="red";
            document.getElementById('name_error').innerHTML="Enter valid Name";
            return false;
        }
    }
    else{
        document.getElementById("name_error").style.color="red";
        document.getElementById('name_error').innerHTML="Name is required";
        return(false);
    }
}
function validate_email(req){
    let email = document.getElementById("email").value;
    const mail = /^[a-zA-Z0-9.$_*]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]{2,}$/;
    if(email.match(mail) || email==""){
        if(req==1 && email==""){
            document.getElementById("email_error").style.color="red";
            document.getElementById('email_error').innerHTML="Please Enter Email";
            return false;
        }
        else{
            document.getElementById("email_error").innerHTML="";
            return true;
        }
    }
    else{
        document.getElementById("email_error").style.color="red";
        document.getElementById("email_error").innerHTML = "Enter valid Email";
        return false;
    }
}
function gender_check(message) {
    document.getElementById('gender_error').innerHTML="";
    alert("Hello "+message);
}
function require_gender(){
    if(document.getElementById('male').checked || document.getElementById('female').checked){
        document.getElementById('gender_error').innerHTML="";
        return true;
    }
    else{
        document.getElementById('gender_error').style.color="red";
        document.getElementById('gender_error').innerHTML="Please select Gender";
        return false;
    }
}
function validate_contact(req){
    let number = document.getElementById('contact').value;
    const valid_number =/^[0-9]{10}$/;
    if(number.match(valid_number) || number==""){
        if(req==1 && number==""){
            document.getElementById('contact_error').style.color="red";
            document.getElementById('contact_error').innerHTML="Please Enter Mobile Number";
            return false;
        }
        else{
            document.getElementById('contact_error').innerHTML="";
            return true;
        }
    }
    else{
        document.getElementById('contact_error').style.color="red";
        document.getElementById('contact_error').innerHTML="Enter valid Mobile Number";
        return false;
    }
}
function contact_by_check(contact_by){
    if(contact_by=="req_contact"){
        document.getElementById('req_contact').innerHTML="*";
        document.getElementById('req_email').innerHTML="";
        document.getElementById("email_error").innerHTML="";
        document.getElementById("contact_by_error").innerHTML="";
        return validateContact(1);
    }
    else if(contact_by=="req_email"){
        document.getElementById('req_email').innerHTML="*";
        document.getElementById('req_contact').innerHTML="";
        document.getElementById('contact_error').innerHTML="";
        document.getElementById("contact_by_error").innerHTML="";
        return validate_email(1);        
    }
    else if(contact_by=="req_both"){
        document.getElementById('req_contact').innerHTML="*";
        document.getElementById('req_email').innerHTML="*";
        document.getElementById("contact_by_error").innerHTML="";
        let email = validate_email(1);
        let number = validate_contact(1); 
        return (email && number);
    }
    else{
        return true;
    }
}
function require_contact_by(){
    let selected = false;
    if(document.getElementById('mail').checked){
        selected = true;
        return selected && contact_by_check('req_email');
    }
    else if(document.getElementById('mobile').checked){
        selected = true;
        return selected && contact_by_check('req_contact');
    }
    else if(document.getElementById('both').checked){
        selected = true;
        return selected && contact_by_check('req_both');
    }
    else{
        document.getElementById('contact_by_error').style.color="red";
        document.getElementById('contact_by_error').innerHTML="Please select a way of contact";
        return false;
    }
}
function req_organization(){
    let organization = document.getElementById("organization").value;
    if(require(organization)){
        document.getElementById("organization_error").innerHTML="";
        return true;
    }
    else{
        document.getElementById('organization_error').style.color="red";
        document.getElementById('organization_error').innerHTML="Please Enter Organization Name";
        return false;
    }
}
function change_promo(){
    let val = document.getElementById("state").value;
    if(val){
        document.getElementById("promo").value= val+" - PROMO";
    }
    else{
        document.getElementById("promo").value="";
    }
}
function validate_website(){
    let website = document.getElementById("website").value;
    let web = /^www.+[a-zA-Z0-9.]+.[a-zA-Z]$/;
    if(website.match(web) || website==""){
        document.getElementById("website_error").innerHTML = "";
    }
    else{
        document.getElementById('website_error').style.color="red";
        document.getElementById('website_error').innerHTML = "Enter valid Website";
    }
}
function check_form(){
    let name = validate_name();
    let gender = require_gender();
    let number = require_contact_by();
    let organization = req_organization();
    if(name && gender && number && organization){
        document.getElementById("details").reset();
        document.getElementById("status").style.color="green";
        document.getElementById("status").innerHTML="Success";
    }
    else{
        document.getElementById("status").style.color="red";
        document.getElementById("status").innerHTML="Enter valid Inputs";
    }
}
function reset_form(){
    document.getElementById("name_error").innerHTML = "";
    document.getElementById("gender_error").innerHTML = "";
    document.getElementById("email_error").innerHTML = "";
    document.getElementById("contact_error").innerHTML = "";
    document.getElementById("organization_error").innerHTML = "";
    document.getElementById("contact_by_error").innerHTML = "";
    document.getElementById("website_error").innerHTML = "";
    document.getElementById("name").value= "";
    document.getElementById("email").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("contact").value = "";
    document.getElementById("organization").value = "";
    document.getElementById("state").selectedIndex=0;
    document.getElementById("city").value = "";
    document.getElementById("mail").checked = false;
    document.getElementById("mobile").checked = false;
    document.getElementById("both").checked = false;
    document.getElementById("promo").value= "";
    document.getElementById("text_field").value = "";
    document.getElementById("text_box").value = "";
}