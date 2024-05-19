function handleMouseEnter() {
  const infoId = this.getAttribute('data-info');
  const infoCard = document.getElementById(infoId);
  infoCard.style.display = 'flex';

  const detailId = this.getAttribute('data-detail');
  const detailCard = document.getElementById(detailId);
  detailCard.style.display = 'none';

  const tagsId = this.getAttribute('data-tags');
  const tags = document.getElementById(tagsId);
  tags.style.display = 'none';

  const containerId = this.getAttribute('data-video');
  const container = document.getElementById(containerId);
  container.style.display = 'block';
  container.querySelector('video').play();

}

function handleMouseLeave() {
  const infoId = this.getAttribute('data-info');
  const infoCard = document.getElementById(infoId);
  infoCard.style.display = 'none';

  const detailId = this.getAttribute('data-detail');
  const detailCard = document.getElementById(detailId);
  detailCard.style.display = 'block';

  const tagsId = this.getAttribute('data-tags');
  const tags = document.getElementById(tagsId);
  tags.style.display = 'flex';

  const containerId = this.getAttribute('data-video');
  const container = document.getElementById(containerId);
  container.style.display = 'none';
  const video = container.querySelector('video');
  video.pause();
  video.currentTime = 0;
}

function setupEventListeners() {
  document.querySelectorAll('#projectcard').forEach(item => {
    item.addEventListener('mouseenter', handleMouseEnter);
    item.addEventListener('mouseleave', handleMouseLeave);
  });
}

function removeEventListeners() {
  document.querySelectorAll('#projectcard').forEach(item => {
    item.removeEventListener('mouseenter', handleMouseEnter);
    item.removeEventListener('mouseleave', handleMouseLeave);
  });
}

function updateEventListeners() {
  if (window.innerWidth >= 992) {
    setupEventListeners();
  } else {
    removeEventListeners();
  }
}


updateEventListeners();
window.addEventListener('resize', updateEventListeners);



// document.querySelector('.projectcard').addEventListener('mouseenter', function() {
//   this.classList.add('custom-cursor');
// });

// document.querySelector('.projectcard').addEventListener('mouseleave', function() {
//   this.classList.remove('custom-cursor');
// });



document.addEventListener('mousemove', function(e) {
  document.querySelectorAll('.quickview-wrapper').forEach(container => {
      if (container.style.display === 'block') {
          // const x = e.clientX - window.innerWidth / 2;
          // const y = e.clientY - window.innerHeight / 2;
          // container.style.transform = `translate(${x}px, ${y}px)`;
          // const video = container.querySelector('video');
          // const shiftAmount = video.clientWidth / 2;
          const Xstart = (window.innerWidth/2) 
          

          // const centerX = e.clientX - shiftAmount;
          // const centerY = window.innerHeight / 2 - video.clientHeight / 2;
          // container.style.transform = `translate(${centerX}px, ${centerY}px)`;

          let deltaX = Xstart/100 + (e.clientX - window.innerWidth) / (e.clientX / 2);
          let deltaY = - 50 + (e.clientY - window.innerHeight) / (e.clientY / 2);

          container.style.transform = `translate(${deltaX}%, ${deltaY}%`;
          
          // let deltaX = calc(-50% + (video.clientWidth / 2)) + (e.clientX - window.innerWidth) / (e.clientX / 2);
          // let deltaY = - 50 + (e.clientY - window.innerWidth) / (e.clientY / 2);

          // container.style.transform = `translate(${deltaX}%, ${deltaY}%`;
      }
  });
});