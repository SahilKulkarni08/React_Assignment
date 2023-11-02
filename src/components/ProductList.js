import React, { useState } from 'react';
import Product from './Product';
import styled from 'styled-components';

const ProductListContainer = styled.div`
  position: relative;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 50px;
`;

const NavigationBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000; /* Set a higher z-index value */
  background: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
  border-bottom: 2px solid rgba(41, 128, 185, 0.7);


  &:hover {
    background-color: rgba(41, 128, 185, 0.7);
  }
`;


const Title = styled.h1`
  margin: 0;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SortButton = styled.button`
  margin-right: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  background-color: #3498db;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const PageButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #3498db;
  border-radius: 4px;
  cursor: pointer;
  color: #3498db;
  background-color: #fff;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background-color: #3498db;
  }
`;

const ProductList = ({ products }) => {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortBy, setSortBy] = useState(null);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const handlePagination = page => {
    setCurrentPage(page);
  };

  const sortProducts = key => {
    let sorted = [...sortedProducts];
    if (key !== sortBy) {
      sorted = sortedProducts.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
      setSortBy(key);
    } else {
      sorted = sortedProducts.reverse();
    }
    setSortedProducts(sorted);
  };

  return (
    <div>
      <NavigationBar>
        <Title>Product List</Title>
        <ButtonContainer>
          <SortButton onClick={() => sortProducts('title')}>Sort by Title</SortButton>
          <SortButton onClick={() => sortProducts('price')}>Sort by Price</SortButton>
          {Array.from({ length: totalPages }).map((_, index) => (
            <PageButton key={index} onClick={() => handlePagination(index + 1)}>
              {index + 1}
            </PageButton>
          ))}
        </ButtonContainer>
      </NavigationBar>
      <ProductListContainer>
        {currentItems.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </ProductListContainer>
    </div>
  );
};

export default ProductList;
