import TodoItem from './TodoItem';

export default function TodoList({ items, onDelete }) {
  if (!items || items.length === 0) {
    return <div className="empty">Chưa có việc nào. Hãy thêm việc mới!</div>;
  }
  return (
    <ul className="list">
      {items.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}
