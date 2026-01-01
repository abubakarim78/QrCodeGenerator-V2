 let qrInput = document.getElementById("qrInput");
 let qrDisplay = document.getElementById("qrDisplay");
 let qrContainer = document.getElementById("qrContainer");

 function generateQR(){
  qrDisplay.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value;

  qrContainer.classList.add("show-img")
 }

