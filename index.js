function data() {
  const len = 64;
  const iters = 1000000;
  const avg = iters / len;
  var freqs = Array(len).fill().map(() => new Uint16Array(len));

  let i = iters;
  while (i >= 0) {
    (new Uint8Array(len).map((_, i) => i)).sort(() => 0.5 - Math.random())
      .forEach((val, index) => freqs[val][index] += 1);
    i -= 1;
  }

  let max = Math.max(...freqs.map(row => Math.max(...row)))
  let min = Math.min(...freqs.map(row => Math.min(...row)))
  console.log(min, max);

  Plotly.newPlot('myDiv', [{
    colorscale: 'Viridis',
    z: freqs,
    showlegend: false,
    showcolorscale: false,
    type: 'surface',
    cmax: avg * 1.25,
    cmin: avg * 0.75,
  }]);
}

data();
