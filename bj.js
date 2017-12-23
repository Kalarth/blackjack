
var setupListeners = function(){
  var BoutonCarte = document.getElementById("carte");
  BoutonCarte.addEventListener("click",ajoutImgDansDiv);
  ImageJoueur();
  ImageBanque();
  var ActualisationScore = document.getElementById("carte");
  ActualisationScore.addEventListener("click",ScoreJoueur);
}

/* Choisi un indice aleatoire d'une carte dans la liste tab
*/
var getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

var ImageJoueur = function() {
  N1 = getRandomIntInclusive(0,53)
  image1=document.getElementById("image1")
  image1.src=tab[N1];
}


var ImageBanque = function() {
  N2 = getRandomIntInclusive(0,53)
  image2=document.getElementById("image2")
  image2.src=tab[N2];
}

/* Lorsque le joueur clik sur "carte", creation d'une nouvelle image
   l'image est ajoutee a coté de la premiere carte
*/
var creerImg = function (chemin) {
    var img = document.createElement('img');
    img.src = chemin;
    return img;
}

var ajoutImgDansDiv = function () {
    N3 = getRandomIntInclusive(0,53)
    var chemin = tab[N3]
    var newImg = creerImg(chemin);
	var divJS = document.getElementById('maDiv');
    divJS.appendChild(newImg);
}


/* Je n'ai aucune idee de comment faire
*/
var ScoreJoueur = function() {

}

tab=["01.BMP","02.BMP","03.BMP","04.BMP","05.BMP","06.BMP","07.BMP","08.BMP","09.BMP","10.BMP","11.BMP","12.BMP","13.BMP","14.BMP","16.BMP","17.BMP","18.BMP","19.BMP","20.BMP","21.BMP","22.BMP","23.BMP","24.BMP","25.BMP",
"26.BMP","27.BMP","28.BMP","29.BMP","30.BMP","31.BMP","32.BMP","33.BMP","34.BMP","35.BMP","36.BMP","37.BMP","38.BMP","39.BMP","40.BMP","41.BMP","42.BMP","43.BMP","44.BMP","45.BMP","46.BMP","47.BMP","48.BMP","49.BMP","50.BMP",
"51.BMP","52.BMP","53.BMP","54.BMP"]

score=[]

window.addEventListener("load",setupListeners);
