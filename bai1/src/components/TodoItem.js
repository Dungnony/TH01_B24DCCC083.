export default function TodoItem({ todo, onDelete }) {
  return (
    <li className="item">
      <span className="text">{todo.text}</span>
      <button className="danger" onClick={() => onDelete && onDelete(todo.id)}>
        Xóa
      </button>
    </li>
  );
}
