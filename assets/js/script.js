var cardContainer = document.querySelector('.cards-container');
var card = document.querySelectorAll('.card');
var count = 0;
var width = cardContainer.offsetWidth;
var widthCard = card[0].offsetWidth;
var main = document.querySelector('.main')
var menuJeu = document.getElementById('pop-jeu')

var easy = document.getElementById('easy')
var medium = document.getElementById('medium')
var hard = document.getElementById('hard')
var extrem = document.getElementById('extrem')

var waifu = document.getElementById('waifu')
var pokemon = document.getElementById('pokemon')
var genshin = document.getElementById('genshin')

var difficulty;



window.addEventListener('resize', function () {
    width = cardContainer.offsetWidth;
    widthCard = card[0].offsetWidth;
});

for (let index = 0; index < card.length; index++) {
}



/* function next() {
    count++;
    cardContainer.style.transform = `translateX(-${widthCard * count}px)`;

}

function prev() {
    count--;
    cardContainer.style.transform = `translateX(${widthCard * Math.abs(count)}px)`;

}
 */

function chargeGame(){
        main.style.display = "none"

        menuJeu.style.display = "flex" 
}

easy.addEventListener('click', function() {

    
    if (hard.style.backgroundColor == 'red' || medium.style.backgroundColor == 'red' || extrem.style.backgroundColor == 'red' ) {
        hard.style.backgroundColor = 'rgb(29, 174, 126)' 
        medium.style.backgroundColor = 'rgb(29, 174, 126)'
        extrem.style.backgroundColor = 'rgb(29, 174, 126)'
    }
    
    easy.style.backgroundColor = 'red'
})

medium.addEventListener('click', function() {


    if (hard.style.backgroundColor == 'red' || easy.style.backgroundColor == 'red' || extrem.style.backgroundColor == 'red' ) {
        hard.style.backgroundColor = 'rgb(29, 174, 126)' 
        easy.style.backgroundColor = 'rgb(29, 174, 126)'
        extrem.style.backgroundColor = 'rgb(29, 174, 126)'
    }
    
    medium.style.backgroundColor = 'red'
})

hard.addEventListener('click', function() {


    if (medium.style.backgroundColor == 'red' || easy.style.backgroundColor == 'red' || extrem.style.backgroundColor == 'red' ) {
        medium.style.backgroundColor = 'rgb(29, 174, 126)' 
        easy.style.backgroundColor = 'rgb(29, 174, 126)'
        extrem.style.backgroundColor = 'rgb(29, 174, 126)'
    }
    
    hard.style.backgroundColor = 'red'
})

extrem.addEventListener('click', function() {


    if (medium.style.backgroundColor == 'red' || easy.style.backgroundColor == 'red' || hard.style.backgroundColor == 'red' ) {
        medium.style.backgroundColor = 'rgb(29, 174, 126)' 
        easy.style.backgroundColor = 'rgb(29, 174, 126)'
        hard.style.backgroundColor = 'rgb(29, 174, 126)'
    }
    
    extrem.style.backgroundColor = 'red'
})
                     
waifu.addEventListener('click', function() {


    if (pokemon.style.backgroundColor == 'red' || genshin.style.backgroundColor == 'red') {
        genshin.style.backgroundColor = 'rgb(29, 174, 126)' 
        pokemon.style.backgroundColor = 'rgb(29, 174, 126)'
    }
    
    waifu.style.backgroundColor = 'red'
})
                     
genshin.addEventListener('click', function() {


    if (pokemon.style.backgroundColor == 'red' || waifu.style.backgroundColor == 'red') {
        waifu.style.backgroundColor = 'rgb(29, 174, 126)' 
        pokemon.style.backgroundColor = 'rgb(29, 174, 126)'
    }
    
    genshin.style.backgroundColor = 'red'
})
                     
pokemon.addEventListener('click', function() {


    if (waifu.style.backgroundColor == 'red' || genshin.style.backgroundColor == 'red') {
        genshin.style.backgroundColor = 'rgb(29, 174, 126)' 
        waifu.style.backgroundColor = 'rgb(29, 174, 126)'
    }
    
    pokemon.style.backgroundColor = 'red'
})
                     

/* hboiubrezpogoeruzigez */

var allCard = []
var difficulty, theme, griltete;
var gril = document.getElementById('gril')
var jeu = document.getElementById('nilou')
var button = document.getElementById('jouer');

/* chronometre */

var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
function chrono() {
    end = new Date()
    diff = end - start
    diff = new Date(diff)
    var msec = diff.getMilliseconds()
    var sec = diff.getSeconds()
    var min = diff.getMinutes()
    var hr = diff.getHours() - 1
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    if (msec < 10) {
        msec = "00" + msec
    }
    else if (msec < 100) {
        msec = "0" + msec
    }
    document.getElementById("chrono").innerHTML = hr + ":" + min + ":" + sec + ":" + msec + "⏰"
    timerID = setTimeout("chrono()", 10)
}
function chronoStart() {
    start = new Date()
    chrono()
}

/* algo pour la gril */


function truc2() {

    let themes;

    if (pokemon.style.backgroundColor == 'red') {
        themes = 'pokemon'
    }
    else if (waifu.style.backgroundColor == 'red') {
        themes = 'waifu'
    }
    else if (hard.style.backgroundColor == 'red') {
        themes = 'genshin'
    }
    return themes
}



function truc() {

    if (easy.style.backgroundColor == 'red') {
        difficulty = 6
    }
    else if (medium.style.backgroundColor == 'red') {
        difficulty = 8
    }
    else if (hard.style.backgroundColor == 'red') {
        difficulty = 12
    }
    else if (extrem.style.backgroundColor == 'red') {
        difficulty = 20
    }
}

function start1(){
    menuJeu.style.display ="none"
}

function fillCardArray() {
    var randCard = Math.floor(Math.random() * (201 - 1)+1)
        if (allCard.includes(randCard) == false) {
            allCard.push(randCard);
            allCard.push(randCard);
        } else fillCardArray();
}

button.addEventListener('click', function () {
    truc()
    var dossier = truc2()

    // On remplit AllCard pour sélectionner par la suite une valeur random à l'intérieur
    for (let index = 0; index < (difficulty**2) /2; index++) {
        fillCardArray();
    }


    if (griltete != undefined) jeu.removeChild(griltete);
       
    if (difficulty == undefined ) {

        var para = document.createElement("p")
        var erreur = document.createTextNode('faut choisir un thème avant.')
        para.appendChild(erreur)
        gril.appendChild(para)

    } else {

        chronoStart();

        griltete = document.createElement('table')
        var grilcorp = document.createElement('tbody')

        for (let index = 0; index < difficulty; index++) {
            var row = document.createElement('tr')
            for (let i = 0; i < difficulty; i++) {
                var random = Math.floor(Math.random() * (allCard.length-1)+1);
                var imgSrc = `./assets/img/themes/${dossier}/${dossier}${allCard[random - 1]}.jpeg`
                var cas = document.createElement("td")
                var img = document.createElement('img')
                img.src = imgSrc

                allCard.splice(random-1,1);

                cas.appendChild(img)
                row.appendChild(cas)

            }
            grilcorp.appendChild(row)
        }
        console.log(allCard);
        griltete.appendChild(grilcorp);
        jeu.appendChild(griltete)

    }

})
