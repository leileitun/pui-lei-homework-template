function animateText() {
  const textElement = document.getElementById('welcome', );

  // Wrap each letter in a span
  const text = textElement.textContent;
  textElement.innerHTML = '';
  for (const letter of text) {
    const span = document.createElement('span');
    span.textContent = letter;
    textElement.appendChild(span);
  }

  // Define the animation
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

// Trigger the animation when the page loads
window.onload = function () {
  animateText();
};

document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});

setTimeout(function() {
  // Display the body content after the delay
  document.body.style.display = 'block';
}, 1000);