const span_txt_error=document.querySelector(".txt-error")
const input_email=document.querySelector("#input-email")
const button_send=document.querySelector("#button_send")
const span_ico_error=document.querySelector(".ico-error")

span_ico_error.style.display="none"
span_txt_error.style.display="none"
button_send.addEventListener("click",validarEmail)

function validarEmail() {
    let email= input_email.value

if (email.length>0 && email.includes("@")) {
    alert("Thank, email has been sended successfully");
    span_ico_error.style.display="none"
span_txt_error.style.display="none"
} else{
    span_ico_error.style.display="block"
span_txt_error.style.display="block"
}


}