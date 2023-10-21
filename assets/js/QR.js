console.log("Entro QR.js");

let imageqr = document.getElementById("imageqr");

fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${qrText}`, {method: "GET"
})
.then(data => {
    console.log(data);
    if (data.status == 200) {
        imageqr.src= data.url
    } 
    }).catch(error =>{
        alert("error de carga")
    })

