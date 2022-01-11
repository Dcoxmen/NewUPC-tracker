import React, { Fragment, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProductItem from './ProductItem';
import Spinner from '../layout/Spinner';
import { useProducts, getProducts } from '../../context/product/ProductState';


const Products = () => {
    const [productState, productDispatch] = useProducts();
  
    const { products, filtered } = productState;
  
    useEffect(() => {
      getProducts(productDispatch);
    }, [productDispatch]);
  
    if (products !== null && products.length === 0) {
      return <h4>Please add a product</h4>;
    }
  
    return (
      <Fragment>
        {products !== null ? (
          <TransitionGroup>
            {filtered !== null
              ? filtered.map((product) => (
                  <CSSTransition
                    key={product._id}
                    timeout={500}
                    classNames='item'
                  >
                    <ProductItem product={product} />
                  </CSSTransition>
                ))
              : products.map((product) => (
                  <CSSTransition
                    key={product._id}
                    timeout={500}
                    classNames='item'
                  >
                    <ProductItem product={product} />
                  </CSSTransition>
                ))}
          </TransitionGroup>
        ) : (
          <Spinner />
        )}
      </Fragment>
    );
  };
  
  export default Products;
  