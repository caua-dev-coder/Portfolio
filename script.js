let image = document.querySelector('projectImgsLinks');
window.sr = ScrollReveal ({reset: true});

sr.reveal(".about-me", {duration: 1500})
sr.reveal(".skills", {duration: 1500})
sr.reveal(".projetos", {duration: 1500})
sr.reveal(".contact", {duration: 1500})

function showMessage() {
  let message = document.createElement('p');
  message.innerHTML = 'Clique para ver o projeto !';
  document.body.appendChild(message);
}

image.addEventListener('mouseenter', showMessage);