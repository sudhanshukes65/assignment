
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productSlice';
import { useEffect, useState } from 'react';

const HomeScreen = () => {
  const  { data: products , isLoading, error } =   useGetProductsQuery();
    // console.log(data)

  



  return (
    <>
    {isLoading ? (
  <div>Loading...</div>
) : error ? (
  <div>{error?.data.message || error.error}</div>
) : (
  <>
    <h1>Latest Products</h1>
    <Row>
      {products.products.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  </>
)}
      
        
      
      
    </>
  );
};

export default HomeScreen;

