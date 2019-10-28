window.onload = function() {
  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  values = [5, 7, 13, 12, 23, 25, 24, 42, 12, 34, 32, 28, 27, 10, 8];
  min = Math.min.apply(null, values);
  max = Math.max.apply(null, values);

  function norm(value, min, max) {
    return (value - min) / (max - min);
  }

  context.beginPath();

  for (let i = 0; i < values.length; i++) {
    let normValue = norm(values[i], min, max),
      x = (width / (values.length - 1)) * i,
      y = height - height * normValue;

    if (i == 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  }

  context.stroke();
};
