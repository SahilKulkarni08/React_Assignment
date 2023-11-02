

const generateProducts = () => {
    const products = [];
  
    for (let i = 1; i <= 30; i++) {
      products.push({
        id: i,
        title: `Product ${i}`,
        description: `Description for Product ${i}`,
        price: 19.99 * i, 
        category: i % 2 === 0 ? 'Category 1' : 'Category 2', 
      });
    }
  
    return products;
  };
  
  const productsData = generateProducts();
  
  export default productsData;
  
  