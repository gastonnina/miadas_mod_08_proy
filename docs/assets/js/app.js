document.addEventListener('DOMContentLoaded', function () {
  // Example Plotly chart
  var el = document.getElementById('chart-intro');
  if (el) {
    Plotly.newPlot(el, [{
      type: 'bar',
      x: ['Data Scientist','Full‑Stack','DevOps','ML Eng'],
      y: [72, 55, 48, 78]
    }], {title: 'Uso de IA por rol (ejemplo)', margin: {t: 40}});
  }
});
function toggleFullscreen(btn) {
  const iframe = btn.nextElementSibling;

  if (!iframe.classList.contains("fullscreen-iframe")) {
    iframe.classList.add("fullscreen-iframe");
    btn.textContent = "✖ Cerrar";
  } else {
    iframe.classList.remove("fullscreen-iframe");
    btn.textContent = "🔍 Zoom";
  }
}

