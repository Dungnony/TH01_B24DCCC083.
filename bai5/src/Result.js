import React from "react";

export default function Result({ score, total, onRestart }) {
  return (
    <div className="result">
      <h2>Kết quả</h2>
      <p>Bạn trả lời đúng <b>{score}</b>/<b>{total}</b> câu.</p>
      <button className="btn" onClick={onRestart}>Làm lại</button>
    </div>
  );
}
