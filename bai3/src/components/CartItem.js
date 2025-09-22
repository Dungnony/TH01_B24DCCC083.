import React from 'react';
import { formatVND } from '../utils/money';

export default function CartItem({ item, onInc, onDec, onRemove }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: 12, padding: '8px 0', borderBottom: '1px solid #eee' }}>
      <div>
        <div style={{ fontWeight: 600 }}>{item.name}</div>
        <div style={{ fontSize: 13, color: '#666' }}>{formatVND(item.price)} / cái</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button onClick={() => onDec(item.id)} disabled={item.qty <= 1}>−</button>
        <span>{item.qty}</span>
        <button onClick={() => onInc(item.id)}>+</button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <strong>{formatVND(item.price * item.qty)}</strong>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={() => onRemove(item.id)}>Xóa</button>
      </div>
    </div>
  );
}
