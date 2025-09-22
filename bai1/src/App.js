import { useEffect, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const STORAGE_KEY = 'todos_v1';

export default function App() {
  const [todos, setTodos] = useState([]);

  // Load từ LocalStorage khi mở trang
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (Array.isArray(saved)) setTodos(saved);
    } catch {}
  }, []);

  // Lưu mỗi khi danh sách đổi
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const clean = String(text || '').trim();
    if (!clean) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: clean }]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h1>Bài 1: To-do List (CRA)</h1>
      <p className="note">
        Có input và nút “Thêm”. Khi nhập nội dung và nhấn Thêm, item mới sẽ hiển thị trong danh sách.
        Mỗi item có nút “Xóa” để xóa khỏi danh sách.
      </p>

      <TodoInput onAdd={addTodo} />

      <div className="summary">
        Tổng số việc: <b>{todos.length}</b>
      </div>

      <TodoList items={todos} onDelete={deleteTodo} />
    </div>
  );
}
