const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

// виводимо кількість категорій в консоль
console.log(`Number of categories: ${categoriesItems.length}`);

// для кожного елемента li.item виводимо заголовок і кількість підкатегорій в консоль
categoriesItems.forEach(item => {
  const heading = item.querySelector('h2').textContent;
  const subCategories = item.querySelectorAll('li').length;
  console.log(`Category: ${heading} Subcategories: ${subCategories}`);
});