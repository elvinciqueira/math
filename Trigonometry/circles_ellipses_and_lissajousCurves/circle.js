window.onload = function() {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight),
    centerX = width / 2,
    centerY = height / 2,
    radius = 200,
    angle = 0,
    numbObjects = 10,
    slice = (Math.PI * 2) / numbObjects,
    speed = 0.01,
    x,
    y;

  for (let i = 0; i < numbObjects; i++) {
    angle = i * slice;
    x = centerX + Math.cos(angle) * radius;
    y = centerY + Math.sin(angle) * radius;
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2, false);
    context.fill();
  }
};
