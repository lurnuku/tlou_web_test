let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/ellie_dina.jpg') {
      myImage.setAttribute ('src','img/ellie_joel.jpg');
    } else {
      myImage.setAttribute ('src','img/ellie_dina.jpg');
    }
}