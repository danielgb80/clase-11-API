console.log("Entro QR.js");

let imageqr = document.getElementById("imageqr");

const size = "300x300";
const qrText = "https://www.linkedin.com/in/daniel-g-bobadilla/"
const color= "3677D4";

fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${qrText}&bgcolor=${color}`, {method: "GET"
})
.then(data => {
    console.log(data);
    if (data.status == 200) {
        imageqr.src= data.url
    } 
    }).catch(error =>{
        alert("error de carga")
    })

