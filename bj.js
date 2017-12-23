var clique = 0;


var setupListeners = function(){
  var BoutonCarte = document.getElementById("carte");
  BoutonCarte.addEventListener("click",ajoutImgDansDiv);
  ImageJoueur();
  ImageBanque();
}


var getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

var ImageJoueur = function() {
  N1 = getRandomIntInclusive(0,5)
  image1=document.getElementById("image1")
  image1.src=tab[N1];
}

var ImageBanque = function() {
  N2 = getRandomIntInclusive(0,5)
  image2=document.getElementById("image2")
  image2.src=tab[N2];
}

var creerImg = function (chemin) {
    var img = document.createElement('img');
    img.src = chemin;
    return img;
}

var ajoutImgDansDiv = function () {
    var chemin = "01.BMP"
    var newImg = creerImg(chemin);
	var divJS = document.getElementById('maDiv');
    divJS.appendChild(newImg);
}

tab=["01.BMP","02.BMP","03.BMP","04.BMP","05.BMP","06.BMP","07.BMP","08.BMP","09.BMP","10.BMP"]


window.addEventListener("load",setupListeners);
