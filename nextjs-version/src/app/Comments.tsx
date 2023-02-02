// import EditableComments from "./EditableComments";

// to fake the backend, the cooments take longer to load than the rest of the page
const commentsFetch = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["Comment 1", "Comment 2", "Comment 3"]), 2000)
  );

async function Comments() {
  const comments = (await commentsFetch()) as string[];

//   return <EditableComments comments={comments} />;
  return <>
  {comments.map(comment=><li key={comment}>{comment}</li>)}
  </>;
}

export default Comments;