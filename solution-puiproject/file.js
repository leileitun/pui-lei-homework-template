function animateText() {
  const textElement = document.getElementById('welcome');

  const text = textElement.textContent;
  textElement.innerHTML = '';
  for (const letter of text) {
    const span = document.createElement('span');
    span.textContent = letter;
    textElement.appendChild(span);
  }

  anime.timeline()
    .add({
      targets: '#welcome span',
      opacity: [0, 1],
      translateY: [20, 0],
      translateZ: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: (el, i) => 50 * i
    })

.add({
    targets: '#welcome span',
      opacity: 1,
      translateY: [0, -20],
      translateZ: 0,
      duration: 1000,
      easing: 'easeInExpo',
      delay: (el, i) => 50 * i
  });
}

setTimeout(function() {
//delaying the page so the animation is more flowy 
  document.body.style.display = 'block';
}, 500);

function animateRow(){
  console.log('Animate!!');
  anime({
    targets: '.row-howto',
    opacity: [0,1], 
    easing: 'easeInQuad',
    delay: 1500,
    delay: anime.stagger(1000),
  });
}

window.onload = function () { 
  animateText();
  animateRow();
};

function clearLocalStorage() {
  localStorage.clear();
}
