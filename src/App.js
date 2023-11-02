
import React from 'react';
import ProductList from './components/ProductList';
import styled from 'styled-components';
import productsData from './data/ProductsData';

const PageWrapper = styled.div`
  background-color: #f0f0f0; 
  min-height: 100vh; 
`;

const App = () => {
  return (
    <PageWrapper>
      <ProductList products={productsData} />

    </PageWrapper>
  );
};

export default App;


