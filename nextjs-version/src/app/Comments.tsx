import EditableComments from "./EditableComments";

// to fake the backend, the cooments take longer to load than the rest of the page
const commentsFetch = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["Comment 1", "Comment 2", "Comment 3"]), 2000)
  );

async function Comments() {
  const comments = (await commentsFetch()) as string[];

    // we could do something like that, but if we need to manage useState we need to use a client component
    //   return <>
    //   {comments.map(comment=><li key={comment}>{comment}</li>)}
    //   </>;
    // that's why we use a client component
  return <EditableComments comments={comments} />;
}

export default Comments;