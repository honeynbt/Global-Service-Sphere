const categoriesData = [
  // Replace with your actual product category data
  { name: "Gadgets", image: "/image/gadget (2).jpg", link: "/gadget.html" },
  { name: "Accessories", image: "/image/gadget.jpg", link: "/accessories.html" },
  { name: "Home Appliances", image: "/image/appliance.webp", link: "/appliance.html" },
  { name: "Vehicles", image: "image/vehicle.jpg", link: "/vehicle.html" }
];

const categoriesContainer = document.querySelector('.categories-container');

categoriesData.forEach(category => {
  const categoryItem = document.createElement('div');
  categoryItem.classList.add('category-item');

  const categoryImage = document.createElement('img');
  categoryImage.src = category.image;
  categoryItem.appendChild(categoryImage);

  const categoryName = document.createElement('h3');
  categoryName.textContent = category.name;
  categoryItem.appendChild(categoryName);

  categoryItem.addEventListener('click', () => {
    // Redirect to the linked subcategory page
    window.location.href = category.link;
  });

  categoriesContainer.appendChild(categoryItem);
});
