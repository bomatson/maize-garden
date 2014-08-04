function Garden() {
  var dots = [];
  var dotCount = 50;
  var minDistance = 100;
  var checkConnectionBetween = function(firstDot, secondDot) {
    var distanceX = secondDot.x - firstDot.x;
    var distanceY = secondDot.y - firstDot.y;
    var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < minDistance) {
      ctx.beginPath();
      ctx.lineWidth= 5;
      ctx.strokeStyle = "rgba(250,250,0,"+(1-distance/minDistance)+")";
      ctx.moveTo(firstDot.x, firstDot.y);
      ctx.lineTo(secondDot.x, secondDot.y);
      ctx.stroke();
      ctx.closePath();
    }
  };

  var connectTheDots = function() {
    for(i = 0; i < dotCount-1; i++) {
      var firstDot = dots[i];
      for(var j = i+1; j < dotCount; j++){
        var secondDot = dots[j];
        checkConnectionBetween(firstDot, secondDot);
      };
    };
  };

  this.grow = function() {
    for(i = 0; i < dotCount; i++){
      var dot = new Dot();
      dot.render();
      dots.push(dot);
    }
  };

  this.loop = function(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(i = 0; i < dots.length; i++){
      dots[i].update();
    }
    connectTheDots();
    requestAnimationFrame(garden.loop);
  };
}
