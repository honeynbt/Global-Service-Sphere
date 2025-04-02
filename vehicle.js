// Replace with your actual accessories subcategory data
const accessorySubcategories = [
    { name: "Bike", link: "accessories-subcategories/vr-headset.html", image: "image/bike.jpg" },
    { name: "Car", link: "accessories-subcategories/gaming-product.html", image: "image/car.jpg" },
    { name: "Bus", link: "accessories-subcategories/keyboard-mouse.html", image: "image/bus.jpg" },
    { name: "Truck", link: "accessories-subcategories/charger-cables.html", image: "image/truck.jpg" }
  ];
  
  // Get the product categories container
  const productCategories = document.querySelector('.product-categories');
  
  // Loop through accessories subcategory data and create elements
  accessorySubcategories.forEach(subcategory => {
    const categoryItem = document.createElement('div');
    categoryItem.classList.add('category-item');
  
    const subcategoryImage = document.createElement('img');
    subcategoryImage.src = subcategory.image; // Access image path from data
    categoryItem.appendChild(subcategoryImage);
  
    const subcategoryName = document.createElement('h3');
    subcategoryName.textContent = subcategory.name;
    categoryItem.appendChild(subcategoryName);
  
    // Add click event listener to each subcategory item
    categoryItem.addEventListener('click', () => {
      // Redirect to the linked subcategory page
      window.location.href = subcategory.link;
    });
  
    productCategories.appendChild(categoryItem);
  });
  