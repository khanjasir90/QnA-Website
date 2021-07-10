$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});


$("#qr-code").on('show.bs.modal',function(event){
    var qrcode = new QRCode(document.getElementById("qr-display"),{
        text : window.location.href,
        width : 128,
        height : 128,
        colorDark : "#5868bf",
	    colorLight : "#ffffff",
	    correctLevel : QRCode.CorrectLevel.H
    })
})

$("#qr-code").on('hidden.bs.modal',function(event){
    document.getElementById("qr-display").innerHTML = ""
})
