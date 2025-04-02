// Replace with your actual accessories subcategory data
const accessorySubcategories = [
    { name: "Macbook", link: "https://getsupport.apple.com/repair-locations?locale=en_IN", image: "image/mac.jpg" },
    { name: "Hp", link: "https://support.hp.com/in-en/help/service-center", image: "image/hp.webp" },
    { name: "Lenovo", link: "https://support.lenovo.com/in/en/lenovo-service-provider", image: "image/lenovo.jpg" },
    { name: "Dell", link: "https://www.dell.com/support/home/en-in/servicecenter", image: "image/dell.jpg" },
    { name: "Asus", link: "https://www.asus.com/in/support/service-center/india/", image: "image/asus.avif" }
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