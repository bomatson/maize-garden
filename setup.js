var canvas = document.getElementById('maize-garden');
var ctx    = canvas.getContext('2d');
var garden = new Garden();
garden.grow();
requestAnimationFrame(garden.loop);

