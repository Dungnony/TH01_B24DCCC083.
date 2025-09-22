import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ products, onAdd }) {
  return (
    <section>
      <h2>Sản phẩm</h2>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} onAdd={onAdd} />
      ))}
    </section>
  );
}

