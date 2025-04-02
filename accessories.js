// Replace with your actual accessories subcategory data
const accessorySubcategories = [
    { name: "VR Headset", link: "accessories-subcategories/vr-headset.html", image: "image/vr.jpg" },
    { name: "Gaming Product", link: "accessories-subcategories/gaming-product.html", image: "image/gaming.jpg" },
    { name: "Keyboard & Mouse", link: "accessories-subcategories/keyboard-mouse.html", image: "image/keyboard.jpg" },
    { name: "Charger & Cables", link: "accessories-subcategories/charger-cables.html", image: "image/charger.jpg" }
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
  