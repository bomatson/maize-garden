function Dot() {
  this.y = Math.random() * canvas.height;
  this.x = Math.random() * canvas.width;
  this.intervalX = Math.random()*6-3;
  this.intervalY = Math.random()*6-3;
  this.onFire = false;
  this.brightness = 0;

  this.update = function() {
    this.x += this.intervalX;
    this.y += this.intervalY;
    this.checkForBoundary();
    this.render();
  };

  this.checkForBoundary = function() {
    if (this.x > canvas.width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = canvas.width;
    }
    if (this.y > canvas.height) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = canvas.height;
    }
  };

  this.render = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 8, 0, (2 * Math.PI))
    ctx.fillStyle = '#00008b';
    ctx.fill();
  };
};
