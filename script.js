document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
      // Удаляем класс active у всех элементов
      document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
      // Добавляем класс active к выбранному элементу
      this.classList.add('active');
    });
  });
  