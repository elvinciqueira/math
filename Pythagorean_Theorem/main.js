window.onload = function() {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    centerX = width / 2,
    centerY = height / 2;

  function distanceXY(x0, y0, x1, y1) {
    let dx = x0 - x1,
      dy = y0 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }

  document.body.addEventListener("mousemove", function(event) {
    context.clearRect(0, 0, width, height);

    let dist = distanceXY(centerX, centerY, event.clientX, event.clientY);

    if (dist < 100) {
      context.fillStyle = "#7518c1";
    } else {
      context.fillStyle = "#cccc";
    }

    context.beginPath();
    context.arc(centerX, centerY, 100, 0, Math.PI * 360, false);
    context.fill();
  });
};
