/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

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
      movieList = document.querySelector('.promo__interactive-list'),
      addform = document.querySelector('form.add'),
      addFilm = document.querySelector('.adding__input'),
      checkbox = document.querySelector('input[type=checkbox]');

const deleteIcon = document.querySelectorAll('.delete');
console.log(deleteIcon);
      
   
      
//1
addform.addEventListener('submit', (e) => {
    e.preventDefault();

    let newFilm = addFilm.value;
    const favorite = checkbox.checked;

    if (newFilm) {
        //2
        if (newFilm.length > 21) {
          newFilm = `${newFilm.substring(0, 22)}...`;
        }
        //4
        if (favorite) {
            console.log('Добавляем любимый фильм');
        }

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, movieList);
    }



    e.target.reset();//скидывает значение импута после пуша
    // addform.reset();
});



const deleteReclama = (arr) => {
    arr.forEach(item => item.remove());
};
deleteReclama(reclama);


const makeChanges = () => {
    komedia.innerHTML = 'Драма';

    imgBg.style.backgroundImage = 'url("img/bg.jpg")';
};
makeChanges();


const sortArr = (arr) => {
    arr.sort();
};
 sortArr(movieDB.movies);


function createMovieList(films, parent) {
    // parent.forEach(item => item.remove());
    parent.innerHTML = '';
    sortArr(films);//5

    films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i +1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });
    ///3
  
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
        });
    });
    
}

createMovieList(movieDB.movies, movieList);