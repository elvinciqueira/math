window.onload = function() {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  context.translate(0, height / 2);
  context.scale(1, -1);

  for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
    let x = angle * 200,
      y = Math.sin(angle) * 200;

    context.fillRect(x, y, 5, 5);
  }
};
