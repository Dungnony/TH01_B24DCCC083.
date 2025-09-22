import { useState } from 'react';

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState('');

  const handleAdd = () => {
    onAdd && onAdd(value);
    setValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="row">
      <input
        placeholder="Nhập công việc"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>Thêm</button>
    </div>
  );
}
