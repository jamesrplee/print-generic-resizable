window.addEventListener("resize", setSize);
document.addEventListener("DOMContentLoaded", setSize);

function setSize() {
  var vw   = window.innerWidth / 100
  var vh   = window.innerHeight / 100
  var vmin = Math.min(vw, vh)
  var vmax = Math.max(vw, vh)
  document.documentElement.style.fontSize =  (( vmin * vminsize ) + ( vmax * vmaxsize ) + ( vh * vhsize ))  + "px";
}

