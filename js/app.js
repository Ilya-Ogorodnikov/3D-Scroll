// Engine for 3D Scroll

const zSpacing = -1000;
let lastPos = zSpacing / 5;
const frames = document.getElementsByClassName('frame');
const frame = Array.from(frames);
const zVals = [];

window.onscroll = () => {
  const top = document.documentElement.scrollTop;
  const delta = lastPos - top;

  lastPos = top;

  frame.forEach((el, i) => {
    zVals.push((i * zSpacing) + zSpacing);
    zVals[i] += delta * -5.5;
    const frame = frames[i];
    const transform = `translateZ(${zVals[i]}px)`;
    const opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
  });
};

window.scrollTo(0, 1);

// Audio

const soundButton = document.querySelector('.soundbutton');
const audio = document.querySelector('.audio');

soundButton.addEventListener('click', event => {
  soundButton.classList.toggle('paused');

  audio.paused ? audio.play() : audio.pause()
});

window.onfocus = () => {
  soundButton.classList.contains('paused') ? audio.pause() : audio.play();
};

window.onblur = () => {
  audio.pause();
};