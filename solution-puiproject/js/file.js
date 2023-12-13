function animateText() {
  const welcomeText = document.getElementById('welcome');

  const text = welcomeText.textContent;
  welcomeText.innerHTML = '';

  for (const letter of text) {
    const span = document.createElement('span'); //using span element to keep flow of the text to make animation
    span.textContent = letter;
    welcomeText.appendChild(span);
  }

  anime.timeline()
    .add({
      targets: '#welcome span',
      opacity: [0, 1],
      easing: 'easeOutExpo', //from animejs.com documentation 
      delay: (el, i) => 50 * (i+1) //learning delaying element animation from stackoverflow; this introduces different delays for each element subsequent to it
    })
}

setTimeout(function() {
//trying and delaying the page by a some milliseconds so the animation is more flowy 
  document.body.style.display = 'block';
}, 500);

function animateRow(){
  console.log('Animate!!');
  anime({
    targets: '.row-howto',
    opacity: [0,1], 
    easing: 'easeInQuad',
    delay: anime.stagger(1000), //to create a spaced stagger effect; from anime js library
  });
}

window.onload = function () { 
  animateText();
  animateRow();
};

