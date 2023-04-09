// JavaScript містить масив рядків.

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment(); 
ingredients.forEach(value => {
    const listItem = document.createElement('li');
    listItem.textContent = value;
    listItem.classList.add("item");
    fragment.appendChild(listItem); 
});

list.appendChild(fragment); 

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.