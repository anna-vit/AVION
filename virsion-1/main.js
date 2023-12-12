document.getElementById('menu-link').addEventListener('click', function(e) {
    e.preventDefault(); // Предотвратите переход по ссылке
    this.classList.toggle('clicked'); // Переключает класс 'clicked' при клике
  });
  