// Replace with your actual accessories subcategory data
const accessorySubcategories = [
    { name: "Apple", link: "https://getsupport.apple.com/repair-locations?locale=en_IN", image: "image/apple.jpg" },
    { name: "Samsung", link: "https://www.samsung.com/in/support/service-center/", image: "image/samsung.jpg" },
    { name: "Realme", link: "https://www.realme.com/in/support/services", image: "image/realme.jpg" },
    { name: "Oppo", link: "https://support.oppo.com/in/service-center/", image: "image/oppo.jpg" },
    { name: "Xiaomi", link: "https://www.mi.com/in/service/repair/", image: "image/xiaomi.jpg" }
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
  