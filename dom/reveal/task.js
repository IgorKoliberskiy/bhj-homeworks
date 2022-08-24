const reveal = Array.from(document.querySelectorAll(".reveal"));

for (let i = 0; i < reveal.length; i++) {
  window.addEventListener('scroll', () => {
    const revealTop = reveal[i].getBoundingClientRect().top;
    const revealBottom  = reveal[i].getBoundingClientRect().bottom;
    
    if (revealTop > window.innerHeight || revealBottom < 0) {
      reveal[i].classList.remove("reveal_active");
    } else {
      reveal[i].classList.add("reveal_active");
    }
  }
)}
