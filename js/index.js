function moveTo(idElement) {
  let element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    to = document.getElementById(idElement).offsetTop,
    duration = 750,
    change = to - start,
    startTs = performance.now(),
    animateScroll = function (ts) {
      let currentTime = ts - startTs;
      element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
      (currentTime < duration) ? requestAnimationFrame(animateScroll) : element.scrollTop = to;
    };
  requestAnimationFrame(animateScroll);
};

function easeInOutQuad(currentTime, start, change, duration) {
  currentTime /= duration / 2;

  if (currentTime < 1) {
    return change / 2 * currentTime * currentTime + start;
  } else {
    currentTime--;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
  }
}