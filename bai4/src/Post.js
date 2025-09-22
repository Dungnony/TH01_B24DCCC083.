import React, { useState } from "react";

export default function Post({ text, initialLikes = 0, initialDislikes = 0 }) {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);

  return (
    <div className="post">
      <p className="post-text">{text}</p>
      <div className="actions">
        <button className="btn" onClick={() => setLikes(likes + 1)}>
          👍
        </button>
        <span className="count">{likes}</span>
        <button className="btn" onClick={() => setDislikes(dislikes + 1)}>
          👎
        </button>
        <span className="count">{dislikes}</span>
      </div>
    </div>
  );
}
