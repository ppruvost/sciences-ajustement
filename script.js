const form = document.getElementById('data-form');
const chartCanvas = document.getElementById('chart');
const equationDiv = document.getElementById('equation');

let chart;

// Fonction pour calculer la régression linéaire
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

// Fonction pour calculer l'énergie reçue E = P * t
function calculateEnergy(power, time) {
  return power.map((p, i) => p * time[i]);
}

// Événement lors de la soumission du formulaire
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Récupération et conversion des valeurs
  const time = document.getElementById('time-input').value.split(',').map(Number);
  const power = document.getElementById('power-input').value.split(',').map(Number);

  if(time.length !== power.length) {
    alert("Le nombre de valeurs de temps et de puissance doit être identique !");
    return;
  }

  // Calcul de l'énergie
  const energy = calculateEnergy(power, time);

  // Calcul de la régression linéaire
  const { slope, intercept } = linearRegression(time, energy);

  // Affichage de l'équation propre
  let sign = intercept >= 0 ? "+" : "-";
  equationDiv.textContent = `E = ${slope.toFixed(2)} × t ${sign} ${Math.abs(intercept.toFixed(2))} (J)`;

  // Générer les points de la droite de régression
  const regressionLine = time.map(t => slope * t + intercept);

  // Création du graphique
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
