import React from 'react';
import { formatVND } from '../utils/money';

export default function ProductItem({ product, onAdd }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
      <span style={{ minWidth: 220 }}>
        {product.name} - {formatVND(product.price)}
      </span>
      <button onClick={() => onAdd(product)}>Thêm vào giỏ</button>
    </div>
  );
}
