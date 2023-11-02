import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProductItem = styled.div`
background: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
  color: #3498db;
  font-weight: bold;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: green;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;

const Product = ({ product }) => {
  return (
    <motion.div layout whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <ProductItem>
        <ProductImage
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" // Replace this URL with your image URL
          alt={product.title}
        />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>₹{product.price}</ProductPrice>
      </ProductItem>
    </motion.div>
  );
};

export default Product;

