const rouletteWheel = document.querySelector('.roulette-wheel');

rouletteWheel.addEventListener('click', spinWheel);

function spinWheel() {
  const combinations = [
    'Combination 1', 'Combination 2'
  ];

  const randomIndex = Math.floor(Math.random() * combinations.length);
  const selectedCombination = combinations[randomIndex];
  alert(`Selected combination: ${selectedCombination}`);
}
