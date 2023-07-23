
function generateOpportunityWithDelay() {
  const button = document.getElementById('generateOpportunityButton');
  const remainingOpportunitiesElement = document.getElementById('remainingOpportunities');

    button.classList.add('animating');
    button.disabled = true;

    const readTexts = [
      "Lendo casa de aposta...",
      "Lendo casa de aposta..",
      "Lendo casa de aposta.",
      "Lendo casa de aposta..",
      "Lendo casa de aposta..."
    ];

    let currentIndex = 0;

    function updateReadText() {
      button.textContent = readTexts[currentIndex];
      currentIndex = (currentIndex + 1) % readTexts.length;
    }

    const readInterval = setInterval(updateReadText, 500);

    setTimeout(function () {
      clearInterval(readInterval);
      let iframe = document.getElementById('minesweeperIframe').contentWindow;
      iframe.createNewGame();

      document.getElementById('minesweeperIframe').src = './iframe/jogominer.html';
      remainingOpportunities--;
      remainingOpportunitiesElement.textContent = remainingOpportunities;

      localStorage.setItem('remainingOpportunities', remainingOpportunities);

      button.textContent = "Leitura 100% concluída";

      setTimeout(function () {
        button.textContent = "Gerar Oportunidade";
        button.classList.remove('animating');
        button.disabled = false;
      }, 2000);

    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
  let remainingOpportunitiesFromStorage = parseInt(localStorage.getItem('remainingOpportunities'));
});

function adjustIframeSize(operation) {
  const iframe = document.getElementById('minesweeperIframe');
  const container = document.getElementById('iframeContainer');
  const currentHeight = iframe.offsetHeight;
  const currentWidth = iframe.offsetWidth;
  const currentContainerHeight = container.offsetHeight;
  const currentContainerWidth = container.offsetWidth;

  const heightIncrement = 50;
  const widthIncrement = 50;

  if (operation === '-') {
    iframe.style.height = currentHeight - heightIncrement + 'px';
    iframe.style.width = currentWidth - widthIncrement + 'px';
    container.style.height = currentContainerHeight - heightIncrement + 'px';
    container.style.width = currentContainerWidth - widthIncrement + 'px';
  } else if (operation === '+') {
    iframe.style.height = Math.max(currentHeight + heightIncrement, 0) + 'px';
    iframe.style.width = Math.max(currentWidth + widthIncrement, 0) + 'px';
    container.style.height = currentContainerHeight + heightIncrement + 'px';
    container.style.width = currentContainerWidth + widthIncrement + 'px';
  }
}
