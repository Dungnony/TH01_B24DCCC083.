import React from 'react';
import CartItem from './CartItem';
import { formatVND } from '../utils/money';

export default function Cart({ items, onInc, onDec, onRemove }) {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <section style={{ marginTop: 32 }}>
      <h2>Giỏ hàng</h2>
      {items.length === 0 ? (
        <div>Chưa có sản phẩm nào.</div>
      ) : (
        <>
          {items.map((it) => (
            <CartItem
              key={it.id}
              item={it}
              onInc={onInc}
              onDec={onDec}
              onRemove={onRemove}
            />
          ))}
          <div style={{ textAlign: 'right', marginTop: 12, fontSize: 18 }}>
            <strong>Tổng: {formatVND(total)}</strong>
          </div>
        </>
      )}
    </section>
  );
}
