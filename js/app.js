var nameValue = document.querySelector('#givenName');
var submitButton = document.querySelector('#submitButton');
var body = document.querySelector('body');
var notFound = document.querySelector('#notFound');
var isPresent = false;

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    var currentImage = document.querySelectorAll('img');
    currentImage.forEach (function (image) {
        image.classList.add('hidden');
        notFound.classList.add('hidden');
        var value = nameValue.value.toLowerCase();
        value = value.replace(/ł/g, 'l');
        value = value.replace('katkarzyna', 'kasia');
        value = value.replace('hanna', 'hania');
        value = value.replace('misio', 'michal');
        if (image.getAttribute('src') === 'img/'+value+'.jpg') {
                image.classList.remove('hidden');
                isPresent = true;
            }
             
    })
    if (isPresent === false) {
            notFound.classList.remove('hidden');
        }  
// WERSJA Z TWORZENIEM OBRAZKÓW
//    var namePicture = document.createElement('img');
//    namePicture.setAttribute('url', '../img/'+nameValue.value+'.jpg');
//    console.log(namePicture);
//    body.appendChild(namePicture);
    
})

