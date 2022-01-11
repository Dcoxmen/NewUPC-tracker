import React from 'react';
import PropTypes from 'prop-types';
import {
  useProducts,
  deleteProduct,
  setCurrent,
  clearCurrent
} from '../../context/product/ProductState';

const ProductItem = ({ product }) => {
  // we just need the product dispatch without state.
  const productDispatch = useProducts()[1];

  const { _id, productname, producttype, packgtype, productline, devicetype, devicebrand, upc, innercarton, mastercarton, modelsku, pkgid, status } = product;

  const onDelete = () => {
    deleteProduct(productDispatch, _id);
    clearCurrent(productDispatch);
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {productname}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (status === 'active' ? 'badge-success' : 'badge-primary')
          }
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {productline && (
          <li>
            Product line: {productline}
          </li>
        )}
        {producttype && (
          <li>
            Product type: {producttype}
          </li>
        )}
        {packgtype && (
          <li>
            packgtype: {packgtype}
          </li>
        )}
        {devicetype && (
          <li>
            Device: {devicetype}
          </li>
        )}
        {devicebrand && (
          <li>
            Brand: {devicebrand}
          </li>
        )}

        {upc && (
          <li>
            UPC code: {upc}
          </li>
        )}
         {innercarton && (
          <li>
            Inner carton: {innercarton}
          </li>
        )}
         {mastercarton && (
          <li>
            Master carton: {mastercarton}
          </li>
        )}
        {modelsku && (
          <li>
            SKU: {modelsku}
          </li>
        )}

         {pkgid && (
          <li>
            PackageID: {pkgid}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(productDispatch, product)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;
