window.onload = function() {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  let centerY = height * 0.5,
    centerX = width * 0.5,
    baseAlpha = 0.3,
    offset = 0.5,
    speed = 0.1,
    angle = 0;

  render();

  function render() {
    let alpha = baseAlpha + Math.sin(angle) * offset;

    context.fillStyle = "rgba(0, 0, 0,  " + alpha + ")";

    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
    context.fill();

    angle += speed;

    requestAnimationFrame(render);
  }
};
