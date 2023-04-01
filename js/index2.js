// JavaScript містить масив рядків.

const ingredients = ["Potatoes","Mushrooms","Garlic","Tomatos","Herbs","Condiments",];

const list = document.querySelector('#ingredients');
ingredients.forEach(value => {
    const listItem = document.createElement('li');
    listItem.textContent = value;
    list.append(listItem);
    listItem.classList.add("item");
})

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.