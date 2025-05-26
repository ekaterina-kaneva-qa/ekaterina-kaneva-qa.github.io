/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Стабильность — это иллюзия. Проверим ещё раз?')
})

const bug = document.querySelector('.bug-link');
let clickedOnce = false;

// Проверяем, что устройство без hover (мобильное)
if (window.matchMedia('(hover: none)').matches) {
  bug.addEventListener('click', (e) => {
    if (!clickedOnce) {
      e.preventDefault(); // чтобы первый клик не переходил по ссылке
      alert("Я в прод. Поймаешь меня? (еще 1 клик)");
      clickedOnce = true;
      setTimeout(() => clickedOnce = false, 9000); 
    }
  });
}
