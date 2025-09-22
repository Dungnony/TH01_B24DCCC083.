import React from "react";
import Post from "./Post";

export default function App() {
  const posts = [
    { id: 1, text: "Học ReactJS có khó không?", likes: 0, dislikes: 0 },
    { id: 2, text: "Props và State là gì?", likes: 0, dislikes: 0 },
    { id: 3, text: "Lập trình web có vui không?", likes: 0, dislikes: 0 },
  ];

  return (
    <div className="container">
      <h1>Bài 4: Like/Dislike Post</h1>
      <p className="desc">
        Có component Post hiển thị đoạn text và 2 nút Like/Dislike. Nhấn Like
        → tăng số lượt like. Nhấn Dislike → tăng số lượt dislike. App render
        2–3 post khác nhau.
      </p>

      {posts.map((p) => (
        <Post
          key={p.id}
          text={p.text}
          initialLikes={p.likes}
          initialDislikes={p.dislikes}
        />
      ))}
    </div>
  );
}
