var cardContainer = document.querySelector('.cards-container');
var card = document.querySelectorAll('.card');
var count = 0;
var width = cardContainer.offsetWidth;
var widthCard = card[0].offsetWidth;

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

if(medium.style.backgroundColor = 'orange') medium.style.backgroundColor = "blue"
if(hard.style.backgroundColor = 'orange') hard.style.backgroundColor = "blue"

