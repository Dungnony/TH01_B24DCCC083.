import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

export default function App() {
  const questions = [
    {
      question: "ReactJS dùng để làm gì?",
      options: ["Mobile App", "Web UI", "Hệ điều hành", "Cơ sở dữ liệu"],
      answerIndex: 1,
    },
    {
      question: "Hook nào dùng để quản lý state trong function component?",
      options: ["useMemo", "useEffect", "useState", "useRef"],
      answerIndex: 2,
    },
    {
      question: "Props trong React là gì?",
      options: [
        "Trạng thái nội bộ component",
        "Dữ liệu truyền từ cha xuống con",
        "Tên gọi khác của JSX",
        "Cấu hình Babel"
      ],
      answerIndex: 1,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === questions[current].answerIndex;
    if (correct) setScore((s) => s + 1);
    setFeedback(correct ? "✅ Chính xác!" : "❌ Chưa đúng.");
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setFeedback("");
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
    setFeedback("");
  };

  return (
    <div className="container">
      <p className="desc">
        <b>Bài 5: Quiz App đơn giản:</b> Có 3 câu hỏi trắc nghiệm. Chọn đáp án để
        xem đúng/sai ngay. Trả lời hết sẽ hiện tổng số câu đúng.
      </p>
      <h1>Bài 5: Quiz App</h1>

      {!showResult ? (
        <>
          <div className="progress">Câu {current + 1}/{questions.length}</div>

          <Question
            data={questions[current]}
            selectedIndex={selected}
            onSelect={handleSelect}
          />

          {selected !== null && (
            <div className="feedback">
              {feedback}
              <button className="btn next" onClick={handleNext}>
                {current + 1 < questions.length ? "Câu tiếp" : "Xem kết quả"}
              </button>
            </div>
          )}
        </>
      ) : (
        <Result score={score} total={questions.length} onRestart={handleRestart} />
      )}
    </div>
  );
}
