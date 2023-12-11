/*

Урок 2. События, формы
Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице.

1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

a. Контейнер для отображения текущего изображения.
b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

2. Используйте HTML для создания элементов интерфейса.

3. Используйте JavaScript для обработки событий:

a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

*/


const arrowPrevios=document.querySelector(".previos");
const arrowNext=document.querySelector(".next");
const slider_img = document.querySelectorAll(".slider-image");
const bottom = document.getElementById("bottom");
let currentSlideIndex = 0;
const paginationCircles = [];
const getIndex=changeSlide;

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    
    let number=paginationCircles.length+1;
    div.insertAdjacentHTML("beforeend",number);

    bottom.appendChild(div);
    paginationCircles.push(div);
}






function addPagination() {
    slider_img.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}
function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide() {
    slider_img[currentSlideIndex].classList.add("block");
}

function hideSlide() {
    slider_img[currentSlideIndex].classList.remove("block");
}

function changeSlide(slideIndex) {
    hideSlide();
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slider_img.length - 1) {
        newSlideIndex = 0;
    }
 return  changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex <= 0) {
        newSlideIndex = slider_img.length - 1;
    }
  return  changeSlide(newSlideIndex);
}

addPagination();
arrowNext.addEventListener("click",nextSlide);
arrowPrevios.addEventListener("click",previousSlide);