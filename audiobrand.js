// Replace with your actual accessories subcategory data
const accessorySubcategories = [
    { name: "Boat", link: "https://www.boat-lifestyle.com/pages/service-center-list", image: "image/boat.webp" },
    { name: "JBL", link: "https://support.jbl.com/in/en/customer-service/", image: "image/jbl.png" },
    { name: "Zebronics", link: "https://zebronics.com/pages/service-centres", image: "image/zebronics.webp" },
    { name: "Sony", link: "https://www.sony.co.in/electronics/support/articles/00191873", image: "image/sony.jpg" }
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