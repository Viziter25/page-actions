/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const reclama = document.querySelectorAll(".promo__adv img"),
      imgBg = document.querySelector('.promo__bg'),
      komedia = imgBg.querySelector('.promo__genre'),
      films = document.querySelectorAll('.promo__interactive-item'),
      films1 = document.querySelector('.promo__interactive-list');
      
// 1
reclama.forEach(item => item.remove());


// 2
komedia.innerHTML = 'Драма';

// 3 
imgBg.style.backgroundImage = 'url("img/bg.jpg")';
// imgBg.style = 'background:url(/project/img/bg.jpg) center center/cover no-repeat';

//4-5
films.forEach(item => item.remove());
// films1.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    films1.innerHTML += `
        <li class="promo__interactive-item">${i +1} ${film}
            <div class="delete"></div>
        </li>
    `;
});
