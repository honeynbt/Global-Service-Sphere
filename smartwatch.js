// Replace with your actual accessories subcategory data
const accessorySubcategories = [
    { name: "Apple", link: "https://support.apple.com/en-in/watch/repair", image: "image/apple.jpg" },
    { name: "Fire-Boltt", link: "https://www.fireboltt.com/pages/service-center", image: "image/fireboltt.jpeg" },
    { name: "Fossil", link: "https://support.fossilgroup.com/s/article/Watch-Repairs-1616590590646?language=en_IN", image: "image/fossil.jpg" },
    { name: "Noise", link: "https://www.gonoise.com/pages/service-center", image: "image/noise.webp" },
    { name: "Fastrack", link: "https://near-me.store/en/fastrack-center-near-me", image: "image/fastrack.png" }
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