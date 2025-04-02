// Replace with your actual gadget subcategory data
const gadgetSubcategories = [
    { name: "Smartphone", link: "/mobilebrand.html", image: "image/mobile.jpg" },
    { name: "Laptop", link: "/laptopbrand.html", image: "image/laptop.jpg" },
    { name: "Audio Products", link: "/audiobrand.html", image: "image/audio.jpg" },
    { name: "Smartwatch", link: "/smartwatch.html", image: "image/smart.jpg" }
  ];
  
  
  // Get the product categories container
  const productCategories = document.querySelector('.product-categories');
  
  // Loop through gadget subcategory data and create elements
  gadgetSubcategories.forEach(subcategory => {
    const categoryItem = document.createElement('div');
    categoryItem.classList.add('category-item');
  
    // Set image source dynamically
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
  