// by default components are react server components
"use client";

import { useState } from "react";

// if we are going to use useState etc we need to do it on a client component
function EditableComments({
  comments: originalComments,
}: {
  comments: string[];
}) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(originalComments);

  return (
    <div>
      {comments.map((comment) => (
        <li key={comment}>{comment}</li>
      ))}
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        onClick={() => {
          setComments([...comments, newComment]);
          setNewComment("");
        }}
      >
        Add Comment
      </button>
    </div>
  );
}

export default EditableComments;