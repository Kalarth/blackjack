score_joueur = 0
score_banque = 0

var setupListeners = function(){
  ImageJoueur(carteJoueur);
  ImageBanque(carteBanque);
  var BoutonCarte = document.getElementById("carte");
  BoutonCarte.addEventListener("click",ajoutImgDansDiv);
  var BoutonReste = document.getElementById("reste");
  BoutonReste.addEventListener("click",ajoutImgBanque);
  var BoutonRestart = document.getElementById("rejouer");
  BoutonRestart.addEventListener("click",restart);
}

/* Choisi un indice aleatoire d'une carte dans la liste tab
*/
var getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

var Deletefromtab = function (tab, N){
  tab.splice(N,1);
  console.log(tab);
  return tab
}

var ImageJoueur = function(carteJoueur) {
  var N1 = getRandomIntInclusive(0,51-carteCompteur);
  console.log(N1);
  image2=document.getElementById("image2");
  image2.src=tab[N1];
  carteJoueur.push(tab[N1]);
  ini = tab[N1]; //tout ceci n'est pas tres optimise hehe

  Deletefromtab(tab,N1);
  carteCompteur=carteCompteur+1;

  valeur_ini = RecupValeurCarte(ini);
  score_joueur = score_joueur + valeur_ini;
  panneau_score = document.getElementById("point_joueur");
  panneau_score.innerHTML=score_joueur;
  console.log(carteJoueur);
  return carteJoueur
}


var ImageBanque = function(carteBanque) {
  var N2 = getRandomIntInclusive(0,51-carteCompteur);
  console.log(N2);
  image1=document.getElementById("image1");
  image1.src=tab[N2];
  carteBanque.push(tab[N2]);
  ini_banque = tab[N2]; //tout ceci n'est pas tres optimise non plus hehe

  Deletefromtab(tab,N2);
  carteCompteur=carteCompteur+1;

  valeur_ini_banque = RecupValeurCarte(ini_banque);
  score_banque = score_banque+ valeur_ini_banque;
  panneau_score_banque = document.getElementById("point_banque");
  panneau_score_banque.innerHTML=score_banque;
  console.log(carteBanque);
  return carteBanque
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
  var N3 = getRandomIntInclusive(0,51-carteCompteur);
  var chemin = tab[N3];

  var newImg = creerImg(chemin);
  var divJS = document.getElementById('maDiv');
  divJS.appendChild(newImg);

  Deletefromtab(tab,N3);
  carteCompteur=carteCompteur+1;

  //Recalcule le score en fonction de la nouvelle carte
  carteJoueur.push(chemin);
  score_joueur = score_joueur + RecupValeurCarte(chemin);
  panneau_score = document.getElementById("point_joueur");
  panneau_score.innerHTML=score_joueur;
  console.log(carteJoueur);
  if (score_joueur > 21 ) { //ca ne marche pas
    var perdu = "PERDU";
    console.log(perdu);
  }
  return carteJoueur
}

var ajoutImgBanque = function(){

  var N4 = getRandomIntInclusive(0,51-carteCompteur);
  var chemin = tab[N4];

  var newImg = creerImg(chemin);
  var divJS_banque = document.getElementById('maBanq');
  divJS_banque.appendChild(newImg);

  Deletefromtab(tab,N4);
  carteCompteur=carteCompteur+1;

  carteBanque.push(chemin);
  score_banque = score_banque + RecupValeurCarte(chemin);
  panneau_score = document.getElementById("point_banque");
  panneau_score.innerHTML=score_banque;
  console.log(carteBanque);
  if (score_banque > 21 ) { //ca ne marche pas
    var gagne = "GAGNE";
    console.log(gagne);
  }
  return carteBanque
}


/* calcul des points de la carte
*/
var RecupValeurCarte = function(chemin) {
  var sep=chemin.split('.');
  x=sep[0];
  valeur = x%13;
  if (valeur == 11 || valeur == 12 || valeur == 0 ) {
    return 10
  }
  else {
    return valeur
  }
}

var restart = function(){
  location.reload();
}

//DEBUT

var tab=["01.BMP","02.BMP","03.BMP","04.BMP","05.BMP","06.BMP","07.BMP","08.BMP","09.BMP","10.BMP","11.BMP","12.BMP","13.BMP","14.BMP","15.BMP","16.BMP","17.BMP","18.BMP","19.BMP","20.BMP","21.BMP","22.BMP","23.BMP","24.BMP",
"25.BMP","26.BMP","27.BMP","28.BMP","29.BMP","30.BMP","31.BMP","32.BMP","33.BMP","34.BMP","35.BMP","36.BMP","37.BMP","38.BMP","39.BMP","40.BMP","41.BMP","42.BMP","43.BMP","44.BMP","45.BMP","46.BMP","47.BMP","48.BMP","49.BMP"
,"50.BMP","51.BMP","52.BMP"];

var val = [];
var carteJoueur=[];
var carteBanque=[];
var carteCompteur=0;

window.addEventListener("load",setupListeners);
