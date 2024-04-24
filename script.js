
/* TOP TRACKER TOP TRACKERTOP TRACKERTOP TRACKERTOP TRACKER */

document.addEventListener('scroll', function() {
  const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollFraction = window.scrollY / maxScroll;
  const tracker = document.querySelector('.scroll-tracker');
  tracker.style.width = `${scrollFraction * 100}%`;
});

/* EYE ANIMATION EYE ANIMATION EYE ANIMATION   */

document.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const containerHeight = document.getElementById('eye-animation').clientHeight;
  const scrollFraction = scrollPosition / (containerHeight - windowHeight);

  function updatePartPosition(partId, endPositionX, endPositionY) {
    const part = document.getElementById(partId);
    // scroll fraction normalizat pt animatie
    let positionFraction = Math.min(Math.max(scrollFraction, 0), 1);
    // Calcul poz curenta
    const partPositionX = (positionFraction) * endPositionX;
    const partPositionY = scrollPosition * 0.5; // mov speed ctrl
    part.style.transform = `translate(${partPositionX}px, ${partPositionY}px)`;
  }
  
  updatePartPosition('part1', window.innerWidth * 0.499, 0); 
  updatePartPosition('part2', window.innerWidth * 0.4275, 0); 
  updatePartPosition('part3', window.innerWidth * 0.29, 0); 
  updatePartPosition('part4', window.innerWidth * 0.2375, 0); 
  updatePartPosition('part5', window.innerWidth * 0.135, 0); 
  updatePartPosition('part6', 0, 0); // referinta
  
});
