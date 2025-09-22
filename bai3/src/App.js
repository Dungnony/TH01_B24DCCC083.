import React, { useMemo, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const PRODUCTS = [
  { id: 'book', name: 'Sách', price: 10000 },
  { id: 'pen',  name: 'Bút',  price: 5000  },
  { id: 'note', name: 'Vở',  price: 7000  },
];

function App() {
  // STATE: giỏ hàng lưu theo Map{id -> item}
  const [cartMap, setCartMap] = useState({});

  const cartItems = useMemo(() => Object.values(cartMap), [cartMap]);

  // Thêm vào giỏ
  const handleAdd = (product) => {
    setCartMap((prev) => {
      const existed = prev[product.id];
      const nextQty = existed ? existed.qty + 1 : 1;
      return {
        ...prev,
        [product.id]: { ...product, qty: nextQty },
      };
    });
  };

  // Tăng/giảm/xóa
  const inc = (id) => setCartMap((p) => ({ ...p, [id]: { ...p[id], qty: p[id].qty + 1 } }));
  const dec = (id) =>
    setCartMap((p) => {
      const nextQty = Math.max(1, p[id].qty - 1);
      return { ...p, [id]: { ...p[id], qty: nextQty } };
    });
  const removeItem = (id) =>
    setCartMap((p) => {
      const clone = { ...p };
      delete clone[id];
      return clone;
    });

  return (
    <div className="container">
      <h1>Bài 3: Giỏ hàng</h1>
      <ProductList products={PRODUCTS} onAdd={handleAdd} />
      <Cart items={cartItems} onInc={inc} onDec={dec} onRemove={removeItem} />
    </div>
  );
}

export default App;
