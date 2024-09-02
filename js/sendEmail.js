
document.getElementById('btn-send').addEventListener('click', function(event) {
    event.preventDefault()
    var txtName = document.getElementById('txt-name').value;
    var txtModel = document.getElementById('txt-model').value;
    var txtYear = document.getElementById('txt-year').value;
    var txtMessage = document.getElementById('txt-message').value;
    var urlSend = "https://wa.me/554197828890?text=Nome:+*"+txtName+"*%0AModelo:+*"+txtModel+"*%0AAno:+*"+txtYear+"*%0AMensagem:+*"+txtMessage+"*";
    window.open(urlSend, '_blank');
})