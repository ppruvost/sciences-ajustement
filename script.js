const form = document.getElementById('data-form');
const chartCanvas = document.getElementById('chart');
const equationDiv = document.getElementById('equation');

let chart;

function linearRegression(x, y) {
  const n = x.length;
  let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
  
  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXY += x[i] * y[i];
    sumXX += x[i] * x[i];
  }
  
  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  return { slope, intercept };
}

function calculateEnergy(power, time) {
  // E = P * t
  const energy = power.map((p, i) => p * time[i]);
  return energy;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const time = document.getElementById('time-input').value.split(',').map(Number);
  const power = document.getElementById('power-input').value.split(',').map(Number);

  if(time.length !== power.length) {
    alert("Le nombre de valeurs de temps et de puissance doit être identique !");
    return;
  }

  const energy = calculateEnergy(power, time);
  const { slope, intercept } = linearRegression(time, energy);

  // Affichage équation
  equationDiv.textContent = `E = ${slope.toFixed(2)} × t + ${intercept.toFixed(2)} (J)`;

  // Générer données droite
  const regressionLine = time.map(t => slope * t + intercept);

  // Graphique
  if(chart) chart.destroy();
  chart = new Chart(chartCanvas, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Énergie expérimentale (J)',
          data: time.map((t, i) => ({x: t, y: energy[i]})),
          backgroundColor: '#80665b'
        },
        {
          label: 'Droite d’ajustement',
          data: time.map((t, i) => ({x: t, y: regressionLine[i]})),
          type: 'line',
          borderColor: '#3a2d27',
          fill: false,
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Temps (s)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Énergie reçue (J)'
          }
        }
      }
    }
  });
});
